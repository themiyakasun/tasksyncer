"use client";
import React from "react";

import { useModalsStore } from "@/stores/modals";
import Image from "next/image";
import BoardForm from "@/components/BoardForm";

const BoardModal = () => {
  const { hideBoardModal, boardModalVisible } = useModalsStore(
    (state) => state,
  );
  return (
    <div
      className={`modal-wrapper ${boardModalVisible ? "opacity-100" : "opacity-0 pointer-events-none"} `}
      data-dialog-backdrop="modal"
      data-dialog-backdrop-close="true"
    >
      <div className="modal max-w-[600px] p-6" data-dialog-backdrop="modal">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-medium text-black">Add Task</h1>

          <button onClick={hideBoardModal} className="cursor-pointer">
            <Image
              src="/icons/close-black.png"
              alt="close"
              width={24}
              height={24}
            />
          </button>
        </div>

        <BoardForm />
      </div>
    </div>
  );
};
export default BoardModal;
