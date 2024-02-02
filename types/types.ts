export interface DocumentItem {
    type: "pdf" | "folder" | "csv" | "doc" | "mov";
    name: string;
    added?: string;
    files?: DocumentItem[];
}

export interface File {
    name: string;
    type: string;
    added: string;
}

export interface DocumentType {
    type: string
}