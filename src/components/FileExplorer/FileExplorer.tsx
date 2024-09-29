import React, { useState } from 'react';
import { FileData } from '../../types/fileTypes';
import './FileExplorer.css';

interface FileExplorerProps {
  files: FileData;
}

const FileExplorer: React.FC<FileExplorerProps> = ({ files }) => {
  const [expandedFolders, setExpandedFolders] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [currentFile, setCurrentFile] = useState<string | null>(null);

  const handleFolderClick = (folderName: string) => {
    setExpandedFolders((prev) =>
      prev.includes(folderName)
        ? prev.filter((name) => name !== folderName)
        : [...prev, folderName]
    );
  };

  const handleFileClick = (fileName: string) => {
    setSelectedFile(fileName);
  };

  const handleRightClick = (e: React.MouseEvent, fileName: string) => {
    e.preventDefault();
    setCurrentFile(fileName);
  };

  // Recursive function to render file/folder structure
  const renderFileStructure = (file: FileData) => {
    if (file.type === 'folder') {
      const isExpanded = expandedFolders.includes(file.name);
      return (
        <div key={file.name} className="folder-container">
          <div className="folder" onClick={() => handleFolderClick(file.name)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="green"
              className="bi bi-folder"
              viewBox="0 0 16 16"
            >
              <path d="M10.5 0h-9A1.5 1.5 0 0 0 0 1.5v13A1.5 1.5 0 0 0 1.5 16h13A1.5 1.5 0 0 0 16 14.5v-9a1.5 1.5 0 0 0-1.5-1.5H10.5L9 0z" />
            </svg>
            <span className="item-name">{file.name}</span>
          </div>
          {isExpanded && (
            <div className="children" style={{ paddingLeft: '20px' }}>
              {file.data?.map((childFile) => renderFileStructure(childFile))}
            </div>
          )}
        </div>
      );
    }

    return (
      <div
        key={file.name}
        onClick={() => handleFileClick(file.name)}
        onContextMenu={(e) => handleRightClick(e, file.name)} // Right click action
        className={`file ${selectedFile === file.name ? 'selected' : ''}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="blue"
          className="bi bi-file-earmark"
          viewBox="0 0 16 16"
        >
          <path d="M9.293 0 9 0H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5.707L9.293 0z" />
        </svg>
        <span className="item-name">
          {file.name} {file.meta && <span>({file.meta})</span>}
        </span>
      </div>
    );
  };

  return <div>{renderFileStructure(files)}</div>;
};

export default FileExplorer;
