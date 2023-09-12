import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelectedIconStore } from "../sidebar/store";
import useSearchbarToggleStore from "../header/store";
import useSearchQuery from "./store";
import { useRef, useState } from "react";

const SearchBar = () => {
  const navigate = useNavigate();
  const { setSelectedIcon } = useSelectedIconStore();
  const { closeSearchbar } = useSearchbarToggleStore();
  const { changeSearchQuery } = useSearchQuery();

  const ref = useRef<HTMLInputElement>(null);
  const [text, setText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          setSelectedIcon("Search");
          closeSearchbar();
          changeSearchQuery(ref.current.value);
          navigate("/search");
        }
      }}
      className="flex flex-row items-center justify-between rounded-full border-2 border-white/20 bg-slate-800 px-3 py-1 text-lg"
    >
      {text.length > 0 ? (
        <button
          type="button"
          onClick={() => setText("")}
          className="relative mx-auto my-1 ml-2 mr-2 flex cursor-pointer items-center justify-center text-2xl text-white/80"
        >
          <AiOutlineClose />
        </button>
      ) : (
        ""
      )}
      <input
        ref={ref}
        type="text"
        placeholder="Search..."
        className="ml-2 mr-4 w-[90%] rounded-full border-none border-blue-200 bg-transparent px-6 py-2 text-white"
        onChange={(event) => setText(event?.target.value)}
        value={text}
      />
      <button className="relative mx-auto my-1 flex cursor-pointer items-center justify-center rounded-3xl bg-blue-600 px-3 py-3 text-2xl text-white shadow-lg transition-all duration-150 ease-linear hover:rounded-xl hover:bg-white hover:text-blue-600">
        <AiOutlineSearch />
      </button>
    </form>
  );
};

export default SearchBar;
