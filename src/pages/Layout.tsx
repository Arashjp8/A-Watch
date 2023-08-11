import SideBar from "../components/sidebar/SideBar";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import useSearchbarToggleStore from "../components/header/store";
import { useSidebarToggleStore } from "../components/sidebar/store";

const Layout = () => {
  const isSearchbarOpen = useSearchbarToggleStore((s) => s.isSearchbarOpen);
  const isSidebarOpen = useSidebarToggleStore((s) => s.isSidebarOpen);

  return (
    <div
      style={{ fontFamily: "Poppins" }}
      className="bg-slate-800 overflow-hidden flex flex-row gap-10 w-full h-full"
    >
      <SideBar />
      <div
        className={`absolute top-0 md:left-9 left-0 w-[98%] md:pr-32 md:pl-40 px-10 bg-slate-800 text-white ${
          isSidebarOpen ? "opacity-80" : "opacity-100"
        } overflow-hidden `}
      >
        <Header />
        <main className={`${isSearchbarOpen ? "opacity-20" : "opacity-100"}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
