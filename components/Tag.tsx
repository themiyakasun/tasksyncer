type Props = {};

const Tag = ({ collaborator }: { collaborator?: string }) => {
  return (
    <div className="inline-block bg-[var(--primitives-gray-300)] rounded-[8px] px-2 text-xs">
      {collaborator}
      <span className="ml-2">&times;</span>
    </div>
  );
};
export default Tag;
