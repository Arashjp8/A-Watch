import { movies } from "../data/movies";
import DropdownMenu from "./DropdownMenu";
import MovieCard from "./MovieCard";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}
const Home = () => {
  // const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);

  // useEffect(() => {
  //   apiClient("discover/movie").then((response) => {
  //     setUpcomingMovies(response.data.results);
  //   });
  // }, []);

  // useEffect(() => {
  //   console.log(upcomingMovies);
  // }, [upcomingMovies]);
  return (
    <div className="relative top-0 left-9 w-full px-32 bg-slate-800 text-white">
      {/* {upcomingMovies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))} */}
      <h2 className="my-10 text-3xl font-bold">Home</h2>
      <DropdownMenu />
      <div className="grid grid-cols-6 gap-10 bg-slate-800">
        {movies.map((movie: Movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
