export default function sortDocuments(sortBy: string, state: any, setState: React.Dispatch<React.SetStateAction<any>>)  {
    const sorted = [...state];
  
    switch (sortBy) {
      case "date":
        sorted.sort((a: any, b: any) => {
          const dateA = a.added ? new Date(a.added) : null;
          const dateB = b.added ? new Date(b.added) : null;
          return (dateA?.getTime() || 0) - (dateB?.getTime() || 0);
        });
        break;
      case "type":
        sorted.sort((a, b) => a.type.localeCompare(b.type));
        break;
      default:
        break;
    }
  
    setState(sorted);
  };