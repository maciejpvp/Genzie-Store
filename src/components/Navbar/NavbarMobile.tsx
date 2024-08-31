import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import GenzieLogo from "../../assets/logo_genzie.svg";
import { Sidebar } from "./Sidebar";
import { AnimatePresence } from "framer-motion";

export const NavbarMobile: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex-1 w-dvw"></div>
      <div className="flex-1">
        <img src={GenzieLogo} alt="Logo" className="h-full" />
      </div>
      <div className="flex-1 flex justify-end">
        <button onClick={toggleSidebar}>
          <IoIosMenu size={24} />
        </button>
      </div>
      <div className="">
        <AnimatePresence>
          {isSidebarOpen && <Sidebar onClose={toggleSidebar} />}
        </AnimatePresence>
      </div>
    </>
  );
};
