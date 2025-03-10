import React from "react";

import { Input } from "@/components/ui/input";

const TimeInput = () => {
  return (
    <div>
      <Input
        type="time"
        className="h-9 bg-[var(--primitives-gray-50)] outline-none focus-visible:ring-0 hover:border-0 !text-xl font-medium"
      />
    </div>
  );
};
export default TimeInput;
