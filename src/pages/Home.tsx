import { movies } from "../data/movies";
import { tvShows } from "../data/tvShows";
import { Link } from "react-router-dom";
import { trendingMovies } from "../data/trendingMovies";
import HorizontalScroll from "../components/HorizontalScroll";
import { useSelectedIconStore } from "../components/sidebar/store";
import usePopularMovies from "../hooks/usePopularMovies";
import { useEffect } from "react";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export interface TvShow {
  id: number;
  name: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  first_air_date: string;
}

const Home = () => {
  const { data, isLoading, error } = usePopularMovies();

  useEffect(() => {
    console.log(data);
  }, [data]);

  const { setSelectedIcon } = useSelectedIconStore();

  return (
    <>
      <h3 className="mt-10 mb-0 text-3xl text-white/60 hover:text-white cursor-pointer font-light pb-3 border-b-[1px] border-white/60">
        <Link to="/movies" onClick={() => setSelectedIcon("Trending")}>
          Trending
        </Link>
      </h3>
      <HorizontalScroll movies={trendingMovies} />
      <h3 className="mt-10 mb-0 text-3xl text-white/60 hover:text-white cursor-pointer font-light pb-3 border-b-[1px] border-white/60">
        <Link to="/movies" onClick={() => setSelectedIcon("Movies")}>
          Movies
        </Link>
      </h3>
      <HorizontalScroll movies={data?.results} />
      <h3 className="mt-10 mb-0 text-3xl text-white/60 hover:text-white cursor-pointer font-light pb-3 border-b-[1px] border-white/60">
        <Link to="/tvshows" onClick={() => setSelectedIcon("Tv Shows")}>
          Tv Shows
        </Link>
      </h3>
      <HorizontalScroll tvShows={tvShows} />
    </>
  );
};

export default Home;
