import { File } from "../../../types/types";
import DocumentIcon from "./DocumentIcon";

export default function Document({ type, name, added }: File) {
  return (
    <div className="grid-style border border-backgroundMain rounded py-4 px-4">
      <div className="flex items-center gap-3">
        <DocumentIcon type={type} />
        <h2>{name}</h2>
      </div>
      <p>{added}</p>
      <p>{type}</p>
      <div className="flex">
        <p className="bg-backgroundMain py-1 px-3 rounded-xl text-green-600 text-sm">
          Active
        </p>
      </div>
    </div>
  );
}
