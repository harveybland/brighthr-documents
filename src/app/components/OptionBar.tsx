import Image from "next/image";
import { OptionBarProps } from "../../../types/types";
import searchIcon from "../../../public/search-icon.svg";

export default function OptionBar({
  searchTerm,
  setSearchTerm,
}: OptionBarProps) {
  return (
    <div>
      <label className="flex items-center w-full bg-backgroundMain rounded-md pl-3">
        <Image src={searchIcon} alt="Search Icon" width={20} height={20} />
        <input
          type="text"
          className="bg-backgroundMain w-full py-2 px-4 text-textMain rounded-md"
          placeholder="Search Document"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
    </div>
  );
}
