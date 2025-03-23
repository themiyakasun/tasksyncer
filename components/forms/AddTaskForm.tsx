"use client";

import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { taskSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import Tag from "@/components/Tag";
import CollaboratorsList from "@/components/CollaboratorsList";
import { getUserBoards } from "@/lib/actions/board";
import { useModalsStore } from "@/stores/modals";
import { Textarea } from "@/components/ui/textarea";
import PriorityButton from "@/components/PriorityButton";
import DatePicker from "@/components/DatePicker";
import ColorButton from "@/components/ColorButton";
import { timelineColors } from "@/constants";
import { addTask } from "@/lib/actions/task";
import BoardCollaboratorsFilter from "@/components/BoardCollaboratorsFilter";

interface Props extends Partial<Task> {
  type?: "CREATE" | "UPDATE";
}

const AddTaskForm = ({ type, ...task }: Props) => {
  const { hideAddTaskModal } = useModalsStore((state) => state);

  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());
  const [selectedColor, setSelectedColor] = useState<String>("#D1E3F5");
  const [boards, setBoards] = useState<Board[]>([]);
  const [boardId, setBoardId] = useState("");

  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      name: "",
      board: "",
      description: "",
      priority: "",
      startAt: new Date(),
      endAt: new Date(),
      collaborators: [],
      timeLineColor: "",
    },
  });

  const collaborators = form.watch("collaborators");

  useEffect(() => {
    const fetchBoards = async () => {
      const data = await getUserBoards();

      if (data) {
        setBoards(data);
      }
    };

    fetchBoards();
  }, []);

  const addCollaborators = (email: string) => {
    if (!collaborators.some((collaborator: string) => collaborator === email)) {
      form.setValue("collaborators", [...collaborators, email]);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const removeCollaborator = (email: string) => {
    const newList = collaborators.filter(
      (collaborator) => collaborator !== email,
    );
    form.setValue("collaborators", newList);
  };

  const handleColorSelect = (
    e: React.MouseEvent<HTMLButtonElement>,
    color: string,
  ) => {
    e.preventDefault();

    if (setSelectedColor) {
      setSelectedColor(color);
      form.setValue("timeLineColor", color);
    }
  };

  const handleBoardSelect = (value: string) => {
    setBoardId(value);
  };

  const onSubmit = async (values: z.infer<typeof taskSchema>) => {
    const result = await addTask(values);

    if (result?.success) {
      toast.success("Board added successfully.");
      hideAddTaskModal();
    } else {
      toast.error("Error creating board.");
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            key="name"
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-[var(--primitives-gray-600)] capitalize">
                  Name
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
            key="description"
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-[var(--primitives-gray-600)] capitalize">
                  Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className="!border-[var(--primitives-gray-600)] focus:border-[var(--primitives-gray-600)] focus-visible:ring-0"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            key="board"
            control={form.control}
            name="board"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-[var(--primitives-gray-600)] capitalize">
                  Board
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      handleBoardSelect(value);
                    }}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full !border-[var(--primitives-gray-600)] focus:border-[var(--primitives-gray-600)] focus-visible:ring-0">
                      <SelectValue placeholder="Select a board" />
                    </SelectTrigger>
                    <SelectContent>
                      {boards.map((board, index) => (
                        <SelectItem value={board.id!} key={index}>
                          {board.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            key="priority"
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-[var(--primitives-gray-600)] capitalize">
                  Name
                </FormLabel>
                <FormControl>
                  <div className="flex items-center justify-between gap-10 flex-wrap">
                    <div className="flex-1">
                      <PriorityButton
                        type="high"
                        onClick={() => form.setValue("priority", "high")}
                      />
                    </div>
                    <div className="flex-1">
                      <PriorityButton
                        type="medium"
                        onClick={() => form.setValue("priority", "medium")}
                      />
                    </div>
                    <div className="flex-1">
                      <PriorityButton
                        type="low"
                        onClick={() => form.setValue("priority", "low")}
                      />
                    </div>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between gap-5">
            <FormField
              key="startDate"
              control={form.control}
              name="startAt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs text-[var(--primitives-gray-600)] capitalize">
                    Start At
                  </FormLabel>
                  <FormControl>
                    <DatePicker
                      date={startDate}
                      setDate={setStartDate}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <p className="text-xs font-medium text-[var(--primitives-gray-600)]">
              To
            </p>
            <FormField
              key="endDate"
              control={form.control}
              name="endAt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs text-[var(--primitives-gray-600)] capitalize">
                    End At
                  </FormLabel>
                  <FormControl>
                    <DatePicker
                      date={endDate}
                      setDate={setEndDate}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            key="timeLineColor"
            control={form.control}
            name="timeLineColor"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-[var(--primitives-gray-600)] capitalize">
                  Timeline Color
                </FormLabel>
                <FormControl>
                  <div className="flex items-end justify-between">
                    {timelineColors.map((timelineColor, index) => (
                      <div className="flex-1" key={index}>
                        <ColorButton
                          color={timelineColor.color.toString()}
                          handleColorSelect={handleColorSelect}
                          selectedColor={selectedColor.toString()}
                        />
                      </div>
                    ))}

                    <div className="border-l-2 border-[var(--primitives-gray-600)] h-10"></div>

                    <div className="ml-3">
                      <h4 className="text-xs text-[var(--primitives-gray-600)]">
                        Preview
                      </h4>

                      <div
                        className="flex h-10 py-2 px-[6px] rounded-sm w-40 text-sm"
                        style={{
                          backgroundColor:
                            selectedColor && selectedColor.toString(),
                        }}
                      >
                        Heading Will be here
                      </div>
                    </div>
                  </div>
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
                  Assign
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

                      {collaborators.length > 0 && (
                        <div className="mx-3 inline-flex flex-col gap-2 mb-2">
                          {collaborators.map((collaborator, index) => (
                            <Tag
                              collaborator={collaborator}
                              key={index}
                              handleRemoveCollaborator={removeCollaborator}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    <BoardCollaboratorsFilter
                      boardId={boardId}
                      searchTerm={searchTerm}
                      onSelect={addCollaborators}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full cursor-pointer">
            Add
          </Button>
          <Button variant="ghost" className="w-full" onClick={hideAddTaskModal}>
            Cancel
          </Button>
        </form>
      </Form>

      <p className="text-center text-base font-medium mt-5"></p>
    </div>
  );
};
export default AddTaskForm;
