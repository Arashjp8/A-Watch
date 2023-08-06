import { movies } from "../data/movies";
import { tvShows } from "../data/tvShows";
import Carousel from "../components/Carousel";
import DropdownMenu from "../components/DropdownMenu";

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
    <>
      {/* {upcomingMovies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))} */}
      {/* <h2 className="my-10 text-5xl font-bold">Home</h2> */}
      <h3 className="mt-10 mb-0 text-3xl text-white/60 hover:text-white cursor-pointer font-light pb-3 border-b-[1px] border-white/60">
        Movies
      </h3>
      {/* <DropdownMenu /> */}
      <Carousel movies={movies} />
      <h3 className="mt-10 mb-0 text-3xl text-white/60 hover:text-white cursor-pointer font-light pb-3 border-b-[1px] border-white/60">
        Tv Shows
      </h3>
      {/* <DropdownMenu /> */}
      <Carousel tvShows={tvShows} />
    </>
  );
};

export default Home;
