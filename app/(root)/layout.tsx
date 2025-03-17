import React, { ReactNode } from "react";
import { redirect } from "next/navigation";

import Sidebar from "@/components/Sidebar";
import AddTask from "@/components/AddTask";
import MeetingSchedule from "@/components/MeetingSchedule";
import { auth } from "@/auth";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import BoardModal from "@/components/BoardModal";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (!session) redirect("/sign-in");

  return (
    <div className="root-container">
      <Sidebar />
      <Navbar session={session} />
      Layout
      <AddTask />
      <MeetingSchedule />
      <Pricing />
      <BoardModal />
    </div>
  );
};
export default Layout;
