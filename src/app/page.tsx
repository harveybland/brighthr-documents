import { File } from "../../types/types";
import { jsonData } from "./api/json";
import Document from "./components/Document";

export default async function Home() {
  // Fetch json data from api/json.ts
  const documents: File[] = await jsonData();

  return (
    <div>
      <h1>Documents</h1>
      <div>
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
  );
}
