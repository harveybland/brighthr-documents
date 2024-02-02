"use client";

import Image from "next/image";
import { File, ModalProps } from "../../../types/types";
import DocumentInfo from "./DocumentInfo";
import closeIcon from "../../../public/close-icon.svg";
import { useEffect, useState } from "react";
import OptionBar from "./OptionBar";

export default function Modal({ files, closeModal }: ModalProps) {
  const [filteredFiles, setFilteredFiles] = useState<File[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Filter folder documents based on document name
    const filtered = files.filter((file) => {
      const nameMatches = file.name
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());
      return nameMatches;
    });

    setFilteredFiles(filtered);
  }, [searchTerm, files]);

  // Sort documents
  const sortDocuments = (sortBy: string) => {
    const sorted = [...filteredFiles];

    switch (sortBy) {
      case "date":
        sorted.sort((a: any, b: any) => {
          const dateA = new Date(a.added);
          const dateB = new Date(b.added);
          return dateA - dateB;
        });
        break;
      case "type":
        sorted.sort((a, b) => a.type.localeCompare(b.type));
        break;
      default:
        break;
    }
    setFilteredFiles(sorted);
  };

  return (
    <div className="modal-container shadow-[0px_0px_20px_0px_rgba(0,0,0,.1)] space-y-4">
      <OptionBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortDocuments={sortDocuments}
      />
      <button
        type="button"
        className="absolute top-[-9px] right-2 text-gray-500 cursor-pointer"
        onClick={closeModal}
      >
        <Image src={closeIcon} alt="Close icon" width={18} height={18} />
      </button>
      <div className="grid-container bg-backgroundMain px-4 rounded-t py-4 text-textMain text-sm">
        <p className="grid-col-stretch">Document Name</p>
        <p>Date</p>
        <p>Type</p>
        <p>Status</p>
      </div>
      {filteredFiles.map((file) => (
        <div key={file.name} className="grid-container">
          <DocumentInfo type={file.type} name={file.name} added={file.added} />
        </div>
      ))}
    </div>
  );
}
