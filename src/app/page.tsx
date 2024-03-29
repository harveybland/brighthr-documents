"use client";

import { useEffect, useState } from "react";
import OptionBar from "./components/OptionBar";
import { DocumentItem } from "../../types/types";
import { jsonData } from "./api/json";
import Document from "./components/Document";
import DocumentHeader from "./components/DocumentHeader";
import sortDocuments from "../../utils/sortFunction";

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

    // Sort documents
    sortDocuments("date", filtered, setFilteredDocuments);

    // Set filtered documents
    setFilteredDocuments(filtered);
  }, [searchTerm, documents]);

  return (
    <div className=" bg-white px-5 space-y-4 pb-5 shadow-[0px_0px_20px_0px_rgba(0,0,0,.1)] rounded-md">
      <h1 className="text-2xl rounded-t pt-5">Documents</h1>
      <OptionBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortDocuments={(sortBy) =>
          sortDocuments(sortBy, filteredDocuments, setFilteredDocuments)
        }
      />
      <p>{filteredDocuments.length} documents</p>
      <div className="rounded rounded-tl-none">
        <div className="flex flex-col gap-4">
          <DocumentHeader modalHeader={false} />
          <div className="space-y-4">
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
          {filteredDocuments.length === 0 && (
            <p className="text-center">No documents found</p>
          )}
        </div>
      </div>
    </div>
  );
}
