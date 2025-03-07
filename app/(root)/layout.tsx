import React, { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import AddTask from "@/components/AddTask";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="root-container">
      <Sidebar />
      Layout
      <AddTask show={true} />
    </div>
  );
};
export default Layout;
