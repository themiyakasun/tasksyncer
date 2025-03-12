import React, { ReactNode } from "react";

import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  if (session) redirect("/");

  return (
    <main className="auth-container">
      <div className="auth-form">
        <div className="auth-box">
          <div>{children}</div>
        </div>
      </div>
    </main>
  );
};
export default Layout;
