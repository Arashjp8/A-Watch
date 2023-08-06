import { AiOutlineFire, AiOutlineSearch } from "react-icons/ai";
import { TbBookmarks, TbDeviceTv, TbHome, TbMovie } from "react-icons/tb";

export const sidebarButtons = [
  { icon: <TbHome />, text: "Home", id: 70, path: "/" },
  { icon: <AiOutlineSearch />, text: "Search", id: 19, path: "/search" },
  { icon: <AiOutlineFire />, text: "Trending", id: 50, path: "/trending" },
  { icon: <TbMovie />, text: "Movies", id: 64, path: "/movies" },
  { icon: <TbDeviceTv />, text: "Tv Shows", id: 51, path: "/tvshows" },
  { icon: <TbBookmarks />, text: "Watchlist", id: 12, path: "/watchlist" },
];
