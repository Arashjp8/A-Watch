import { AiOutlineClose } from "react-icons/ai";
import SidebarContent from "./SidebarContent";
import { useSidebarToggleStore } from "./store";

const SideBar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebarToggleStore();

  return (
    <>
      <aside className="fixed left-0 top-0 z-50 m-0 hidden h-screen w-16 flex-col items-center justify-between bg-black pt-5 text-white shadow-lg md:flex">
        <SidebarContent />
        <div className="sidebar-icons"></div>
      </aside>

      {isSidebarOpen && (
        <aside
          className={`fixed left-0 top-0 z-50 m-0 flex h-screen w-16 flex-col items-center bg-black pt-5 text-white shadow-lg`}
        >
          <SidebarContent />
          <button
            className="sidebar-icons rounded-3xl bg-red-600 text-white hover:rounded-xl"
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
