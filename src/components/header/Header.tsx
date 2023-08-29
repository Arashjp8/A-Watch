import useSearchbarToggleStore from "./store";
import SearchBar from "../search/SearchBar";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { useSelectedIconStore } from "../sidebar/store";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { isSearchbarOpen, openSearchbar, closeSearchbar } =
    useSearchbarToggleStore();
  // const { isSidebarOpen, openSidebar } = useSidebarToggleStore();
  const { selectedIcon, setSelectedIcon } = useSelectedIconStore();

  // const renderSidebarButton = () => {
  //   if (!isSidebarOpen && !isSearchbarOpen) {
  //     return (
  //       <button
  //         className="relative mx-auto my-1 cursor-pointer rounded-3xl bg-blue-600 px-4 py-3 text-2xl text-white shadow-lg transition-all duration-150 ease-linear hover:rounded-xl hover:bg-white hover:text-blue-600"
  //         onClick={() => openSidebar()}
  //       >
  //         <AiOutlineMenu />
  //       </button>
  //     );
  //   }
  //   return null;
  // };

  const renderSearchbarButton = () => {
    if (!isSearchbarOpen) {
      return (
        <button
          className="relative mx-auto my-1 cursor-pointer rounded-3xl bg-blue-600 px-4 py-3 text-2xl text-white shadow-lg transition-all duration-150 ease-linear hover:rounded-xl hover:bg-white hover:text-blue-600"
          onClick={() => openSearchbar()}
        >
          <AiOutlineSearch />
        </button>
      );
    }
    return (
      <div className="absolute left-0 top-0 z-50 m-5 flex flex-col gap-5 sm:left-32">
        <button
          className="relative mx-auto my-1 cursor-pointer rounded-3xl bg-red-600 px-4 py-3 text-2xl text-white shadow-lg transition-all duration-150 ease-linear hover:rounded-xl hover:bg-white hover:text-red-600"
          onClick={() => closeSearchbar()}
        >
          <AiOutlineClose />
        </button>
        <SearchBar />
      </div>
    );
  };

  return (
    <header className="my-10 flex flex-row items-center justify-between">
      <NavLink to={"/"} onClick={() => setSelectedIcon("Home")}>
        <img
          src="/assets/logo.svg"
          alt="logo"
          className="block w-12 pb-1 md:hidden"
        />
      </NavLink>
      <h2
        className={`${
          isSearchbarOpen ? "opacity-20" : "opacity-100"
        } text-3xl font-bold md:text-5xl`}
      >
        {selectedIcon}
      </h2>
      <div className="hidden md:block">
        <SearchBar />
      </div>
      <div className="flex flex-row gap-5 md:hidden">
        {renderSearchbarButton()}
        {/* {renderSidebarButton()} */}
      </div>
    </header>
  );
};

export default Header;
