import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

interface Props {
  setSelectedIcon: (value: string) => void;
}

const SearchBar = ({ setSelectedIcon }: Props) => {
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSelectedIcon("Search");
        navigate("/search");
      }}
      className="flex flex-row items-center justify-between px-3 py-1 rounded-3xl bg-white text-black"
    >
      <AiOutlineSearch />
      <input
        type="text"
        className="py-2 mx-2"
        placeholder="Search for a movie or tv show..."
      />
      <button className="relative flex items-center justify-center my-1 mx-auto shadow-lg bg-blue-600 hover:bg-white text-white hover:text-blue-600 py-2 px-4 transition-all duration-150 ease-linear cursor-pointer rounded-3xl hover:rounded-xl">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
