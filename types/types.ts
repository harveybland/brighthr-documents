export interface File {
    type: string;
    name: string;
    added: string;
}

export interface Folder {
    type: "folder";
    name: string;
    files: File[];
}

export type Item = File | Folder;

export interface Type {
    type: string
}