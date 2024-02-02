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

  return (
    <div
      className={`absolute flex flex-col items-center justify-center left-1/2 transform -translate-x-1/2 w-[500px] h-[300px] bg-white border rounded py-4 px-4`}
    >
      <OptionBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <button
        type="button"
        className="absolute top-2 right-2 text-gray-500 cursor-pointer"
        onClick={closeModal}
      >
        <Image src={closeIcon} alt="Close icon" width={20} height={20} />
      </button>
      {filteredFiles.map((file) => (
        <div key={file.name}>
          <DocumentInfo type={file.type} name={file.name} added={file.added} />
        </div>
      ))}
    </div>
  );
}
