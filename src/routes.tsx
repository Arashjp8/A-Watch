import { createBrowserRouter } from "react-router-dom";
import ContentDetail from "./pages/ContentDetail";
import Contents from "./pages/Contents";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Search from "./pages/Search";
import WatchList from "./pages/WatchList";
import Trending from "./pages/Trending";
import Person from "./pages/Person";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/trending/movies", element: <Contents /> },
      { path: "/trending/tvshows", element: <Contents /> },
      { path: "/trending", element: <Trending /> },
      { path: "/movies", element: <Contents /> },
      { path: "/tvshows", element: <Contents /> },
      { path: "/tvshows/:id", element: <ContentDetail /> },
      { path: "/movies/:id", element: <ContentDetail /> },
      { path: "/search", element: <Search /> },
      { path: "/watchlist", element: <WatchList /> },
      { path: "/person/:id", element: <Person /> },
    ],
  },
]);

export default router;
