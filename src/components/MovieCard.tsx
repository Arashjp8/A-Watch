import { Movie } from "./Home";

interface Props {
  movie: Movie;
}
const MovieCard = ({ movie }: Props) => {
  return (
    <div key={movie.id} className="group relative card overflow-hidden">
      <img
        src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
        alt="image"
        className="group-hover:scale-110 group-hover:rotate-3 overflow-hidden transition duration-300 ease-linear w-full  h-full rounded-3xl absoloute"
      />
      <div className="group-hover:scale-100 card-title transition-opacity">
        <p className="text-md font-bold  mt-10 text-center py-2 px-4">
          {movie.title}
        </p>
        <button className="bg-blue-700 text-white hover:bg-white hover:text-blue-600 font-medium transition-all duration-300 ease-linear text-md px-4 py-2 rounded-xl mb-10">
          See More
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
