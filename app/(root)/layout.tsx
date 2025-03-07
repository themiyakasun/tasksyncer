"use client";
import React, { ReactNode } from "react";

import Sidebar from "@/components/Sidebar";
import AddTask from "@/components/AddTask";
import { useModalsStore } from "@/stores/modals";

const Layout = ({ children }: { children: ReactNode }) => {
  const { addTaskModalVisible } = useModalsStore((state) => state);

  return (
    <div className="root-container">
      <Sidebar />
      Layout
      <AddTask show={addTaskModalVisible} />
    </div>
  );
};
export default Layout;
