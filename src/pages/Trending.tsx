import React from "react";
import Spinner from "../components/Spinner";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTrendingTvShows from "../hooks/useTrendingTvShows";
import HorizontalScroll from "../components/HorizontalScroll";
import Section from "../components/Section";

const Trending = () => {
  const sections = [
    {
      title: "Trending Movies",
      link: "/trending/movies",
      hookResponse: useTrendingMovies(),
    },
    {
      title: "Trending Tv Shows",
      link: "/trending/tvshows",
      hookResponse: useTrendingTvShows(),
    },
  ];
  return (
    <>
      {sections.map(({ title, link, hookResponse }) => {
        const { data: items, isLoading, error } = hookResponse;
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

export default Trending;
