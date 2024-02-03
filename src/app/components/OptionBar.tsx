import Image from "next/image";
import { OptionBarProps } from "../../../types/types";
import searchIcon from "../../../public/search-icon.svg";
import { useState } from "react";

export default function OptionBar({
  searchTerm,
  setSearchTerm,
  sortDocuments,
}: OptionBarProps) {
  const [activeSort, setActiveSort] = useState("");

  // Sort documents
  const handleSort = (sortBy: string) => {
    sortDocuments(sortBy);
    setActiveSort(sortBy);
  };

  return (
    <div className="flex items-center justify-between flex-col sm:flex-row gap-4">
      <label className="flex items-center w-full bg-backgroundMain rounded-md pl-3">
        <Image src={searchIcon} alt="Search Icon" width={20} height={20} />
        <input
          type="text"
          className="bg-backgroundMain w-full py-2 px-4 text-textMain rounded-lg"
          placeholder="Search Document"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
      <div className="flex items-center justify-between gap-2 min-w-[190px]">
        Sort By:{" "}
        <button
          type="button"
          className={`bg-backgroundMain rounded-md px-3 py-2 text-textMain text-sm ${
            activeSort === "date" && "active-sort"
          }`}
          onClick={() => handleSort("date")}
        >
          Date
        </button>
        <button
          type="button"
          className={`bg-backgroundMain rounded-md px-3 py-2 text-textMain text-sm ${
            activeSort === "type" && "active-sort"
          }`}
          onClick={() => handleSort("type")}
        >
          Type
        </button>
      </div>
    </div>
  );
}
