import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{ fontFamily: "Poppins" }}
      className="bg-slate-800 overflow-hidden flex flex-row flex-wrap justify-start gap-10 w-full h-full"
    >
      <SideBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
