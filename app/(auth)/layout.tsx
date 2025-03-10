import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
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
