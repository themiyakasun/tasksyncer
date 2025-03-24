"use client";

import React, { useEffect, useState } from "react";
import { AccordionContent } from "@/components/ui/accordion";
import Image from "next/image";
import TaskName from "@/components/TaskName";
import { getTasksOfBoard } from "@/lib/actions/task";
import AssignedList from "@/components/AssignedList";

interface TaskListProps {
  tasks: TaskGet;
  board_collaborators: BoardCollaborator;
}

const TaskList = ({ id }: { id: string }) => {
  const [tasks, setTasks] = useState<TaskListProps[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      if (id) {
        const result = await getTasksOfBoard(id);

        if (result) {
          setTasks(result);
        }
      }
    };
    fetchTasks();
  }, [id]);

  return (
    <AccordionContent>
      <table>
        <thead>
          <tr>
            <th className="thead-item" align="left">
              Task
            </th>
            <th className="thead-item" align="left">
              Assigned
            </th>
            <th className="thead-item" align="left">
              Status
            </th>
            <th className="thead-item" align="left">
              Priority
            </th>
            <th>
              <button className="mx-auto flex items-center justify-center  p-3 bg-[var(--complimentary-7)] rounded-[8px] hover:shadow-[inset_0px_8px_36px_0px_rgba(0,0,0,0.25)] active:shadow-[inset_0px_8px_36px_0px_rgba(0,0,0,0.25)] relative">
                <Image
                  src="/icons/plus.png"
                  alt="plus"
                  width={17}
                  height={17}
                />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <tr
                className="border-y border-[var(--primitives-gray-200)]"
                key={index}
              >
                <td className="tdata-item">
                  <TaskName taskName={task.tasks.name} />
                </td>
                <td className="tdata-item">
                  <AssignedList
                    email={task.board_collaborators.collaborator as string}
                  />
                </td>
                <td className="tdata-item">
                  <div className="flex items-center gap-1">
                    <Image
                      src="/icons/done-green.png"
                      alt="done"
                      width={24}
                      height={24}
                    />
                    <span className="text-sm text-black">Done</span>
                  </div>
                </td>
                <td className="tdata-item">
                  <div className="flex items-center gap-1">
                    <Image
                      src={
                        task.tasks.priority === "high"
                          ? "/icons/high-priority.png"
                          : task.tasks.priority === "medium"
                            ? "/icons/medium-priority.png"
                            : "/icons/low-priority.png"
                      }
                      alt={task.tasks.priority}
                      width={17}
                      height={17}
                    />
                    <span className="text-sm text-black capitalize">
                      {task.tasks.priority}
                    </span>
                  </div>
                </td>
                <td className="tdata-item pr-0">
                  <button className="flex items-center justify-center w-full">
                    <Image
                      src="/icons/menu-gray.png"
                      alt="menu"
                      width={24}
                      height={24}
                    />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No Tasks Available</td>
            </tr>
          )}
        </tbody>
      </table>
    </AccordionContent>
  );
};
export default TaskList;
