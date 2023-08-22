import { NavLink } from "react-router-dom";
import { sidebarButtons } from "..";
import SidebarIcon from "./SibarIcon";
import { useSelectedIconStore } from "./store";

const SidebarContent = () => {
  const { setSelectedIcon } = useSelectedIconStore();
  return (
    <>
      <NavLink to={"/"} onClick={() => setSelectedIcon("Home")}>
        <img src="/assets/logo.svg" alt="logo" className="w-12" />
      </NavLink>
      <div>
        {sidebarButtons.map((button) => (
          <SidebarIcon
            key={button.id}
            icon={button.icon}
            text={button.text}
            path={button.path}
          />
        ))}
      </div>
    </>
  );
};

export default SidebarContent;
