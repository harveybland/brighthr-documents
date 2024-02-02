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
    </>
  );
}
