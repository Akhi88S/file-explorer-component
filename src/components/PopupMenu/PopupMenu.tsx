import React from 'react';
import './PopupMenu.css'; // Import your CSS styles

interface PopupMenuProps {
  position: { x: number; y: number };
  onAction: (action: string) => void;
}

const PopupMenu: React.FC<PopupMenuProps> = ({ position, onAction }) => {
  return (
    <div className="popup-menu" style={{ left: position.x, top: position.y }}>
      <ul>
        <li onClick={() => onAction('copy')}>Copy</li>
        <li onClick={() => onAction('delete')}>Delete</li>
        <li onClick={() => onAction('rename')}>Rename</li>
      </ul>
    </div>
  );
};

export default PopupMenu;
