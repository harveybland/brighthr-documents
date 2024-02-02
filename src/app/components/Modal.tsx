import { File } from "../../../types/types";

export default function Modal({ files }: { files: File[] }) {
  return (
    <div
      className={`absolute left-0 right-0 grid-container bg-white border border-backgroundMain rounded py-4 px-4`}
    >
      {files.map((file) => (
        <div key={file.name}>
          <p>{file.name}</p>
          <p>{file.type}</p>
          <p>{file.added}</p>
        </div>
      ))}
    </div>
  );
}
