import React, { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="root-container">
      <Sidebar />
      Layout
    </div>
  );
};
export default Layout;
