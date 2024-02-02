import { File } from "../../../types/types";
import DocumentIcon from "./DocumentIcon";

export default function DocumentInfo({ type, name, added }: File) {
  return (
    <>
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
    </>
  );
}
