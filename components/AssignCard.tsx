import Image from "next/image";

type Props = {
  name: string;
  img: string;
};

const AssignCard = ({ name, img }: Props) => {
  return (
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-2">
        <Image src={img} alt={name} width={32} height={32} />
        <h3 className="text-sm text-black font-medium">{name}</h3>
      </div>
      <button className="w-10 h-10 rounded-[8px] border-2 border-[var(--primitives-gray-100)] flex items-center justify-center cursor-pointer">
        <Image src="/icons/close-gray.png" alt="Close" width={20} height={20} />
      </button>
    </div>
  );
};
export default AssignCard;
