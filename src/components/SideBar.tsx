import { AiOutlineClose } from "react-icons/ai";
import { sidebarButtons } from ".";
import { NavLink } from "react-router-dom";
import SidebarIcon from "./SibarIcon";

interface Props {
  selectedIcon: string;
  setSelectedIcon: (value: string) => void;
  sidebarToggle: boolean;
  setSidebarToggle: (value: boolean) => void;
}

const SideBar = ({
  selectedIcon,
  setSelectedIcon,
  sidebarToggle,
  setSidebarToggle,
}: Props) => {
  return (
    <>
      <div className="bg-black text-white fixed top-0 left-0 z-50 h-screen w-16 m-0 pt-5 hidden md:flex flex-col justify-between items-center shadow-lg">
        <NavLink to={"/"} onClick={() => setSelectedIcon("Home")}>
          <img src="../src/assets/logo.svg" alt="logo" className="w-12" />
        </NavLink>
        <div>
          {sidebarButtons.map((button) => (
            <SidebarIcon
              key={button.id}
              icon={button.icon}
              text={button.text}
              path={button.path}
              setSelectedIcon={setSelectedIcon}
              selectedIcon={selectedIcon}
            />
          ))}
        </div>
        <div className="sidebar-icons"></div>
      </div>

      <div
        className={`bg-black text-white fixed top-0 left-0 z-50 h-screen w-16 m-0 pt-5 ${
          sidebarToggle ? "flex" : "hidden"
        } flex-col items-center shadow-lg`}
      >
        <NavLink to={"/"} onClick={() => setSelectedIcon("Home")}>
          <img src="../src/assets/logo.svg" alt="logo" className="w-12" />
        </NavLink>
        <div>
          {sidebarButtons.map((button) => (
            <SidebarIcon
              key={button.id}
              icon={button.icon}
              text={button.text}
              path={button.path}
              setSelectedIcon={setSelectedIcon}
              selectedIcon={selectedIcon}
            />
          ))}
        </div>
        <button
          className="sidebar-icons rounded-3xl text-red-500 bg-gray-800 hover:bg-red-600 hover:text-white hover:rounded-xl"
          onClick={() => setSidebarToggle(false)}
        >
          <AiOutlineClose />
        </button>
      </div>
    </>
  );
};

export default SideBar;
