import { ChangeEvent } from "react";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  title?: string;
  placeholder?: string;
  type: string;
  value?: string | number;
  handleChange?: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

const FormField = ({
  title,
  placeholder,
  type,
  value,
  handleChange,
}: Props) => {
  return (
    <div className="w-full">
      {title && (
        <Label className="text-xs text-[var(--primitives-gray-600)] capitalize">
          {title}
        </Label>
      )}
      {type === "textarea" ? (
        <Textarea
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className="!border-[var(--primitives-gray-600)] focus:border-[var(--primitives-gray-600)] focus-visible:ring-0"
        />
      ) : (
        <Input
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          className="!border-[var(--primitives-gray-600)] focus:border-[var(--primitives-gray-600)] focus-visible:ring-0"
        />
      )}
    </div>
  );
};
export default FormField;
