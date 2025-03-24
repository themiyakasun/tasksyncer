"use client";

import React, { useEffect, useState } from "react";
import { getSession } from "next-auth/react";

import { getUsersExceptOrganizer } from "@/lib/actions/auth";
import AssignCard from "@/components/AssignCard";
import { getBoardCollaborators } from "@/lib/actions/board";

const CollaboratorsList = ({
  searchTerm,
  onSelect,
}: {
  searchTerm: string;
  onSelect: (email: string) => void;
}) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const session = await getSession();
      const id = session?.user?.id as string;

      const usersResult = await getUsersExceptOrganizer(id);

      setUsers(usersResult);
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col gap-2 mt-2">
      {searchTerm === ""
        ? null
        : users
            .filter((user) =>
              user.fullName.toLowerCase().includes(searchTerm.toLowerCase()),
            )
            .map((filteredUser) => (
              <AssignCard
                name={filteredUser.fullName}
                email={filteredUser.email}
                img={filteredUser.avatar}
                key={filteredUser.id}
                onSelect={() => onSelect(filteredUser.email)}
              />
            ))}
    </div>
  );
};

export default CollaboratorsList;
