import { NavLink } from "react-router-dom";

interface SidebarIconProps {
  icon: JSX.Element;
  text: string;
  path: string;
  selectedIcon: string;
  setSelectedIcon: (text: string) => void;
}

const SidebarIcon = ({
  icon,
  text,
  path,
  setSelectedIcon,
  selectedIcon,
}: SidebarIconProps) => {
  return (
    <NavLink
      to={`${path}`}
      onClick={() => setSelectedIcon(text)}
      className={`sidebar-icons group hover:bg-blue-600 hover:text-white hover:rounded-xl ${
        selectedIcon === text
          ? "rounded-xl text-white bg-blue-600"
          : "rounded-3xl text-blue-500 bg-gray-800"
      }`}
    >
      {icon}

      <span className="sidebar-tooltip group-hover:scale-100 ">{text}</span>
    </NavLink>
  );
};

export default SidebarIcon;
