import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

import "./styles.css";

export default function Discord() {
  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
        <SidebarIcon>
          <FaFire size="28" />
        </SidebarIcon>
        <SidebarIcon>
          <BsPlus size="32" />
        </SidebarIcon>
        <SidebarIcon>
          <BsFillLightningFill size="20" />
        </SidebarIcon>
        <SidebarIcon>
          <FaPoo size="20" />
        </SidebarIcon>
        <SidebarIcon>
          <BsGearFill size="22" />
        </SidebarIcon>
      </div>
    </div>
  );
}

const SidebarIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <i
      className="relative flex items-center justify-center h-12 w-12 my-2 mx-auto shadow-lg 
                  bg-gray-800 text-green-500 hover:bg-green-600 hover:text-white 
                  rounded-full hover:shadow-xl cursor-pointer transition-all"
    >
      {children}
    </i>
  );
};
