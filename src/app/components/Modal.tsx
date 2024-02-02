"use client";

import Image from "next/image";
import { ModalProps } from "../../../types/types";
import DocumentInfo from "./DocumentInfo";
import closeIcon from "../../../public/close-icon.svg";

export default function Modal({ files, closeModal }: ModalProps) {
  return (
    <div
      className={`absolute flex flex-col items-center justify-center left-1/2 transform -translate-x-1/2 w-[500px] h-[300px] bg-white border rounded py-4 px-4`}
    >
      <button
        type="button"
        className="absolute top-2 right-2 text-gray-500 cursor-pointer"
        onClick={closeModal}
      >
        <Image src={closeIcon} alt="Close icon" width={20} height={20} />
      </button>
      {files.map((file) => (
        <div key={file.name}>
          <DocumentInfo type={file.type} name={file.name} added={file.added} />
        </div>
      ))}
    </div>
  );
}
