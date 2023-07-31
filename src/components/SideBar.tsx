import { useState } from "react";
import { sidebarButtons } from ".";

const SideBar = () => {
  const [selectedIcon, setSelectedIcon] = useState("Home");
  return (
    <div className="bg-black text-white fixed top-0 left-0 z-50 h-screen w-16 m-0 pt-5 flex flex-col items-center shadow-lg">
      <img
        src="../src/assets/logo.svg"
        alt="logo"
        className="w-12 h-12 mb-40"
      />
      {sidebarButtons.map((button) => (
        <SidebarIcon
          key={button.id}
          icon={button.icon}
          text={button.text}
          setSelectedIcon={setSelectedIcon}
          selectedIcon={selectedIcon}
        />
      ))}
    </div>
  );
};

interface SidebarIconProps {
  icon: JSX.Element;
  text: string;
  selectedIcon: string;
  setSelectedIcon: (text: string) => void;
}

const SidebarIcon = ({
  icon,
  text,
  setSelectedIcon,
  selectedIcon,
}: SidebarIconProps) => {
  return (
    <div
      onClick={() => setSelectedIcon(text)}
      className={`sidebar-icons group hover:bg-blue-600 hover:text-white hover:rounded-xl ${
        selectedIcon === text
          ? "rounded-xl text-white bg-blue-600"
          : "rounded-3xl text-blue-500 bg-gray-800"
      }`}
    >
      {icon}

      <span className="sidebar-tooltip group-hover:scale-100 ">{text}</span>
    </div>
  );
};

export default SideBar;
