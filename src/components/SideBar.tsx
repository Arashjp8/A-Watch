import { sidebarButtons } from ".";

const SideBar = () => {
  return (
    <div className="bg-black text-white fixed top-0 left-0 z-50 h-screen w-16 m-0 pt-5 flex flex-col items-center shadow-lg">
      <img
        src="../src/assets/logo.svg"
        alt="logo"
        className="w-12 h-12 mb-40"
      />
      {sidebarButtons.map((button) => (
        <SidebarIcon key={button.id} icon={button.icon} text={button.text} />
      ))}
    </div>
  );
};

interface SidebarIconProps {
  icon: JSX.Element;
  text: string;
}

const SidebarIcon = ({ icon, text }: SidebarIconProps) => {
  return (
    <div className="sidebar-icons group">
      {icon}

      <span className="sidebar-tooltip group-hover:scale-100 ">{text}</span>
    </div>
  );
};

export default SideBar;
