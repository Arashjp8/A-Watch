import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const MovieDetail = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    apiClient(`movie/${872585}`).then((response) => {
      setMovie(response.data);
    });
  }, []);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  return <div>movieDetail</div>;
};

export default MovieDetail;
