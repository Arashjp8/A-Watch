import { NavLink } from "react-router-dom";
import { useSelectedIconStore, useSidebarToggleStore } from "./store";

interface SidebarIconProps {
  icon: JSX.Element;
  text: string;
  path: string;
}

const MobileNavbarIcons = ({ icon, text, path }: SidebarIconProps) => {
  const { selectedIcon, setSelectedIcon } = useSelectedIconStore();
  const { closeSidebar } = useSidebarToggleStore();

  return (
    <NavLink
      to={`${path}`}
      onClick={() => {
        setSelectedIcon(text);
        closeSidebar();
      }}
      className={`group relative mx-auto my-2 flex h-12 w-12 cursor-pointer flex-col items-center justify-center gap-1 shadow-lg transition-all duration-150 ease-linear hover:rounded-xl hover:bg-blue-600 hover:text-white md:flex-row ${
        selectedIcon === text
          ? "rounded-2xl bg-blue-600 text-white"
          : "rounded-3xl text-blue-500"
      }`}
    >
      <i className="text-2xl">{icon}</i>
    </NavLink>
  );
};

export default MobileNavbarIcons;
