import Image from "next/image";
import React, { MouseEventHandler } from "react";

type Props = {
  color: string;
  selectedColor: string;
  handleColorSelect: (
    e: React.MouseEvent<HTMLButtonElement>,
    color: string,
  ) => void;
};

const ColorButton = ({ color, selectedColor, handleColorSelect }: Props) => {
  return (
    <button
      className="w-10 h-10 rounded-sm flex items-center justify-center cursor-pointer"
      style={{ backgroundColor: color }}
      onClick={(e) => handleColorSelect(e, color)}
    >
      {selectedColor === color && (
        <Image src="/icons/Done-black.png" alt="done" width={24} height={24} />
      )}
    </button>
  );
};
export default ColorButton;
