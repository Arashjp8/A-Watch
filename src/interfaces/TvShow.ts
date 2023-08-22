import { Companies } from "./Companies";

export interface TvShow {
  id: number;
  name: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  first_air_date: string;
  media_type: string;
  production_companies: Companies[];
}
