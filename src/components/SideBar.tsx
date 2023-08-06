import { sidebarButtons } from ".";
import { NavLink } from "react-router-dom";

interface Props {
  selectedIcon: string;
  setSelectedIcon: (value: string) => void;
}

const SideBar = ({ selectedIcon, setSelectedIcon }: Props) => {
  return (
    <div className="bg-black text-white fixed top-0 left-0 z-50 h-screen w-16 m-0 pt-5 flex flex-col items-center shadow-lg">
      <NavLink to={"/"} onClick={() => setSelectedIcon("Home")}>
        <img src="../src/assets/logo.svg" alt="logo" className="w-12" />
      </NavLink>
      {sidebarButtons.map((button, index) => (
        <SidebarIcon
          index={index}
          key={button.id}
          icon={button.icon}
          text={button.text}
          path={button.path}
          setSelectedIcon={setSelectedIcon}
          selectedIcon={selectedIcon}
        />
      ))}
    </div>
  );
};

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
      } ${index === 0 ? "mt-48" : ""}`}
    >
      {icon}

      <span className="sidebar-tooltip group-hover:scale-100 ">{text}</span>
    </NavLink>
  );
};

export default SideBar;
