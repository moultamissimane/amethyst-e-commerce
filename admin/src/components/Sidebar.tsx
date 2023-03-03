import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";

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

const links = [
  {
    label: "Dashboard",
    path: "/",
    icon: () => <DashboardIcon />,
  },
  {
    label: "Users",
    path: "/users",
    icon: () => <GroupIcon />,
  },
];

const Sidebar = ({ links, open, onClose }: SidebarProps) => {
  return (
    <aside className={`bg-primary h-screen w-56 ${open ? "block" : "hidden"}`}>
      <div className="p-4 flex justify-between">
        <h2 className="text-white font-bold text-center">Amethyst</h2>
        <button onClick={onClose} className="text-white focus:outline-none">
          <CloseIcon className="h-6 w-6" />
        </button>
      </div>
      <nav>
        {/* {links.map((link) => (
          <div
            key={link.path}
            className="block text-gray-300 hover:bg-gray-700 px-4 py-2"
          >
            <div className="h-5 w-5 inline-block mr-2">
              <link.icon />
              </div>
            {link.label}
          </div>
        ))} */}
        {links.map((link, idx) => (
          <div>
            <div
              key={idx}
              className="block text-gray-300 hover:bg-gray-700 px-4 py-2"
            >
              <div className="h-5 w-5 inline-block mr-2">
                <DashboardIcon />
              </div>
              {link.label}
            </div>
            <div className="block text-gray-300 hover:bg-gray-700 px-4 py-2">
              <div className="h-5 w-5 inline-block mr-2">
                <GroupIcon />
              </div>
              Users
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
