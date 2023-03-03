import react, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

type AdminStackProps = {
  children: React.ReactNode;
  // @ts-ignore
  links: SidebarLink[];
};

const Admin = ({ children, links }: AdminStackProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen max-w-full">
      <Sidebar
        links={links}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex flex-col w-full">
        <Header onSidebarToggle={toggleSidebar} />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
};

export default Admin;
