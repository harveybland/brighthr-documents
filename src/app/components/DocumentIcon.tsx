import Image from "next/image";
import folderIcon from "../../../public/folder-icon.png";
import pdfIcon from "../../../public/pdf-icon.png";
import csvIcon from "../../../public/csv-icon.png";
import docIcon from "../../../public/doc-icon.png";
import movIcon from "../../../public/mov-icon.png";
import { DocumentType } from "../../../types/types";

export default function DocumentIcon({ type }: DocumentType) {
  return (
    <div>
      {type === "pdf" ? (
        <Image src={pdfIcon} alt="PDF svg" width={30} height={30} />
      ) : type === "csv" ? (
        <Image src={csvIcon} alt="CSV svg" width={36} height={36} />
      ) : type === "folder" ? (
        <Image src={folderIcon} alt="Folder svg" width={30} height={30} />
      ) : type === "doc" ? (
        <Image src={docIcon} alt="DOC svg" width={30} height={30} />
      ) : (
        <Image src={movIcon} alt="PDF svg" width={30} height={30} />
      )}
    </div>
  );
}
