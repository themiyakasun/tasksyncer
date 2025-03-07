import { Button } from "@/components/ui/button";
import Image from "next/image";

type Props = {
  type: "high" | "low" | "medium";
};

const PriorityButton = ({ type }: Props) => {
  return (
    <Button
      className={`${type === "high" ? " border-[var(--highlighter-6)] bg-[var(--highlighter-6)]/20" : type === "medium" ? "border-[var(--highlighter-2)] bg-[var(--highlighter-2)]/20" : "border-[var(--primitives-gray-600)] bg-[var(--primitives-gray-600)]/20"} border-2 flex items-center justify-center font-medium w-full text-black capitalize hover:bg-transparent`}
    >
      <Image
        src={
          type === "high"
            ? "/icons/high-priority.png"
            : type === "medium"
              ? "/icons/medium-priority.png"
              : "/icons/low-priority.png"
        }
        alt={type}
        width={20}
        height={20}
      />

      {type}
    </Button>
  );
};
export default PriorityButton;
