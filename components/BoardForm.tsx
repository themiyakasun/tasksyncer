"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { z, ZodType } from "zod";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { bookSchema } from "@/lib/validations";

interface Props extends Partial<Board> {
  type?: "CREATE" | "UPDATE";
}

const BoardForm = ({ type, ...board }: Props) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof bookSchema>>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof bookSchema>) => {};

  return (
    <div className="flex flex-col gap-4 w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            key="title"
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-[var(--primitives-gray-600)] capitalize">
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    className="!border-[var(--primitives-gray-600)] focus:border-[var(--primitives-gray-600)] focus-visible:ring-0"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full cursor-pointer">
            Create Board
          </Button>
        </form>
      </Form>

      <p className="text-center text-base font-medium mt-5"></p>
    </div>
  );
};
export default BoardForm;
