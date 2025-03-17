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

const AddTask = () => {
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

        <form>
          <div className="flex flex-col gap-6">
            <h2 className="text-lg font-medium text-black">Details</h2>
            <FormField
              type="text"
              title="Task Name *"
              placeholder="Enter Heading"
            />
            <FormField
              type="textarea"
              title="Description"
              placeholder="Enter Description"
            />
            <FormField
              type="text"
              title="Assign *"
              placeholder="Enter name/email"
            />
            <div>
              <AssignCard name="April Curtis" img="/icons/user-1.png" />
              <AssignCard name="Peter Thornton" img="/icons/user-2.png" />
            </div>

            <h2 className="text-lg font-medium text-black">Priority</h2>
            <div className="flex items-center justify-between gap-10 flex-wrap">
              <div className="flex-1">
                <PriorityButton type="high" />
              </div>
              <div className="flex-1">
                <PriorityButton type="medium" />
              </div>
              <div className="flex-1">
                <PriorityButton type="low" />
              </div>
            </div>

            <h2 className="text-lg font-medium text-black">Timeline</h2>
            <div className="flex items-center justify-between gap-5">
              <DatePicker date={startDate} setDate={setStartDate} />
              <p className="text-xs font-medium text-[var(--primitives-gray-600)]">
                To
              </p>
              <DatePicker date={endDate} setDate={setEndDate} />
            </div>

            <h2 className="text-lg font-medium text-black">Timeline Color</h2>
            <div className="flex items-end justify-between">
              <div className="flex-1">
                <ColorButton
                  color="#D1E3F5"
                  setSelectedColor={setSelectedColor}
                  selectedColor={selectedColor.toString()}
                />
              </div>
              <div className="flex-1">
                <ColorButton
                  color="#D3F5D3"
                  setSelectedColor={setSelectedColor}
                  selectedColor={selectedColor.toString()}
                />
              </div>
              <div className="flex-1">
                <ColorButton
                  color="#F6DDDD"
                  setSelectedColor={setSelectedColor}
                  selectedColor={selectedColor.toString()}
                />
              </div>
              <div className="flex-1">
                <ColorButton
                  color="#F6DDDD"
                  setSelectedColor={setSelectedColor}
                  selectedColor={selectedColor.toString()}
                />
              </div>
              <div className="flex-1">
                <ColorButton
                  color="#DFDAF8"
                  setSelectedColor={setSelectedColor}
                  selectedColor={selectedColor.toString()}
                />
              </div>

              <div className="border-l-2 border-[var(--primitives-gray-600)] h-10"></div>

              <div className="ml-3">
                <h4 className="text-xs text-[var(--primitives-gray-600)]">
                  Preview
                </h4>

                <div
                  className="flex h-10 py-2 px-[6px] rounded-sm w-40 text-sm"
                  style={{
                    backgroundColor: selectedColor && selectedColor.toString(),
                  }}
                >
                  Heading Will be here
                </div>
              </div>
            </div>
            <Button>Add</Button>
            <Button variant="ghost">Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddTask;
