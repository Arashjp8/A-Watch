import { NavLink } from "react-router-dom";

interface SidebarIconProps {
  index: number;
  icon: JSX.Element;
  text: string;
  path: string;
  selectedIcon: string;
  setSelectedIcon: (text: string) => void;
}

const SidebarIcon = ({
  index,
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
      } ${index === 0 ? "mt-0 md:mt-48" : ""} `}
    >
      {icon}

      <span className="sidebar-tooltip group-hover:scale-100 ">{text}</span>
    </NavLink>
  );
};

export default SidebarIcon;
