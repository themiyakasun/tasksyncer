"use client";

import { useState, MouseEvent } from "react";
import Image from "next/image";

import { useModalsStore } from "@/stores/modals";
import FormField from "@/components/FormField";
import { Button } from "@/components/ui/button";
import TimeInput from "@/components/TimeInput";
import AssignCard from "@/components/AssignCard";

const MeetingSchedule = () => {
  const { hideMeetingScheduleModal, meetingScheduleModalVisible } =
    useModalsStore((state) => state);
  const [window, setWindow] = useState<Number>(1);

  const handleNextSlide = (e: MouseEvent<HTMLButtonElement>) => {
    setWindow(2);
  };

  const handlePrevSlide = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setWindow(1);
  };

  return (
    <div
      className={`modal-wrapper ${meetingScheduleModalVisible ? "opacity-100" : "opacity-0 pointer-events-none"} `}
      data-dialog-backdrop="modal"
      data-dialog-backdrop-close="true"
    >
      <div className="modal w-[600px] p-6" data-dialog-backdrop="modal">
        {window === 1 && (
          <>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-medium text-black">
                Meeting Schedule
              </h1>

              <button
                onClick={hideMeetingScheduleModal}
                className="cursor-pointer"
              >
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
                  title="Title *"
                  placeholder="Enter Heading"
                />
                <FormField
                  type="textarea"
                  title="Description"
                  placeholder="Enter Description"
                />

                <div className="flex items-center justify-center gap-2">
                  <div className="w-20 border border-[var(--primitives-gray-600)]"></div>
                  <h3 className="font-medium text-[var(--primitives-gray-600)]">
                    or
                  </h3>
                  <div className="w-20 border border-[var(--primitives-gray-600)]"></div>
                </div>

                <h2 className="text-lg font-medium text-black">
                  Quick Schedule
                </h2>
                <FormField
                  type="textarea"
                  title="Enter a short note"
                  placeholder="eg, Tue 2pm to 3pm client meeting alarm 10 /online"
                />

                <Button onClick={handleNextSlide}>Next</Button>
                <Button variant="ghost">Cancel</Button>
              </div>
            </form>
          </>
        )}
        {window === 2 && (
          <>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 bg-[var(--highlighter-5)]/20 py-1 px-2 rounded-sm">
                <Image
                  src="/icons/video-camera-pink.png"
                  alt="video-camera"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <p className="text-xs font-medium text-[var(--highlighter-5)]">
                  Online Meeting
                </p>
              </div>

              <button
                onClick={hideMeetingScheduleModal}
                className="cursor-pointer"
              >
                <Image
                  src="/icons/close-black.png"
                  alt="close"
                  width={24}
                  height={24}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <div className="border border-[var(--primitives-gray-200)] rounded-[8px]">
                  <div className="bg-[var(--highlighter-1)] text-white rounded-t-[8px] h-[17px] text-xs font-medium py-[2px] px-3.5">
                    Tue
                  </div>
                  <div className="text-black h-[51px] rounded-b-[8px] text-lg font-medium flex items-center justify-center">
                    17
                  </div>
                </div>
                <h3 className="text-lg font-medium max-w-[300px]">
                  Client Meeting for project proposal
                </h3>
              </div>

              <button
                className="w-10 h-10 rounded-[8px] border-2 border-[var(--primitives-gray-100)] flex items-center justify-center cursor-pointer"
                onClick={handlePrevSlide}
              >
                <Image
                  src="/icons/edit-gray.png"
                  alt="Close"
                  width={20}
                  height={20}
                />
              </button>
            </div>

            <h4 className="text-[var(--primitives-gray-600)] font-medium mb-4 mt-6">
              Details
            </h4>
            <div className="flex items-center gap-5">
              <TimeInput />
              <Image
                src="/icons/drop-down-black.png"
                alt="DropDown"
                width={24}
                height={24}
                className="-rotate-90"
              />
              <TimeInput />
            </div>

            <div className="border-t-2 border-[#E2E2E2] w-full my-5"></div>
            <div className="flex items-start gap-4">
              <Image
                src="/icons/participant-black.png"
                alt="Participants"
                width={24}
                height={24}
                className="mt-8"
              />
              <div className="w-full">
                <FormField
                  type="text"
                  title="Add Participant *"
                  placeholder="Enter name, email"
                />
                <div>
                  <AssignCard
                    name="April Curtis"
                    img="/icons/user-1.png"
                    className="mt-5"
                    organizer={true}
                  />
                  <AssignCard name="Peter Thornton" img="/icons/user-2.png" />
                </div>
              </div>
            </div>

            <div className="border-t-2 border-[#E2E2E2] w-full my-5"></div>

            <div className="flex items-start gap-4">
              <Image
                src="/icons/link-black.png"
                alt="Participants"
                width={24}
                height={24}
                className="mt-8"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default MeetingSchedule;
