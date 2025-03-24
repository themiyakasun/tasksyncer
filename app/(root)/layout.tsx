import React, { ReactNode } from "react";
import { redirect } from "next/navigation";

import Sidebar from "@/components/Sidebar";
import AddTaskModal from "@/components/modals/AddTaskModal";
import MeetingSchedule from "@/components/modals/MeetingSchedule";
import { auth } from "@/auth";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import BoardModal from "@/components/modals/BoardModal";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (!session) redirect("/sign-in");

  return (
    <div className="root-container">
      <Sidebar />
      <Navbar session={session} />
      <div className="content-container col-span-1 row-span-2">{children}</div>

      <AddTaskModal />
      <MeetingSchedule />
      <Pricing />
      <BoardModal />
    </div>
  );
};
export default Layout;
