import React from "react";
import { movies } from "../movies";

interface Movie {
  id: number;
  title: string;
  overview: string;
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
      Home
      {movies.map((movie: Movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </>
  );
};

export default Home;
