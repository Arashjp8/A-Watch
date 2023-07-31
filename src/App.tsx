import { useEffect, useState } from "react";
import apiClient from "./services/apiClient";
import axios from "axios";

function App() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    apiClient("discover/movie").then((response) => {
      setUpcomingMovies(response.data.results);
    });
  }, []);

  useEffect(() => {
    console.log(upcomingMovies);
  }, [upcomingMovies]);
  return <></>;
}

export default App;
