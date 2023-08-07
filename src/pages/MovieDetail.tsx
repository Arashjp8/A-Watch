import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { Movie } from "./Home";
import MovieDetailHero from "../components/MovieDetailHero";
import VoteAverage from "../components/VoteAverage";
import CastAndCrewCard from "../components/CastAndCrewCard";
import { BaseUrl, apiKey } from "../services/config";

export interface Cast {
  name: string;
  id: number;
  profile_path: string;
  job: string;
}

const MovieDetail = () => {
  const [movie, setMovie] = useState<Movie>();
  const [cast, setCast] = useState<Cast[]>([]);
  const [crew, setCrew] = useState<Cast[]>([]);

  useEffect(() => {
    apiClient(`${BaseUrl}movie/872585?api_key=${apiKey}&language=en-US`).then(
      (response) => {
        setMovie(response.data);
      }
    );
  }, []);

  useEffect(() => {
    apiClient(
      `${BaseUrl}movie/872585/credits?api_key=${apiKey}&language=en-US`
    ).then((response) => {
      setCast(response.data.cast);
      setCrew(response.data.crew);
    });
  }, []);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  return (
    <div className="flex flex-col my-10 gap-10">
      <div className="relative w-full h-[60vh] bg-slate-800">
        <MovieDetailHero movie={movie} />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 items-start gap-20">
        <span>
          <h3 className="text-white text-3xl font-semibold mb-5">Overview: </h3>
          <p className="text-white/80 text-2xl font-light max-w-3xl">
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
          <h3 className="text-white text-3xl font-semibold mb-5">Director: </h3>
          <span className="grid grid-cols-6 grid-row-2 gap-10">
            {crew
              .filter((c) => c.job === "Director")
              .map((c, index) => (
                <CastAndCrewCard key={c.id} c={c} index={index} />
              ))}
          </span>
        </span>
        <span className="col-span-1 xl:col-span-2">
          <h3 className="text-white text-3xl font-semibold mb-5">Cast: </h3>
          <span className="grid grid-cols-1 sm:grid-cols-2 ssm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 grid-row-2 gap-10">
            {cast.map((c, index) => (
              <CastAndCrewCard key={c.id} c={c} index={index} />
            ))}
          </span>
        </span>
      </div>
    </div>
  );
};

export default MovieDetail;
