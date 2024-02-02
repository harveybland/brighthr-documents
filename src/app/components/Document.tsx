import React, { useState } from "react";
import { DocumentItem } from "../../../types/types";
import DocumentIcon from "./DocumentIcon";
import Modal from "./Modal";

export default function Document({ type, name, added, files }: DocumentItem) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFolderClick = () => {
    if (type === "folder") {
      setIsModalOpen(true);
    }
  };

  return (
    <button
      type="button"
      className={`grid-container border border-backgroundMain w-full rounded py-4 px-4 ${
        type !== "folder" && "cursor-default"
      } `}
      onClick={handleFolderClick}
    >
      <div className="flex items-center gap-3 grid-col-stretch">
        <DocumentIcon type={type} />
        <h2>{name}</h2>
      </div>
      <p>{added ? added : ""}</p>
      <p>{type}</p>
      <div className="flex items-start">
        <p className="bg-backgroundMain py-1 px-3 rounded-xl text-green-600 text-sm">
          Active
        </p>
      </div>
      {isModalOpen && files && <Modal files={files} />}
    </button>
  );
}
