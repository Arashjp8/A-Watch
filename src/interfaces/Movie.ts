import { Companies } from "./Companies";
import { Genre } from "./Genre";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  media_type: string;
  genres: Genre[];
  production_companies: Companies[];
  status: string;
}
