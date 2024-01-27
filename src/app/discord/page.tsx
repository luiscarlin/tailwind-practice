import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaGuitar } from "react-icons/fa";

import "./styles.css";

export default function Discord() {
  return (
    <>
      <aside className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
        <SidebarLinkWithTooltip tooltipText="This is fire!">
          <FaFire size="28" />
        </SidebarLinkWithTooltip>
        <SidebarLinkWithTooltip tooltipText="Add item">
          <BsPlus size="32" />
        </SidebarLinkWithTooltip>
        <SidebarLinkWithTooltip tooltipText="lighting!">
          <BsFillLightningFill size="20" />
        </SidebarLinkWithTooltip>
        <SidebarLinkWithTooltip tooltipText="Guiar zone">
          <FaGuitar size="20" />
        </SidebarLinkWithTooltip>
        <SidebarLinkWithTooltip tooltipText="settings">
          <BsGearFill size="22" />
        </SidebarLinkWithTooltip>
      </aside>
      <main className="ml-16"></main>
    </>
  );
}

const SidebarLinkWithTooltip = ({
  children,
  tooltipText,
}: {
  children: React.ReactNode;
  tooltipText: string;
}) => {
  return (
    <a
      href="#"
      aria-label={tooltipText}
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
    </a>
  );
};
