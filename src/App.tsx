import SideBar from "./components/SideBar";
import Home from "./components/Home";

function App() {
  return (
    <div
      style={{ fontFamily: "Poppins" }}
      className="flex flex-row flex-wrap justify-start gap-10 w-full h-full"
    >
      <SideBar />
      <Home />
    </div>
  );
}

export default App;
