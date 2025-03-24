import React from "react";

const DetailsBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border border-[var(--primitives-gray-200)] min-h-screen px-5 py-7">
      {children}
    </div>
  );
};
export default DetailsBar;
