"use client";
import { useState } from "react";
import Image from "next/image";

import FormField from "@/components/FormField";
import AssignCard from "@/components/AssignCard";
import PriorityButton from "@/components/PriorityButton";
import DatePicker from "@/components/DatePicker";
import ColorButton from "@/components/ColorButton";
import { Button } from "@/components/ui/button";
import { useModalsStore } from "@/stores/modals";
import AddTaskForm from "@/components/forms/AddTaskForm";

const AddTaskModal = () => {
  const { hideAddTaskModal, addTaskModalVisible } = useModalsStore(
    (state) => state,
  );
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());
  const [selectedColor, setSelectedColor] = useState<String>("#D1E3F5");

  return (
    <div
      className={`modal-wrapper ${addTaskModalVisible ? "opacity-100" : "opacity-0 pointer-events-none"} `}
      data-dialog-backdrop="modal"
      data-dialog-backdrop-close="true"
    >
      <div className="modal max-w-[600px] p-6" data-dialog-backdrop="modal">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-medium text-black">Add Task</h1>

          <button onClick={hideAddTaskModal} className="cursor-pointer">
            <Image
              src="/icons/close-black.png"
              alt="close"
              width={24}
              height={24}
            />
          </button>
        </div>
        <AddTaskForm />
      </div>
    </div>
  );
};
export default AddTaskModal;
