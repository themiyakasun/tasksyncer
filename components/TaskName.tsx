type Props = {
  taskName: string;
};

const TaskName = ({ taskName }: Props) => {
  return (
    <div className="bg-[var(--complimentary-1)] p-1.5 text-black text-sm rounded-[8px] capitalize">
      {taskName}
    </div>
  );
};
export default TaskName;
