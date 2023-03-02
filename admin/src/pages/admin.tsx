import react, { useState } from "react";
import Sidebar from "../components/Sidebar";

type AdminStackProps = {
  children: React.ReactNode;
  sidebarLinks: SidebarLink[];
};

const Admin = ({ children, sidebarLinks }: AdminStackProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        links={sidebarLinks}
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
