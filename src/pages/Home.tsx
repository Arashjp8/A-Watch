import React from "react";
import HorizontalScroll from "../components/HorizontalScroll";
import Section from "../components/Section";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularTvShows from "../hooks/usePopularTvShows";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTrendingTvShows from "../hooks/useTrendingTvShows";

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
        content={trendingMovies?.pages.slice(0, 1).map((page, index) => (
          <React.Fragment key={index}>
            <HorizontalScroll
              items={page?.results}
              isLoading={trendingMoviesIsLoading}
              error={trendingMoviesError}
            />
          </React.Fragment>
        ))}
      />
      <Section
        title="Trending Tv Shows"
        link="/trending"
        selectedIcon="Trending"
        content={trendingTvShows?.pages.slice(0, 1).map((page, index) => (
          <React.Fragment key={index}>
            <HorizontalScroll
              items={page?.results}
              isLoading={trendingTvShowsIsLoading}
              error={trendingTvShowsError}
            />
          </React.Fragment>
        ))}
      />
      <Section
        title="Movies"
        link="/movies"
        selectedIcon="Movies"
        content={movies?.pages.slice(0, 1).map((page, index) => (
          <React.Fragment key={index}>
            <HorizontalScroll
              items={page?.results}
              isLoading={movieIsLoading}
              error={movieError}
            />
          </React.Fragment>
        ))}
      />
      <Section
        title="Tv Shows"
        link="/tvshows"
        selectedIcon="Tv Shows"
        content={tvShows?.pages.slice(0, 1).map((page, index) => (
          <React.Fragment key={index}>
            <HorizontalScroll
              items={page?.results}
              isLoading={tvShowsIsLoading}
              error={tvShowsError}
            />
          </React.Fragment>
        ))}
      />
    </>
  );
};

export default Home;
