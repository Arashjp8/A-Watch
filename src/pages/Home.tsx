import React from "react";
import HorizontalScroll from "../components/HorizontalScroll";
import Section from "../components/Section";
import Spinner from "../components/Spinner";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularTvShows from "../hooks/usePopularTvShows";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTrendingTvShows from "../hooks/useTrendingTvShows";

const Home = () => {
  const {
    data: movies,
    isLoading: moviesIsLoading,
    error: moviesError,
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

  if (
    moviesIsLoading ||
    tvShowsIsLoading ||
    trendingMoviesIsLoading ||
    trendingTvShowsIsLoading
  )
    return (
      <div className="h-[100vh]">
        <Spinner />
      </div>
    );

  if (
    moviesError ||
    tvShowsError ||
    trendingMoviesError ||
    trendingTvShowsError
  )
    return (
      <p className="h-[100vh]">
        {moviesError?.message ||
          tvShowsError?.message ||
          trendingMoviesError?.message ||
          trendingTvShowsError?.message}
      </p>
    );

  return (
    <>
      <Section
        title="Trending Movies"
        link="/trending"
        selectedIcon="Trending"
        content={trendingMovies?.pages.slice(0, 1).map((page, index) => (
          <React.Fragment key={index}>
            <HorizontalScroll items={page?.results} />
          </React.Fragment>
        ))}
      />
      <Section
        title="Trending Tv Shows"
        link="/trending"
        selectedIcon="Trending"
        content={trendingTvShows?.pages.slice(0, 1).map((page, index) => (
          <React.Fragment key={index}>
            <HorizontalScroll items={page?.results} />
          </React.Fragment>
        ))}
      />
      <Section
        title="Movies"
        link="/movies"
        selectedIcon="Movies"
        content={movies?.pages.slice(0, 1).map((page, index) => (
          <React.Fragment key={index}>
            <HorizontalScroll items={page?.results} />
          </React.Fragment>
        ))}
      />
      <Section
        title="Tv Shows"
        link="/tvshows"
        selectedIcon="Tv Shows"
        content={tvShows?.pages.slice(0, 1).map((page, index) => (
          <React.Fragment key={index}>
            <HorizontalScroll items={page?.results} />
          </React.Fragment>
        ))}
      />
    </>
  );
};

export default Home;
