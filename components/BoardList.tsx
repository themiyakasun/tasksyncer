"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TaskName from "@/components/TaskName";
import { getCollaboratorBoards, getOwnerBoards } from "@/lib/actions/board";
import TaskList from "@/components/TaskList";

const BoardList = ({ id, email }: { id: string; email: string }) => {
  const [ownerBoards, setOwnerBoards] = useState<Board[]>([]);
  const [collaboratorsBoards, setCollaboratorsBoards] = useState<
    BoardCollaborators[]
  >([]);

  useEffect(() => {
    const fetchBoards = async () => {
      if (id) {
        const OwnerResult = await getOwnerBoards(id);
        if (OwnerResult) {
          setOwnerBoards(OwnerResult);
        }
      }
      if (email) {
        const CollaboratorsResult = await getCollaboratorBoards(email);
        if (CollaboratorsResult) {
          setCollaboratorsBoards(CollaboratorsResult);
        }
      }
    };
    fetchBoards();
  }, [id]);

  return (
    <Accordion
      type="single"
      defaultValue="item-0"
      collapsible
      className="w-full"
    >
      {ownerBoards.length > 0 ? (
        ownerBoards.map((board, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="capitalize">
              {board.title}
            </AccordionTrigger>
            {board.id && <TaskList boardId={board.id as string}></TaskList>}
          </AccordionItem>
        ))
      ) : collaboratorsBoards.length > 0 ? (
        collaboratorsBoards.map((board, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="capitalize">
              {board.boards.title}
            </AccordionTrigger>
            {board.boards.id && (
              <TaskList
                boardId={board.boards.id as string}
                userId={board.board_collaborators.id}
              ></TaskList>
            )}
          </AccordionItem>
        ))
      ) : (
        <h1>No Boards found</h1>
      )}
    </Accordion>
  );
};
export default BoardList;
