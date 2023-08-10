import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { Movie } from "./Home";
import MovieDetailHero from "../components/movie/MovieDetailHero";
import VoteAverage from "../components/VoteAverage";
import CastAndCrewCard from "../components/CastAndCrewCard";
import { BaseUrl, apiKey } from "../services/config";
import MovieInfo from "../components/movie/MovieInfo";
import useSelectedMovieId from "../components/movie/store";

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
  const selectedMovieId = useSelectedMovieId((s) => s.selectedMovieId);

  useEffect(() => {
    apiClient(
      `${BaseUrl}movie/${selectedMovieId}?api_key=${apiKey}&language=en-US`
    ).then((response) => {
      setMovie(response.data);
    });
  }, []);

  useEffect(() => {
    apiClient(
      `${BaseUrl}movie/${selectedMovieId}/credits?api_key=${apiKey}&language=en-US`
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
        <MovieInfo
          title="Overview"
          content={
            <p className="text-white/80 text-2xl font-light max-w-3xl">
              {movie?.overview}
            </p>
          }
        />
        <MovieInfo title="Rating" content={<VoteAverage data={movie} />} />
        <MovieInfo
          title="Release Date"
          content={
            <p className="text-white/80 text-2xl font-light">
              {movie?.release_date}
            </p>
          }
        />
        <MovieInfo
          title="Director"
          content={
            <span className="grid grid-cols-6 grid-row-2 gap-10">
              {crew
                .filter((c) => c.job === "Director")
                .map((c, index) => (
                  <CastAndCrewCard key={c.id} c={c} index={index} />
                ))}
            </span>
          }
        />
        <MovieInfo
          title="Cast"
          content={
            <span className="grid grid-cols-1 sm:grid-cols-2 ssm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 grid-row-2 gap-10">
              {cast.map((c, index) => (
                <CastAndCrewCard key={c.id} c={c} index={index} />
              ))}
            </span>
          }
        />
      </div>
    </div>
  );
};

export default MovieDetail;
