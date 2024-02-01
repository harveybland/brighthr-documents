import { Item } from "../../types/types";
import { jsonData } from "./api/json";

export default async function Home() {
  // Fetch json data from api/json.ts
  const documents: Item[] = await jsonData();
  console.log(documents);

  return <main>Hello World</main>;
}
