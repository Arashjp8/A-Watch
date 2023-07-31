import React from "react";
import { Movie } from "./Home";

interface Props {
  movie: Movie;
}
const MovieCard = ({ movie }: Props) => {
  return (
    <div
      key={movie.id}
      className="group bg-slate-500 w-60 flex flex-col items-center rounded-3xl"
    >
      <img
        src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
        alt="image"
        className="w-full h-70 rounded-t-3xl"
      />
      <p className="group-hover:scale-100 scale-0">{movie.title}</p>
    </div>
  );
};

export default MovieCard;
