import React from "react";
import HorizontalScroll from "../components/HorizontalScroll";
import Section from "../components/Section";
import Spinner from "../components/Spinner";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularTvShows from "../hooks/usePopularTvShows";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTrendingTvShows from "../hooks/useTrendingTvShows";

const Home = () => {
  const sections = [
    {
      title: "Trending Movies",
      link: "/trending",
      fetchedData: useTrendingMovies(),
    },
    {
      title: "Trending Tv Shows",
      link: "/trending",
      fetchedData: useTrendingTvShows(),
    },
    {
      title: "Movies",
      link: "/movies",
      fetchedData: usePopularMovies(),
    },
    {
      title: "Tv Shows",
      link: "/tvshows",
      fetchedData: usePopularTvShows(),
    },
  ];

  return (
    <>
      {sections.map(({ title, link, fetchedData }) => {
        const { data: items, isLoading, error } = fetchedData;

        if (isLoading)
          return (
            <div key={title} className="h-[100vh]">
              <Spinner />
            </div>
          );

        if (error) return <p className="h-[100vh]">{error.message}</p>;

        return (
          <Section
            key={title}
            title={title}
            link={link}
            selectedIcon={title}
            content={items?.pages.slice(0, 1).map((page, index) => (
              <React.Fragment key={index}>
                <HorizontalScroll items={page?.results} />
              </React.Fragment>
            ))}
          />
        );
      })}
    </>
  );
};

export default Home;
