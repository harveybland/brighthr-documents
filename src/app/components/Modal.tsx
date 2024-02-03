import Image from "next/image";
import { File, ModalProps } from "../../../types/types";
import DocumentInfo from "./DocumentInfo";
import closeIcon from "../../../public/close-icon.svg";
import { useEffect, useState } from "react";
import OptionBar from "./OptionBar";
import DocumentHeader from "./DocumentHeader";
import sortDocuments from "../../../utils/sortFunction";

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

    // Sort documents
    sortDocuments("date", filtered, setFilteredFiles);

    // Update filteredFiles state
    setFilteredFiles(filtered);
  }, [searchTerm, files]);

  return (
    <div className="modal-container shadow-[0px_0px_20px_0px_rgba(0,0,0,.1)] space-y-4">
      <OptionBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortDocuments={(sortBy) =>
          sortDocuments(sortBy, filteredFiles, setFilteredFiles)
        }
      />
      <button
        type="button"
        className="absolute top-[-9px] right-2 text-gray-500 cursor-pointer"
        onClick={closeModal}
      >
        <Image src={closeIcon} alt="Close icon" width={18} height={18} />
      </button>
      <DocumentHeader modalHeader />
      {filteredFiles.map((file) => (
        <div key={file.name} className="grid-container-modal px-4 py-4 rounded">
          <DocumentInfo type={file.type} name={file.name} added={file.added} />
        </div>
      ))}
      {filteredFiles.length === 0 && (
        <p className="text-center">No documents found</p>
      )}
    </div>
  );
}
