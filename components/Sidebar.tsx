import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div>
        <button className="mx-auto flex items-center justify-center mb-8">
          <Image src="/icons/menu_24px.png" alt="Menu" width={24} height={24} />
        </button>

        <button className="mx-auto flex items-center justify-center mb-14 p-4 bg-[var(--complimentary-7)] rounded-[8px] hover:shadow-[inset_0px_8px_36px_0px_rgba(0,0,0,0.25)] active:shadow-[inset_0px_8px_36px_0px_rgba(0,0,0,0.25)]">
          <Image src="/icons/plus.png" alt="plus" width={24} height={24} />
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
