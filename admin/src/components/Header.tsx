import React from "react";
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { UserCircleIcon } from '@heroicons/react/solid';

type HeaderProps = {
  onSidebarToggle: () => void;
};

const Header = ({ onSidebarToggle }: HeaderProps) => {
    return (
      <header className="bg-white shadow-sm flex justify-between items-center px-4 py-2">
        <button onClick={onSidebarToggle} className="text-gray-700 focus:outline-none">
          <MenuIcon className="h-6 w-6" />
        </button>
        <div className="flex items-center">
          <UserCircleIcon className="h-6 w-6 text-gray-600" />
          <span className="ml-2 text-gray-600">John Doe</span>
        </div>
      </header>
    );
  };
export default Header;
