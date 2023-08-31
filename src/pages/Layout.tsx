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
        className={`absolute left-0 top-0 w-[98%] bg-slate-800 px-3 text-white sm:px-10 md:left-9 md:pl-40 md:pr-32 ${
          isSidebarOpen ? "opacity-80" : "opacity-100"
        } overflow-hidden `}
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
