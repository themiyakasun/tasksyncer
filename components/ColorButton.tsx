import Image from "next/image";
import React from "react";

type Props = {
  color: string;
  selectedColor?: string;
  setSelectedColor?: (color: String) => void;
};

const ColorButton = ({ color, selectedColor, setSelectedColor }: Props) => {
  const handleColorSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (setSelectedColor) setSelectedColor(color);
  };

  return (
    <button
      className="w-10 h-10 rounded-sm flex items-center justify-center cursor-pointer"
      style={{ backgroundColor: color }}
      onClick={handleColorSelect}
    >
      {selectedColor === color && (
        <Image src="/icons/Done-black.png" alt="done" width={24} height={24} />
      )}
    </button>
  );
};
export default ColorButton;
