import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { Movie } from "./Home";
import MovieDetailHero from "../components/MovieDetailHero";
import VoteAverage from "../components/VoteAverage";
import CastCard from "../components/CastCard";

export interface Cast {
  name: string;
  id: number;
  profile_path: string;
}

const MovieDetail = () => {
  const [movie, setMovie] = useState<Movie>();
  const [cast, setCast] = useState<Cast[]>([]);

  useEffect(() => {
    apiClient(
      `https://api.themoviedb.org/3/movie/872585?api_key=9bea273ec3cc99de5d3fd85578d2b0ed&language=en-US`
    ).then((response) => {
      setMovie(response.data);
    });
  }, []);

  useEffect(() => {
    apiClient(
      `https://api.themoviedb.org/3/movie/872585/credits?api_key=9bea273ec3cc99de5d3fd85578d2b0ed&language=en-US`
    ).then((response) => {
      setCast(response.data.cast);
    });
  }, []);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  return (
    <div className="flex flex-col">
      <div className="relative w-full h-[60vh] bg-slate-800">
        <MovieDetailHero movie={movie} />
      </div>
      <div className="grid grid-cols-2 items-start gap-20">
        <span>
          <h3 className="text-white text-3xl font-semibold mb-5">Overview: </h3>
          <p className="text-white/80 text-2xl font-light">
            {" "}
            {movie?.overview}
          </p>
        </span>
        <span>
          <h3 className="text-white text-3xl font-semibold mb-5">Rating: </h3>
          <VoteAverage movie={movie} />
        </span>
        <span>
          <h3 className="text-white text-3xl font-semibold mb-5">
            Release Date:{" "}
          </h3>
          <p className="text-white/80 text-2xl font-light">
            {movie?.release_date}
          </p>
        </span>
        <span>
          <h3 className="text-white text-3xl font-semibold mb-5">Cast: </h3>
          <span className="grid grid-cols-6 grid-row-2 gap-10 ">
            {cast.map((c, index) => (
              <CastCard c={c} index={index} />
            ))}
          </span>
        </span>
      </div>
    </div>
  );
};

export default MovieDetail;
