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
import { getOwnerBoards } from "@/lib/actions/board";
import TaskList from "@/components/TaskList";

const BoardList = ({ id }: { id: string }) => {
  const [boards, setBoards] = useState<Board[]>([]);

  useEffect(() => {
    const fetchOwnerBoards = async () => {
      const result = await getOwnerBoards(id);

      if (result) {
        setBoards(result);
      }
    };
    fetchOwnerBoards();
  }, [id]);

  return (
    <Accordion
      type="single"
      defaultValue="item-0"
      collapsible
      className="w-full"
    >
      {boards.map((board, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger className="capitalize">
            {board.title}
          </AccordionTrigger>
          {board.id && <TaskList id={board.id as string}></TaskList>}
        </AccordionItem>
      ))}
    </Accordion>
  );
};
export default BoardList;
