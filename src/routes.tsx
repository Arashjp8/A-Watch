import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import Search from "./pages/Search";
import Trending from "./pages/Trending";
import WatchList from "./pages/WatchList";
import TvShows from "./pages/TvShows";
import Movies from "./pages/Movies";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/search", element: <Search /> },
      { path: "/trending", element: <Trending /> },
      { path: "/watchlist", element: <WatchList /> },
      { path: "/movies", element: <Movies /> },
      { path: "/tvshows", element: <TvShows /> },
    ],
  },
]);

export default router;
