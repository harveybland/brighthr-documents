import { File } from "../../../types/types";

export default function Document({ type, name, added }: File) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Added: {added}</p>
      <p>Type: {type}</p>
    </div>
  );
}
