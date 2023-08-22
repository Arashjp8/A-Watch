import { Companies } from "./Companies";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  media_type: string;
  production_companies: Companies[];
}
