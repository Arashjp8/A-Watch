export interface Credits {
  cast: CastAndCrew[];
  crew: CastAndCrew[];
}

export interface CastAndCrew {
  id: number;
  name: string;
  known_for_department: string;
  job: string;
  profile_path: string;
}
