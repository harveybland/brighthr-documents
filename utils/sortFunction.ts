export default function SortFunction(filteredFiles: any, setFilteredFiles: any) {
    const sortByDate = (a: any, b: any) => {
      const dateA = new Date(a.added);
      const dateB = new Date(b.added);
  
      // Handle invalid dates
      if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
        return 0; // Return 0 for invalid dates, or adjust as needed
      }
  
      return dateA - dateB;
    };
  
    const sortByType = (a: any, b: any) => a.type.localeCompare(b.type);
  
    const sortDocuments = (sortBy: string) => {
      const sorted = [...filteredFiles];
  
      switch (sortBy) {
        case "date":
          sorted.sort(sortByDate);
          break;
        case "type":
          sorted.sort(sortByType);
          break;
        default:
          break;
      }
  
      setFilteredFiles(sorted);
    };
  
    return sortDocuments;
  }
  