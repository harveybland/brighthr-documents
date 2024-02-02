"use client";

import { useEffect, useState } from "react";
import OptionBar from "./components/OptionBar";
import { DocumentItem } from "../../types/types";
import { jsonData } from "./api/json";
import Document from "./components/Document";

export default function Home() {
  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [filteredDocuments, setFilteredDocuments] = useState<DocumentItem[]>(
    []
  );
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch json data from api/json.ts
  // This is a temporary solution to fetch data from a local file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedDocuments: DocumentItem[] = await jsonData();
        setDocuments(fetchedDocuments);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Filter documents based on document name
  useEffect(() => {
    const filtered = documents.filter((document) => {
      const nameMatches = document.name
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());
      return nameMatches;
    });

    // Set filtered documents
    setFilteredDocuments(filtered);
  }, [searchTerm, documents]);

  // Sort documents
  const sortDocuments = (sortBy: string) => {
    const sorted = [...filteredDocuments];

    switch (sortBy) {
      case "date":
        sorted.sort((a: any, b: any) => {
          const dateA = new Date(a.added);
          const dateB = new Date(b.added);
          return dateA - dateB;
        });
        break;
      case "type":
        sorted.sort((a, b) => a.type.localeCompare(b.type));
        break;
      default:
        break;
    }

    setFilteredDocuments(sorted);
  };

  return (
    <div className="bg-white px-4">
      <h1 className="relative text-2xl rounded-t py-5">Documents</h1>
      <OptionBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortDocuments={sortDocuments}
      />
      <p className="py-4">{filteredDocuments.length} documents</p>
      <div className="pb-4 rounded rounded-tl-none">
        <div className="flex flex-col gap-4">
          <div className="grid-container bg-backgroundMain px-4 rounded-t py-4 text-textMain text-sm">
            <p className="grid-col-stretch">Document Name</p>
            <p>Date</p>
            <p>Type</p>
            <p>Status</p>
          </div>
          {filteredDocuments.map((document) => (
            <div key={document.name}>
              <Document
                type={document.type}
                name={document.name}
                added={document.added}
                files={document.files}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
