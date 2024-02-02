import { DocumentItem } from "../../types/types";
import { jsonData } from "./api/json";
import Document from "./components/Document";

export default async function Home() {
  // Fetch json data from api/json.ts
  // This is a temporary solution to fetch data from a local file
  const documents: DocumentItem[] = await jsonData();

  return (
    <div className="bg-white px-4 ">
      <h1 className="relative text-2xl rounded-t py-5">Documents</h1>
      <p className="pb-3">{documents.length} documents</p>
      <div className="pb-4 rounded rounded-tl-none">
        <div className="grid-container bg-backgroundMain px-4 rounded-t py-4 text-textMain text-sm">
          <p className="grid-col-stretch">Document Name</p>
          <p>Date</p>
          <p>Type</p>
          <p>Status</p>
        </div>
        <div className="flex flex-col gap-4">
          {documents.map((document) => (
            <div key={document.name}>
              <Document
                type={document.type}
                name={document.name}
                added={document.added}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
