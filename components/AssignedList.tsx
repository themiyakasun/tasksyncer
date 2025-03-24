"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getUserByEmail } from "@/lib/actions/auth";
import { IKImage } from "imagekitio-next";
import config from "@/lib/config";

const AssignedList = ({ email }: { email: string }) => {
  const [assignedList, setAssignedList] = useState<User[]>([]);

  useEffect(() => {
    const fetchAssignedList = async () => {
      const result = await getUserByEmail(email);

      if (result) {
        setAssignedList(result);
      }
    };
    fetchAssignedList();
  }, [email]);

  return (
    <div className="flex">
      {assignedList.map((user) => (
        <IKImage
          path={user.avatar}
          urlEndpoint={config.env.imageKit.urlEndPoint}
          alt="user-1"
          className="rounded-full"
          width={24}
          height={24}
          key={user.id}
        />
      ))}
    </div>
  );
};
export default AssignedList;
