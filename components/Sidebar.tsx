"use client";
import React, { useRef, useState, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import useClickOutside from "@/hooks/useClickOutside";
import { useModalsStore } from "@/stores/modals";

const Sidebar = () => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const { showAddTaskModal, showMeetingScheduleModal } = useModalsStore(
    (state) => state,
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const handleOpenTaskModal = () => {
    showAddTaskModal();
  };

  useClickOutside(ref, () => setIsOpen(false));

  console.log(showAddTaskModal);

  return (
    <div className="sidebar-container">
      <div>
        <button className="mx-auto flex items-center justify-center mb-8">
          <Image src="/icons/menu_24px.png" alt="Menu" width={24} height={24} />
        </button>

        <button
          className="mx-auto flex items-center justify-center mb-14 p-4 bg-[var(--complimentary-7)] rounded-[8px] hover:shadow-[inset_0px_8px_36px_0px_rgba(0,0,0,0.25)] active:shadow-[inset_0px_8px_36px_0px_rgba(0,0,0,0.25)] relative"
          onClick={(e) => setIsOpen(!isOpen)}
          ref={ref}
        >
          <Image src="/icons/plus.png" alt="plus" width={24} height={24} />

          <div
            className={`w-[360px] p-3 bg-white absolute z-10 left-20 top-0 rounded-2xl shadow-lg ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} transition-all duration-200 ease-out`}
          >
            <h1 className="text-lg font-medium mb-[18px]">
              What you want to sync up ?
            </h1>
            <ul>
              <li>
                <div
                  className="sync-up-item cursor-pointer item"
                  onClick={handleOpenTaskModal}
                >
                  <svg
                    className="fill-black item-hover:fill-white "
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="project outlined">
                      <path
                        id="Vector"
                        d="M8.47009 11.9997V10.5711C8.47009 10.3817 8.54212 10.2 8.67035 10.0661C8.79858 9.93214 8.9725 9.85688 9.15385 9.85688C9.33519 9.85688 9.50911 9.93214 9.63734 10.0661C9.76557 10.2 9.83761 10.3817 9.83761 10.5711V11.9997C9.83761 12.1891 9.76557 12.3708 9.63734 12.5047C9.50911 12.6387 9.33519 12.7139 9.15385 12.7139C8.9725 12.7139 8.79858 12.6387 8.67035 12.5047C8.54212 12.3708 8.47009 12.1891 8.47009 11.9997ZM11.8889 12.7139C12.0702 12.7139 12.2442 12.6387 12.3724 12.5047C12.5006 12.3708 12.5726 12.1891 12.5726 11.9997V9.85688C12.5726 9.66745 12.5006 9.48577 12.3724 9.35182C12.2442 9.21787 12.0702 9.14262 11.8889 9.14262C11.7075 9.14262 11.5336 9.21787 11.4054 9.35182C11.2772 9.48577 11.2051 9.66745 11.2051 9.85688V11.9997C11.2051 12.1891 11.2772 12.3708 11.4054 12.5047C11.5336 12.6387 11.7075 12.7139 11.8889 12.7139ZM14.6239 12.7139C14.8053 12.7139 14.9792 12.6387 15.1074 12.5047C15.2357 12.3708 15.3077 12.1891 15.3077 11.9997V9.14262C15.3077 8.95319 15.2357 8.77151 15.1074 8.63756C14.9792 8.50361 14.8053 8.42836 14.6239 8.42836C14.4426 8.42836 14.2687 8.50361 14.1404 8.63756C14.0122 8.77151 13.9402 8.95319 13.9402 9.14262V11.9997C13.9402 12.1891 14.0122 12.3708 14.1404 12.5047C14.2687 12.6387 14.4426 12.7139 14.6239 12.7139ZM19.4103 6.28557V14.8567H20.094C20.2754 14.8567 20.4493 14.932 20.5775 15.0659C20.7057 15.1999 20.7778 15.3815 20.7778 15.571C20.7778 15.7604 20.7057 15.9421 20.5775 16.076C20.4493 16.21 20.2754 16.2852 20.094 16.2852H12.5726V17.837C13.0289 18.0055 13.4134 18.337 13.6582 18.773C13.903 19.209 13.9925 19.7214 13.9106 20.2196C13.8288 20.7178 13.581 21.1697 13.2111 21.4955C12.8411 21.8213 12.3728 22 11.8889 22C11.405 22 10.9367 21.8213 10.5667 21.4955C10.1968 21.1697 9.94898 20.7178 9.86715 20.2196C9.78532 19.7214 9.87473 19.209 10.1196 18.773C10.3644 18.337 10.7489 18.0055 11.2051 17.837V16.2852H3.68376C3.50242 16.2852 3.3285 16.21 3.20027 16.076C3.07204 15.9421 3 15.7604 3 15.571C3 15.3815 3.07204 15.1999 3.20027 15.0659C3.3285 14.932 3.50242 14.8567 3.68376 14.8567H4.36752V6.28557C4.00483 6.28557 3.657 6.13507 3.40054 5.86717C3.14408 5.59927 3 5.23592 3 4.85705V3.42852C3 3.04966 3.14408 2.68631 3.40054 2.4184C3.657 2.1505 4.00483 2 4.36752 2H19.4103C19.7729 2 20.1208 2.1505 20.3772 2.4184C20.6337 2.68631 20.7778 3.04966 20.7778 3.42852V4.85705C20.7778 5.23592 20.6337 5.59927 20.3772 5.86717C20.1208 6.13507 19.7729 6.28557 19.4103 6.28557ZM12.5726 19.8566C12.5726 19.7153 12.5325 19.5772 12.4574 19.4597C12.3823 19.3423 12.2755 19.2507 12.1506 19.1967C12.0256 19.1426 11.8881 19.1285 11.7555 19.156C11.6229 19.1836 11.501 19.2516 11.4054 19.3515C11.3098 19.4514 11.2446 19.5787 11.2183 19.7172C11.1919 19.8558 11.2054 19.9994 11.2572 20.1299C11.3089 20.2604 11.3966 20.372 11.509 20.4504C11.6215 20.5289 11.7537 20.5708 11.8889 20.5708C12.0702 20.5708 12.2442 20.4956 12.3724 20.3616C12.5006 20.2277 12.5726 20.046 12.5726 19.8566ZM4.36752 4.85705H19.4103V3.42852H4.36752V4.85705ZM18.0427 6.28557H5.73504V14.8567H18.0427V6.28557Z"
                        fill="current"
                      />
                    </g>
                  </svg>
                  Tasks
                </div>
                <div
                  className="sync-up-item cursor-pointer"
                  onClick={showMeetingScheduleModal}
                >
                  <Image
                    src="/icons/video-camera.svg"
                    alt="meeting schedule"
                    width={17}
                    height={17}
                    className="object-cover"
                  />
                  Meeting Schedule
                </div>
                <div className="sync-up-item cursor-pointer">
                  <Image
                    src="/icons/poll_outlined.svg"
                    alt="Meeting Poll"
                    width={24}
                    height={24}
                    className="object-cover"
                  />
                  Meeting Poll
                </div>
                <div className="sync-up-item cursor-pointer">
                  <Image
                    src="/icons/event_outlined.svg"
                    alt="Event"
                    width={24}
                    height={24}
                    className="object-cover"
                  />
                  Event
                </div>
              </li>
            </ul>
          </div>
        </button>
        <ul>
          <li>
            <Link href="/" className="sidebar-item">
              <Image
                src="/icons/task_outlined.svg"
                alt="tasks"
                width={24}
                height={24}
                className="object-cover"
              />
              Tasks
            </Link>
          </li>
          <li>
            <Link href="/" className="sidebar-item">
              <Image
                src="/icons/schedule_outline.svg"
                alt="schedule"
                width={20}
                height={20}
                className="object-cover"
              />
              Schedule
            </Link>
          </li>
          <li>
            <Link href="/" className="sidebar-item">
              <Image
                src="/icons/analytics_outlined.svg"
                alt="Analytics"
                width={24}
                height={24}
                className="object-cover"
              />
              Analytics
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <Link href="/" className="mb-10 flex flex-col items-center">
              <Image
                src="/icons/Integration_outlined.svg"
                alt="integration"
                width={24}
                height={24}
              />
            </Link>
          </li>
          <li>
            <Link href="/" className="mb-10 flex flex-col items-center">
              <Image
                src="/icons/settings.svg"
                alt="settings"
                width={24}
                height={24}
              />
            </Link>
          </li>
          <li>
            <Link href="/" className="mb-10 flex flex-col items-center">
              <Image src="/icons/help.svg" alt="help" width={24} height={24} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
