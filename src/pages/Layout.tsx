import { useState } from "react";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  const [selectedIcon, setSelectedIcon] = useState("Home");
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [headerToggle, setHeaderToggle] = useState(false);

  return (
    <div
      style={{ fontFamily: "Poppins" }}
      className="bg-slate-800 overflow-hidden flex flex-row flex-wrap justify-start gap-10 w-full h-full"
    >
      <SideBar
        selectedIcon={selectedIcon}
        setSelectedIcon={setSelectedIcon}
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      <div
        className={`relative top-0 left-9 w-full px-32 bg-slate-800 text-white`}
      >
        <Header
          selectedIcon={selectedIcon}
          setSelectedIcon={setSelectedIcon}
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
          headerToggle={headerToggle}
          setHeaderToggle={setHeaderToggle}
        />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
