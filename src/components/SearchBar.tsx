import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelectedIconStore } from "./sidebar/store";

const SearchBar = () => {
  const navigate = useNavigate();
  const { setSelectedIcon } = useSelectedIconStore();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSelectedIcon("Search");
        navigate("/search");
      }}
      className="flex flex-row items-center justify-between px-3 py-1 rounded-3xl bg-white text-lg"
    >
      <input
        type="text"
        className="shadow-lg border-2 border-blue-200 rounded-full px-6 py-2 mr-2 text-black w-[90%]"
        placeholder="Search for a movie or tv show..."
      />
      <button className="relative flex items-center justify-center my-1 mx-auto shadow-lg bg-blue-600 hover:bg-white text-white hover:text-blue-600 text-2xl py-3 px-4 transition-all duration-150 ease-linear cursor-pointer rounded-3xl hover:rounded-xl">
        <AiOutlineSearch />
      </button>
    </form>
  );
};

export default SearchBar;
