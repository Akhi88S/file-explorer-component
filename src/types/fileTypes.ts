export interface FileData {
  name: string;
  type: 'file' | 'folder';
  data?: FileData[];
  meta?: string;
}
