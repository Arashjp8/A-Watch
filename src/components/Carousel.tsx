import { useEffect, useState } from "react";
import { Movie, TvShow } from "../pages/Home";
import MovieCard from "./MovieCard";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

const Carousel = ({
  autoSlide = false,
  autoSlideInterval = 3000,
  movies,
  tvShows,
}: {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  movies?: Movie[];
  tvShows?: TvShow[] | any[];
}) => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    if (movies)
      setCurrent((current) =>
        current === 0 ? movies.length - 1 : current - 1
      );
    if (tvShows)
      setCurrent((current) =>
        current === 0 ? tvShows.length - 1 : current - 1
      );
  };
  const next = () => {
    if (movies)
      setCurrent((current) =>
        current === movies.length - 1 ? 0 : current + 1
      );
    if (tvShows)
      setCurrent((current) =>
        current === tvShows.length - 1 ? 0 : current + 1
      );
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative my-10">
      <div
        className="pl-5 grid grid-flow-col gap-12 bg-slate-800 transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {movies &&
          movies.map((movie: Movie, index) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              styleProp={index < 6 ? "grid-rows-1 col-span-1" : ""}
            />
          ))}
        {tvShows &&
          tvShows.map((tvShow: TvShow, index) => (
            <MovieCard
              tvShow={tvShow}
              key={tvShow.id}
              styleProp={index < 6 ? "grid-rows-1 col-span-1" : ""}
            />
          ))}
      </div>
      <div className="absoloute inset-0 flex items-center justify-center p-4 my-10">
        <button
          disabled={(movies && current === 0) || (tvShows && current === 0)}
          onClick={prev}
          className="disabled:opacity-25 p-1 rounded-full bg-transparent  border-blue-500 text-blue-500 hover:bg-blue-500/10 transition-all duration-300 ease-linear"
        >
          <TbChevronLeft size={30} />
        </button>

        <div className="absoloute bottom-4 right-0 left-0 mx-10">
          <div className="flex items-center justify-center gap-2">
            {movies &&
              movies.map((_, index) => (
                <div
                  key={index}
                  className={`
              transition-all duration-300 w-2 h-2 bg-blue-500 rounded-full
              ${current === index ? "p-2" : "bg-opacity-50"}
              `}
                />
              ))}
            {tvShows &&
              tvShows.map((_, index) => (
                <div
                  key={index}
                  className={`
              transition-all duration-300 w-2 h-2 bg-blue-500 rounded-full
              ${current === index ? "p-2" : "bg-opacity-50"}
              `}
                />
              ))}
          </div>
        </div>
        <button
          disabled={
            (movies && current === movies.length - 1) ||
            (tvShows && current === tvShows.length - 1)
          }
          onClick={next}
          className="disabled:opacity-25 p-1 rounded-full bg-transparent  border-blue-500 text-blue-500 hover:bg-blue-500/10 transition-all duration-300 ease-linear"
        >
          <TbChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
