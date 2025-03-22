"use client";

import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import React, { useState } from "react";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import Tag from "@/components/Tag";
import AssignCard from "@/components/AssignCard";
import CollaboratorsList from "@/components/CollaboratorsList";

interface Props extends Partial<Board> {
  type?: "CREATE" | "UPDATE";
}

const BoardForm = ({ type, ...board }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const form = useForm<z.infer<typeof bookSchema>>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: "",
      collaborators: [],
    },
  });

  const collaborators = form.watch("collaborators");

  const addCollaborators = (email: string) => {
    if (!collaborators.some((collaborator: string) => collaborator === email)) {
      form.setValue("collaborators", [...collaborators, email]);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

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

          <FormField
            key="collaborators"
            name="collaborators"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-[var(--primitives-gray-600)] capitalize">
                  Collaborators
                </FormLabel>
                <FormControl>
                  <div>
                    <div className="border-1 border-[var(--primitives-gray-600)] focus:border-[var(--primitives-gray-600)] focus-visible:ring-0 rounded-[8px]">
                      <Input
                        type="collaborators"
                        {...field}
                        onChange={handleSearch}
                        value={searchTerm}
                        className={cn(
                          "border-none focus:border-none focus-visible:ring-0",
                        )}
                      />

                      <div className="mx-3 inline-flex flex-col gap-2 mb-2">
                        {collaborators.map((collaborator, index) => (
                          <Tag collaborator={collaborator} key={index} />
                        ))}
                      </div>
                    </div>
                    <CollaboratorsList
                      searchTerm={searchTerm}
                      collaborators={collaborators}
                      onSelect={addCollaborators}
                    />
                  </div>
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
