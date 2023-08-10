import { AiOutlineClose } from "react-icons/ai";
import SidebarContent from "./SidebarContent";
import { useSidebarToggleStore } from "./store";

const SideBar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebarToggleStore();

  return (
    <>
      <aside className="bg-black text-white fixed top-0 left-0 z-50 h-screen w-16 m-0 pt-5 hidden md:flex flex-col justify-between items-center shadow-lg">
        <SidebarContent />
        <div className="sidebar-icons"></div>
      </aside>

      {isSidebarOpen && (
        <aside
          className={`bg-black text-white fixed top-0 left-0 z-50 h-screen w-16 m-0 pt-5 flex flex-col items-center shadow-lg`}
        >
          <SidebarContent />
          <button
            className="sidebar-icons rounded-3xl text-red-500 bg-gray-800 hover:bg-red-600 hover:text-white hover:rounded-xl"
            onClick={() => closeSidebar()}
          >
            <AiOutlineClose />
          </button>
        </aside>
      )}
    </>
  );
};

export default SideBar;
