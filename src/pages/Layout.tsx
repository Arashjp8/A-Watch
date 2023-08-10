import { useState } from "react";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import useHeaderToggleStore from "./store";

const Layout = () => {
  const [selectedIcon, setSelectedIcon] = useState("Home");
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const { headerToggle } = useHeaderToggleStore();

  return (
    <div
      style={{ fontFamily: "Poppins" }}
      className="bg-slate-800 overflow-hidden flex flex-row gap-10 w-full h-full"
    >
      <SideBar
        selectedIcon={selectedIcon}
        setSelectedIcon={setSelectedIcon}
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      <main
        className={`absolute top-0 md:left-9 left-0 w-[98%] md:pr-32 md:pl-40 px-10 bg-slate-800 text-white ${
          sidebarToggle ? "opacity-80" : "opacity-100"
        } overflow-hidden `}
      >
        <Header
          selectedIcon={selectedIcon}
          setSelectedIcon={setSelectedIcon}
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
          // headerToggle={headerToggle}
          // setHeaderToggle={setHeaderToggle}
        />
        <div className={`${headerToggle ? "opacity-20" : "opacity-100"}`}>
          <Outlet />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
