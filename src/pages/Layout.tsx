import { useState } from "react";
import Footer from "../components/Footer";
import SideBar from "../components/sidebar/SideBar";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import useHeaderToggleStore from "../components/header/store";
import useSidebarToggleStore from "../components/sidebar/store";

const Layout = () => {
  const [selectedIcon, setSelectedIcon] = useState("Home");
  const { headerToggle } = useHeaderToggleStore();
  const { sidebarToggle } = useSidebarToggleStore();

  return (
    <div
      style={{ fontFamily: "Poppins" }}
      className="bg-slate-800 overflow-hidden flex flex-row gap-10 w-full h-full"
    >
      <SideBar selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} />
      <div
        className={`absolute top-0 md:left-9 left-0 w-[98%] md:pr-32 md:pl-40 px-10 bg-slate-800 text-white ${
          sidebarToggle ? "opacity-80" : "opacity-100"
        } overflow-hidden `}
      >
        <Header selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} />
        <main className={`${headerToggle ? "opacity-20" : "opacity-100"}`}>
          <Outlet />
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
