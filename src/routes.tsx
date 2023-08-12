import { createBrowserRouter } from "react-router-dom";
import ContentDetail from "./pages/ContentDetail";
import Contents from "./pages/Contents";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Search from "./pages/Search";
import WatchList from "./pages/WatchList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/trendingmovie", element: <Contents /> },
      { path: "/trendingtv", element: <Contents /> },
      { path: "/movies", element: <Contents /> },
      { path: "/tvshows", element: <Contents /> },
      { path: "/tvshows/:id", element: <ContentDetail /> },
      { path: "/movies/:id", element: <ContentDetail /> },
      { path: "/search", element: <Search /> },
      { path: "/watchlist", element: <WatchList /> },
    ],
  },
]);

export default router;
