const SideBar = () => {
  const buttons = ["A", "B", "C", "D", "E", "F"];
  return (
    <div className="bg-black text-white fixed top-0 left-0 h-screen w-16 m-0 pt-5 flex flex-col items-center shadow-lg">
      <img
        src="../src/assets/logo.svg"
        alt="logo"
        className="w-12 h-12 mb-40"
      />
      {buttons.map((button) => (
        <SidebarIcon key={button} icon={button} />
      ))}
    </div>
  );
};

interface Props {
  icon: string;
  text?: string;
}

const SidebarIcon = ({ icon, text = "tooltip" }: Props) => {
  return (
    <div className="sidebar-icons group">
      {icon}

      <span className="sidebar-tooltip group-hover:scale-100 ">{text}</span>
    </div>
  );
};

export default SideBar;
