import { File } from "../../../types/types";
import Image from "next/image";
import folder from "../../../public/folder-icon.svg";

export default function Document({ type, name, added }: File) {
  return (
    <div className="grid-style border border-backgroundMain rounded py-4 px-4 cursor-pointer">
      <div className="flex items-center gap-3">
        <Image src={folder} alt="Folder svg" width={30} height={30} />
        <h2>{name}</h2>
      </div>
      <p>{added}</p>
      <p>{type}</p>
      <div className="flex">
        <p className="bg-backgroundMain py-1 px-3 rounded-xl text-green-600">
          Active
        </p>
      </div>
    </div>
  );
}
