import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
      style={{ fontFamily: "Poppins" }}
      className="bg-slate-800 overflow-hidden flex flex-row flex-wrap justify-start gap-10 w-full h-full"
    >
      <SideBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
