"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getUserByEmail } from "@/lib/actions/auth";
import { IKImage } from "imagekitio-next";
import config from "@/lib/config";
import { getTasksCollaborators } from "@/lib/actions/task";

const AssignedList = ({
  email,
  userId,
}: {
  email?: string;
  userId?: string;
}) => {
  const [assignedList, setAssignedList] = useState<User[]>([]);
  const [assignedUsers, setAssignedUsers] = useState<TaskUser[]>([]);
  console.log(email);
  console.log(userId);

  useEffect(() => {
    const fetchAssignedList = async () => {
      if (email) {
        const result = await getUserByEmail(email);

        if (result) {
          setAssignedList(result);
        }
      }
      if (userId) {
        const result = await getTasksCollaborators(userId);

        if (result) {
          setAssignedUsers(
            result.map((task) => ({
              users: task.users,
              board_collaborators: task.board_collaborators ?? [], // Ensure array format
            })),
          );
        }
      }
    };
    fetchAssignedList();
  }, []);

  console.log(assignedUsers);
  console.log(assignedList);

  return (
    <div className="flex">
      {assignedUsers.length > 0 ? (
        assignedUsers.map((user) => (
          <IKImage
            path={user.users.avatar}
            urlEndpoint={config.env.imageKit.urlEndPoint}
            alt="user-1"
            className="rounded-full"
            width={24}
            height={24}
            key={user.users.id}
          />
        ))
      ) : assignedList.length > 0 ? (
        assignedList.map((user) => (
          <IKImage
            path={user.avatar}
            urlEndpoint={config.env.imageKit.urlEndPoint}
            alt="user-1"
            className="rounded-full"
            width={24}
            height={24}
            key={user.id}
          />
        ))
      ) : (
        <h1>No Contributors</h1>
      )}
    </div>
  );
};
export default AssignedList;
