import SideBar from "./components/SideBar";
import Home from "./components/Home";

function App() {
  return (
    <div className="flex flex-row flex-wrap justify-start gap-10">
      <SideBar />
      {/* <Home /> */}
    </div>
  );
}

export default App;
