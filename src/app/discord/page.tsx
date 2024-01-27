import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaGuitar } from "react-icons/fa";

import "./styles.css";

export default function Discord() {
  return (
    <>
      <aside className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
        <SidebarButtonWithTooltip tooltipText="This is fire!">
          <FaFire size="28" />
        </SidebarButtonWithTooltip>
        <SidebarButtonWithTooltip tooltipText="Add item">
          <BsPlus size="32" />
        </SidebarButtonWithTooltip>
        <SidebarButtonWithTooltip tooltipText="lighting!">
          <BsFillLightningFill size="20" />
        </SidebarButtonWithTooltip>
        <SidebarButtonWithTooltip tooltipText="Guiar zone">
          <FaGuitar size="20" />
        </SidebarButtonWithTooltip>
        <SidebarButtonWithTooltip tooltipText="settings">
          <BsGearFill size="22" />
        </SidebarButtonWithTooltip>
      </aside>
      <main className="ml-16"></main>
    </>
  );
}

const SidebarButtonWithTooltip = ({
  children,
  tooltipText,
}: {
  children: React.ReactNode;
  tooltipText: string;
}) => {
  return (
    <div
      className="relative flex items-center justify-center h-12 w-12 my-2 mx-auto
                bg-gray-800 hover:bg-green-600
                text-green-500 hover:text-white
                  rounded-3xl hover:rounded-xl
                  transition-all duration-300 ease-linear
                  cursor-pointer shadow-lg group"
    >
      <i>{children}</i>
      <span
        className="absolute left-14 w-auto p-2 m-2 min-w-max rounded-md shadow-md
                  text-white bg-gray-900
                    text-xs font-bold
                    transition-all duration-100 scale-0 origin-left group-hover:scale-100"
      >
        <p>{tooltipText}</p>
      </span>
    </div>
  );
};
