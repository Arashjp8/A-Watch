import HorizontalScroll from "../components/HorizontalScroll";
import Section from "../components/Section";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularTvShows from "../hooks/usePopularTvShows";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTrendingTvShows from "../hooks/useTrendingTvShows";

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
  const {
    data: movies,
    isLoading: movieIsLoading,
    error: movieError,
  } = usePopularMovies();

  const {
    data: tvShows,
    isLoading: tvShowsIsLoading,
    error: tvShowsError,
  } = usePopularTvShows();

  const {
    data: trendingMovies,
    isLoading: trendingMoviesIsLoading,
    error: trendingMoviesError,
  } = useTrendingMovies();

  const {
    data: trendingTvShows,
    isLoading: trendingTvShowsIsLoading,
    error: trendingTvShowsError,
  } = useTrendingTvShows();

  return (
    <>
      <Section
        title="Trending Movies"
        link="/trending"
        selectedIcon="Trending"
        content={<HorizontalScroll items={trendingMovies?.results} />}
      />
      <Section
        title="Trending Tv Shows"
        link="/trending"
        selectedIcon="Trending"
        content={<HorizontalScroll items={trendingTvShows?.results} />}
      />
      <Section
        title="Movies"
        link="/movies"
        selectedIcon="Movies"
        content={<HorizontalScroll items={movies?.results} />}
      />
      <Section
        title="Tv Shows"
        link="/tvshows"
        selectedIcon="Tv Shows"
        content={<HorizontalScroll items={tvShows?.results} />}
      />
    </>
  );
};

export default Home;
