import useHeaderToggleStore from "../pages/store";
import SearchBar from "./SearchBar";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

interface Props {
  selectedIcon: string;
  setSelectedIcon: (value: string) => void;
  sidebarToggle: boolean;
  setSidebarToggle: (value: boolean) => void;
  // headerToggle: boolean;
  // setHeaderToggle: (value: boolean) => void;
}

const Header = ({
  selectedIcon,
  setSelectedIcon,
  sidebarToggle,
  setSidebarToggle,
}: Props) => {
  const { headerToggle, makeHeaderToggleTrue, makeHeaderToggleFalse } =
    useHeaderToggleStore();

  return (
    <>
      <div className="flex flex-row justify-between items-center my-10">
        <h2 className="text-5xl font-bold">{selectedIcon}</h2>
        <div className="hidden md:block">
          <SearchBar setSelectedIcon={setSelectedIcon} />
        </div>
        <div className="md:hidden flex flex-row gap-5">
          {!sidebarToggle && !headerToggle && (
            <button
              className="relative my-1 mx-auto shadow-lg bg-blue-600 hover:bg-white text-white hover:text-blue-600 text-2xl py-3 px-4 transition-all duration-150 ease-linear cursor-pointer rounded-3xl hover:rounded-xl"
              onClick={() => setSidebarToggle(true)}
            >
              <AiOutlineMenu />
            </button>
          )}
          {!headerToggle && (
            <button
              className="relative my-1 mx-auto shadow-lg bg-blue-600 hover:bg-white text-white hover:text-blue-600 text-2xl py-3 px-4 transition-all duration-150 ease-linear cursor-pointer rounded-3xl hover:rounded-xl"
              onClick={() => makeHeaderToggleTrue()}
            >
              <AiOutlineSearch />
            </button>
          )}
          {headerToggle && (
            <div className="flex flex-col gap-5 z-50 absolute top-0 left-0 sm:left-32 mx-5">
              <button
                className="relative my-1 mx-auto shadow-lg bg-red-600 hover:bg-white text-white hover:text-red-600 text-2xl py-3 px-4 transition-all duration-150 ease-linear cursor-pointer rounded-3xl hover:rounded-xl"
                onClick={() => makeHeaderToggleFalse()}
              >
                <AiOutlineClose />
              </button>
              <SearchBar setSelectedIcon={setSelectedIcon} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
