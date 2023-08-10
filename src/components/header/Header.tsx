import useSearchbarToggleStore from "./store";
import SearchBar from "../SearchBar";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { useSelectedIconStore, useSidebarToggleStore } from "../sidebar/store";

const Header = () => {
  const { isSearchbarOpen, openSearchbar, closeSearchbar } =
    useSearchbarToggleStore();
  const { isSidebarOpen, openSidebar } = useSidebarToggleStore();
  const selectedIcon = useSelectedIconStore((s) => s.selectedIcon);

  const renderSidebarButton = () => {
    if (!isSidebarOpen && !isSearchbarOpen) {
      return (
        <button
          className="relative my-1 mx-auto shadow-lg bg-blue-600 hover:bg-white text-white hover:text-blue-600 text-2xl py-3 px-4 transition-all duration-150 ease-linear cursor-pointer rounded-3xl hover:rounded-xl"
          onClick={() => openSidebar()}
        >
          <AiOutlineMenu />
        </button>
      );
    }
    return null;
  };

  const renderSearchbarButton = () => {
    if (!isSearchbarOpen) {
      return (
        <button
          className="relative my-1 mx-auto shadow-lg bg-blue-600 hover:bg-white text-white hover:text-blue-600 text-2xl py-3 px-4 transition-all duration-150 ease-linear cursor-pointer rounded-3xl hover:rounded-xl"
          onClick={() => openSearchbar()}
        >
          <AiOutlineSearch />
        </button>
      );
    }
    return (
      <div className="flex flex-col gap-5 z-50 absolute top-0 left-0 sm:left-32 m-5">
        <button
          className="relative my-1 mx-auto shadow-lg bg-red-600 hover:bg-white text-white hover:text-red-600 text-2xl py-3 px-4 transition-all duration-150 ease-linear cursor-pointer rounded-3xl hover:rounded-xl"
          onClick={() => closeSearchbar()}
        >
          <AiOutlineClose />
        </button>
        <SearchBar />
      </div>
    );
  };

  return (
    <header className="flex flex-row justify-between items-center my-10">
      <h2
        className={`${
          isSearchbarOpen ? "opacity-20" : "opacity-100"
        } text-5xl font-bold`}
      >
        {selectedIcon}
      </h2>
      <div className="hidden md:block">
        <SearchBar />
      </div>
      <div className="md:hidden flex flex-row gap-5">
        {renderSidebarButton()}
        {renderSearchbarButton()}
      </div>
    </header>
  );
};

export default Header;
