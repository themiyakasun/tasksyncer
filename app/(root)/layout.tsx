"use client";
import React, { ReactNode } from "react";

import Sidebar from "@/components/Sidebar";
import AddTask from "@/components/AddTask";
import { useModalsStore } from "@/stores/modals";
import MeetingSchedule from "@/components/MeetingSchedule";

const Layout = ({ children }: { children: ReactNode }) => {
  const { addTaskModalVisible, meetingScheduleModalVisible } = useModalsStore(
    (state) => state,
  );

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
