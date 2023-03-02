import React from 'react'
import { Link } from 'react-router-dom';

type SidebarLink = {
    label: string;
    path: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  };
  
  type SidebarProps = {
    links: SidebarLink[];
    open: boolean;
    onClose: () => void;
  };
  

  const Sidebar = ({ links, open, onClose }: SidebarProps) => {
    return (
      <aside className={`bg-gray-800 h-screen w-56 ${open ? 'block' : 'hidden'}`}>
        <div className="p-4 flex justify-between">
          <h2 className="text-white font-bold">Admin Panel</h2>
          <button onClick={onClose} className="text-white focus:outline-none">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <nav>
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={onClose}
              className="block text-gray-300 hover:bg-gray-700 px-4 py-2"
            >
              <link.icon className="h-5 w-5 inline-block mr-2" />
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    );
  };

export default Sidebar