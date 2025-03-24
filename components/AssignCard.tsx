"use client";

import Image from "next/image";
import { IKImage } from "imagekitio-next";
import config from "@/lib/config";

type Props = {
  name: string;
  email: string;
  img: string;
  id?: string;
  className?: string;
  organizer?: boolean;
  onSelect: () => void;
};

const AssignCard = ({
  name,
  email,
  img,
  className,
  organizer,
  onSelect,
}: Props) => {
  return (
    <div
      className={`flex items-center justify-between mb-5 cursor-pointer ${className && className}`}
      onClick={onSelect}
    >
      <div className="flex items-center gap-2">
        <IKImage
          path={img}
          urlEndpoint={config.env.imageKit.urlEndPoint}
          alt={name}
          width={32}
          height={32}
        />
        <div>
          <h3 className="text-sm text-black font-medium">{name}</h3>
          {organizer && (
            <h5 className="text-xs text-[var(--primitives-gray-500)]">
              Organizer
            </h5>
          )}
        </div>
      </div>
      {!organizer && (
        <button className="w-10 h-10 rounded-[8px] border-2 border-[var(--primitives-gray-100)] flex items-center justify-center cursor-pointer">
          <Image
            src="/icons/close-gray.png"
            alt="Close"
            width={20}
            height={20}
          />
        </button>
      )}
    </div>
  );
};
export default AssignCard;
