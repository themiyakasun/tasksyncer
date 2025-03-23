import { tasks, tasksCollaborators } from "@/database/schema";
import { db } from "@/database/drizzle";
import { and, eq } from "drizzle-orm";

export const addTask = async (params: Task) => {
  try {
    const existingTask = await db
      .select()
      .from(tasks)
      .where(and(eq(tasks.boardId, params.board), eq(tasks.name, params.name)));

    if (existingTask.length > 0) {
      return { success: false, error: "Task already exists" };
    }

    const [newTask] = await db
      .insert(tasks)
      .values({
        name: params.name,
        description: params.description,
        boardId: params.board,
        priority: params.priority,
        startAt: params.startAt,
        endAt: params.endAt,
        timelineColor: params.timeLineColor,
      })
      .returning();

    if (!newTask) return { success: false, error: "Task creating failed" };

    if (params.collaborators.length > 0) {
      const collaboratorsEntries = params.collaborators.map((collaborator) => ({
        taskId: newTask.id,
        collaborator: collaborator,
      }));

      const newCollaborator = await db
        .insert(tasksCollaborators)
        .values(collaboratorsEntries);

      if (!newCollaborator) {
        return { success: false, error: "Collaborator adding failed" };
      }
    }

    return { success: true, data: JSON.parse(JSON.stringify(newTask)) };
  } catch (error) {
    console.log(error);
    return { success: false, error: error };
  }
};
