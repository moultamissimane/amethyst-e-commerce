import React from "react";
// import { MenuIcon, XIcon } from '@heroicons/react/outline';  
// @ts-ignore
import MenuIcon from '@mui/icons-material/Menu';
// @ts-ignore
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { UserCircleIcon } from '@heroicons/react/solid';

type HeaderProps = {
  onSidebarToggle: () => void;
};

const Header = ({ onSidebarToggle }: HeaderProps) => {
    return (
      <header className="bg-[#1a001f] shadow-sm flex w-full h-14 justify-between items-center px-4 py-2">
        <button onClick={onSidebarToggle} className=" focus:outline-none">
          <MenuIcon className="h-6 w-6 text-white" />
        </button>
        <div className="flex items-center">
          <AccountCircleIcon className="h-6 w-6 text-white" />
          <span className="ml-2 text-white">John Doe</span>
        </div>
      </header>
    );
  };
export default Header;
