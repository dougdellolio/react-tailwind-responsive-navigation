import React from 'react';
import { PiAcorn } from 'react-icons/pi';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-gray-800 text-white transform ${
        isOpen ? 'w-64' : 'w-20'
      } transition-width duration-300 ease-in-out`}
    >
      <ul className="p-4 space-y-4">
        <li className="flex items-center">
          <PiAcorn className="w-6 h-6" />
          {isOpen && <span className="ml-2">Home</span>}
        </li>
        <li className="flex items-center">
          <PiAcorn className="w-6 h-6" />
          {isOpen && <span className="ml-2">About</span>}
        </li>
        <li className="flex items-center">
          <PiAcorn className="w-6 h-6" />
          {isOpen && <span className="ml-2">Contact</span>}
        </li>
      </ul>
      <button
        onClick={toggleSidebar}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-700 p-2 rounded-full"
      >
        {isOpen ? 'Collapse' : 'Expand'}
      </button>
    </aside>
  );
};

export default Sidebar;
