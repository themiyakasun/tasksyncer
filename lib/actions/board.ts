"use server";

import { auth } from "@/auth";
import { db } from "@/database/drizzle";
import { boardCollaborators, boards } from "@/database/schema";
import { and, eq } from "drizzle-orm";

export const createBoard = async (params: Board) => {
  const session = await auth();
  const id = session?.user?.id!;

  try {
    const existingBoard = await db
      .select()
      .from(boards)
      .where(and(eq(boards.owner, id), eq(boards.title, params.title)));

    if (existingBoard.length > 0) {
      return { success: false, error: "Board already exists" };
    }

    const [newBoard] = await db
      .insert(boards)
      .values({
        owner: id,
        title: params.title,
      })
      .returning();

    if (!newBoard) {
      return { success: false, error: "Error creating board" };
    }

    if (params.collaborators.length > 0) {
      const collaboratorsEntries = params.collaborators.map((collaborator) => ({
        boardId: newBoard.id,
        collaborator: collaborator,
      }));

      const newCollaborators = await db
        .insert(boardCollaborators)
        .values(collaboratorsEntries);

      if (!newCollaborators) {
        return { success: false, error: "Error adding collaborators." };
      }
    }

    return { success: true, data: JSON.parse(JSON.stringify(newBoard)) };
  } catch (error) {
    console.log(error);

    return { success: false, error: error };
  }
};
