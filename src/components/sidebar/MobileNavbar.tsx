import { sidebarButtons } from "..";
import SidebarIcon from "./SibarIcon";

const MobileNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 z-50 m-0 flex w-[100%] flex-row items-center gap-0 bg-black px-6 py-2 text-white shadow-lg md:hidden">
      {sidebarButtons.map((button) => (
        <SidebarIcon
          key={button.id}
          icon={button.icon}
          text={button.text}
          path={button.path}
        />
      ))}
    </nav>
  );
};

export default MobileNavbar;
