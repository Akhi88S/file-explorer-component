import React, { useState } from 'react';
import { FileData } from '../../types/fileTypes';

interface FileExplorerProps {
  files: FileData;
}

const FileExplorer: React.FC<FileExplorerProps> = ({ files }) => {
  return <div>File Explorer Component</div>;
};

export default FileExplorer;
