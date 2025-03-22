import React from "react";

type Props = {};

const Tag = ({
  collaborator,
  handleRemoveCollaborator,
}: {
  collaborator: string;
  handleRemoveCollaborator: (email: string) => void;
}) => {
  return (
    <div className="inline-block justify-between bg-[var(--primitives-gray-300)] rounded-[8px] px-2 text-xs">
      {collaborator}
      <span
        className="ml-2 cursor-pointer"
        onClick={() => handleRemoveCollaborator(collaborator)}
      >
        &times;
      </span>
    </div>
  );
};
export default Tag;
