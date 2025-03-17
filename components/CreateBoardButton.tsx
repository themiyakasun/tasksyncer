"use client";
import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useModalsStore } from "@/stores/modals";

const CreateBoardButton = () => {
  const { showBoardModal } = useModalsStore((state) => state);
  return (
    <Button
      className={cn(
        "bg-[var(--complimentary-1)] hover:bg-[var(--complimentary-1)]/80",
      )}
      onClick={showBoardModal}
    >
      Create
      <Image src="/icons/board-white.png" alt="board" width={24} height={24} />
    </Button>
  );
};
export default CreateBoardButton;
