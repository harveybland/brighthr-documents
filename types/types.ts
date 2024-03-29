// Document item interface
export interface DocumentItem {
    type: "pdf" | "folder" | "csv" | "doc" | "mov";
    name: string;
    added?: string;
    files?: File[];
}

// File interface
export interface File {
    name: string;
    type: string;
    added: string;
}

// Document type interface
export interface DocumentType {
    type: string
}

// Modal props interface
export interface ModalProps {
    files: File[];
    closeModal?: () => void;
}

// Option bar props interface
export interface OptionBarProps {
    searchTerm: string;
    setSearchTerm: (option: string) => void;
    sortDocuments: (option: string) => void;
}

// Modal header props interface
export interface ModalHeaderProps {
    modalHeader: boolean;
}