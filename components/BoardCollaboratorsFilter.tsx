"use client";

import React, { useEffect, useState } from "react";
import { getSession } from "next-auth/react";

import { getUsersExceptOrganizer } from "@/lib/actions/auth";
import AssignCard from "@/components/AssignCard";
import { getBoardCollaborators } from "@/lib/actions/board";

interface BoardCollaboratorsFilterProps {
  users: User;
  board_collaborators: BoardCollaborator;
}

const BoardCollaboratorsFilter = ({
  searchTerm,
  onSelect,
  boardId,
}: {
  searchTerm: string;
  onSelect: (email: string) => void;
  boardId: string;
}) => {
  const [users, setUsers] = useState<BoardCollaboratorsFilterProps[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersResult = await getBoardCollaborators(boardId);

      if (usersResult) {
        setUsers(usersResult);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col gap-2 mt-2">
      {searchTerm === ""
        ? null
        : users
            .filter((user) =>
              user.users.fullName
                .toLowerCase()
                .includes(searchTerm.toLowerCase()),
            )
            .map((filteredUser) => (
              <AssignCard
                name={filteredUser.users.fullName}
                email={filteredUser.users.email}
                img={filteredUser.users.avatar}
                key={filteredUser.users.id}
                onSelect={onSelect}
              />
            ))}
    </div>
  );
};

export default BoardCollaboratorsFilter;
