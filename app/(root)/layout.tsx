"use client";

import React, { ReactNode } from "react";
import { redirect } from "next/navigation";

import Sidebar from "@/components/Sidebar";
import AddTask from "@/components/AddTask";
import { useModalsStore } from "@/stores/modals";
import MeetingSchedule from "@/components/MeetingSchedule";
import { auth } from "@/auth";

const Layout = async ({ children }: { children: ReactNode }) => {
  const { addTaskModalVisible, meetingScheduleModalVisible } = useModalsStore(
    (state) => state,
  );
  const session = await auth();

  if (!session) redirect("/sign-in");

  return (
    <div className="root-container">
      <Sidebar />
      Layout
      <AddTask show={addTaskModalVisible} />
      <MeetingSchedule show={meetingScheduleModalVisible} />
    </div>
  );
};
export default Layout;
