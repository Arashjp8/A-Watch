import SideBar from "../components/sidebar/SideBar";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import useSearchbarToggleStore from "../components/header/store";
import {
  useSelectedIconStore,
  useSidebarToggleStore,
} from "../components/sidebar/store";
import { useEffect } from "react";
import MobileNavbar from "../components/sidebar/MobileNavbar";

const Layout = () => {
  const isSearchbarOpen = useSearchbarToggleStore((s) => s.isSearchbarOpen);
  const isSidebarOpen = useSidebarToggleStore((s) => s.isSidebarOpen);

  const setSelectedIcon = useSelectedIconStore((s) => s.setSelectedIcon);
  const location = useLocation();

  const iconMappings: Record<string, string> = {
    "/search": "Search",
    "/trending": "Trending",
    "/watchlist": "Watchlist",
    "/movies": "Movies",
    "/tvshows": "Tv Shows",
  };

  useEffect(() => {
    const selectedIcon = Object.keys(iconMappings).find((path) =>
      location.pathname.includes(path),
    );

    setSelectedIcon(iconMappings[selectedIcon ?? ""] || "Home");
  }, [location]);

  return (
    <div
      style={{ fontFamily: "Poppins" }}
      className="flex h-full w-full flex-row gap-10 overflow-hidden bg-slate-800"
    >
      <SideBar />
      <div
        className={`absolute left-0 top-0 w-[100%] bg-slate-800 px-5 text-white md:px-0 md:pl-32 md:pr-16 ${
          isSidebarOpen ? "opacity-80" : "opacity-100"
        } overflow-hidden overflow-x-hidden `}
      >
        <Header />
        <main className={`${isSearchbarOpen ? "opacity-20" : "opacity-100"}`}>
          <Outlet />
        </main>
      </div>
      <MobileNavbar />
    </div>
  );
};

export default Layout;
