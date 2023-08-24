import { useState } from "react";
import Spinner from "../components/Spinner";
import CastAndCrewCard from "../components/castAndCrew/CastAndCrewCard";
import useCastAndCrewStore from "../components/castAndCrew/store";
import usePerson from "../hooks/usePerson";
import usePersonMovie from "../hooks/usePersonMovie";
import HorizontalScroll from "../components/HorizontalScroll";
import Section from "../components/Section";
import usePersonTvShows from "../hooks/usePersonTvShows";

const Person = () => {
  const [isExpand, setExpand] = useState(false);
  const { selectedCastAndCrewId } = useCastAndCrewStore();
  const {
    data: person,
    isLoading: isPersonLoading,
    error: personError,
  } = usePerson(selectedCastAndCrewId);
  const {
    data: movies,
    isLoading: isMoviesLoading,
    error: moviesError,
  } = usePersonMovie(selectedCastAndCrewId);
  const {
    data: tvShows,
    isLoading: isTvShowsLoading,
    error: tvShowsError,
  } = usePersonTvShows(selectedCastAndCrewId);

  if (personError || moviesError || tvShowsError)
    return (
      <p className="h-[100vh]">
        {personError
          ? personError.message
          : moviesError
          ? moviesError?.message
          : tvShowsError?.message}
      </p>
    );

  if (isPersonLoading || isMoviesLoading || isTvShowsLoading)
    return (
      <div className="h-[100vh]">
        <Spinner />
      </div>
    );

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-10">
        <div className="flex flex-col items-center gap-5">
          <CastAndCrewCard
            c={person}
            imageSize="w-56 h-70"
            fontSize="text-[26px]"
          />
          <section className="flex flex-col gap-5">
            <span className="flex flex-row items-center gap-5 font-light">
              <h3 className="text-base font-semibold text-white/60 ssm:text-lg">
                Known for:{" "}
              </h3>
              <p className="text-lg text-white">
                {person.known_for_department}
              </p>
            </span>
            <span className="flex flex-row items-center gap-5 font-light">
              <h3 className="text-base font-semibold text-white/60 ssm:text-lg">
                Birthday:{" "}
              </h3>
              <p className="text-lg text-white">{person.birthday}</p>
            </span>
          </section>
        </div>
        <section className="">
          <h3 className="cursor-pointer pb-3 text-xl font-light text-white/60 ssm:text-2xl">
            Biography:{" "}
          </h3>
          <p className="text-lg font-light text-white">
            {isExpand
              ? person?.biography
              : person?.biography.length > 1000
              ? person?.biography.slice(0, 1000) + "..."
              : person?.biography}
            <button
              onClick={() => setExpand(!isExpand)}
              className={`${
                person?.biography.length > 1000 ? "block" : "hidden"
              } my-2 flex flex-row items-center gap-1 rounded-3xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-150 ease-linear hover:rounded-xl hover:bg-white hover:text-blue-600`}
            >
              {isExpand ? "Show less" : "Show more"}
            </button>
          </p>
        </section>
      </div>
      <Section
        title="Movies"
        link=""
        selectedIcon=""
        content={<HorizontalScroll items={movies?.cast} title="Movies" />}
      />
      <Section
        title="Tv Shows"
        link=""
        selectedIcon=""
        content={<HorizontalScroll items={tvShows?.cast} title="Tv Shows" />}
      />
    </div>
  );
};

export default Person;
