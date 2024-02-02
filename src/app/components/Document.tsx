import React, { useState } from "react";
import { DocumentItem } from "../../../types/types";
import Modal from "./Modal";
import DocumentInfo from "./DocumentInfo";

export default function Document({ type, name, added, files }: DocumentItem) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal
  const handleFolderClick = () => {
    if (type === "folder") {
      setIsModalOpen(true);
    }
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className={`grid-container border border-backgroundMain w-full rounded py-4 px-4 ${
          type !== "folder" && "cursor-default"
        } `}
        onClick={handleFolderClick}
      >
        <DocumentInfo type={type} name={name} added={added ? added : ""} />
        <div className="flex items-start">
          <p className="bg-backgroundMain py-1 px-3 rounded-xl text-green-600 text-sm">
            Active
          </p>
        </div>
      </button>
      {isModalOpen && files && <Modal files={files} closeModal={closeModal} />}
    </>
  );
}
