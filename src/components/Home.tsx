import { movies } from "../data/movies";
import { tvShows } from "../data/tvShows";
import Carousel from "./Carousel";
import DropdownMenu from "./DropdownMenu";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export interface TvShow {
  id: number;
  name: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  first_air_date: string;
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
      <h2 className="my-10 text-4xl font-bold">Home</h2>
      <h3 className="mt-10 mb-0 text-3xl text-white/60 font-normal pb-3 border-b-2 border-white/60">
        Movies
      </h3>
      {/* <DropdownMenu /> */}
      <Carousel movies={movies} />
      <h3 className="mt-10 mb-0 text-3xl text-white/60 font-normal pb-3 border-b-2 border-white/60">
        Tv Shows
      </h3>
      {/* <DropdownMenu /> */}
      <Carousel tvShows={tvShows} />
    </div>
  );
};

export default Home;
