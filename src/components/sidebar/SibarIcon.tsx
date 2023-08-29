import { NavLink } from "react-router-dom";
import { useSelectedIconStore, useSidebarToggleStore } from "./store";

interface SidebarIconProps {
  icon: JSX.Element;
  text: string;
  path: string;
}

const SidebarIcon = ({ icon, text, path }: SidebarIconProps) => {
  const { selectedIcon, setSelectedIcon } = useSelectedIconStore();
  const { closeSidebar } = useSidebarToggleStore();

  return (
    <NavLink
      to={`${path}`}
      onClick={() => {
        setSelectedIcon(text);
        closeSidebar();
      }}
      className={`sidebar-icons group hover:rounded-xl hover:bg-blue-600 hover:text-white ${
        selectedIcon === text
          ? "rounded-xl bg-blue-600 text-white"
          : "rounded-3xl bg-gray-800 text-blue-500"
      }`}
    >
      {icon}

      <span className="sidebar-tooltip group-hover:scale-100 ">{text}</span>
    </NavLink>
  );
};

export default SidebarIcon;
