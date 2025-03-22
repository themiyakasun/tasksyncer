"use client";

import React, { useEffect, useState } from "react";
import { getSession } from "next-auth/react";

import { getUsersExceptOrganizer } from "@/lib/actions/auth";
import AssignCard from "@/components/AssignCard";

const CollaboratorsList = ({
  searchTerm,
  collaborators,
  onSelect,
}: {
  searchTerm: string;
  collaborators?: string[];
  onSelect: (email: string) => void;
}) => {
  const [user, setUser] = useState<User[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      const session = await getSession();
      const users = await getUsersExceptOrganizer(session?.user?.id as string);
      setUser(users);
    };
    fetchUser();
  }, []);

  return (
    <div className="flex flex-col gap-2 mt-2">
      {searchTerm === "" ? (
        <></>
      ) : (
        user
          .filter((user) =>
            user.fullName.toLowerCase().includes(searchTerm.toLowerCase()),
          )
          .map((filteredUser) => (
            <AssignCard
              name={filteredUser.fullName}
              email={filteredUser.email}
              img={filteredUser.avatar}
              key={filteredUser.id}
              onSelect={onSelect}
            />
          ))
      )}
    </div>
  );
};

export default CollaboratorsList;
