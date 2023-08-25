import { useEffect, useState } from "react";
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
    data: fetchedMovies,
    isLoading: isMoviesLoading,
    error: moviesError,
  } = usePersonMovie(selectedCastAndCrewId);
  const {
    data: fetchedTvShows,
    isLoading: isTvShowsLoading,
    error: tvShowsError,
  } = usePersonTvShows(selectedCastAndCrewId);

  const movies =
    person?.known_for_department === "Acting"
      ? fetchedMovies?.cast
      : fetchedMovies?.crew;
  const tvShows =
    person?.known_for_department === "Acting"
      ? fetchedTvShows?.cast
      : fetchedTvShows?.crew;

  const gender = person?.gender === 1 ? "Female" : "Male";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div className="flex flex-col gap-10 sm:flex-row">
        <div className="flex flex-col items-center gap-5">
          <CastAndCrewCard
            c={person}
            imageSize="w-56 h-70"
            fontSize="text-[26px]"
            isName={false}
          />
          <section className="hidden flex-col gap-1 sm:flex">
            <h3 className="pb-3 text-xl font-light text-white/60 ssm:text-2xl">
              Personal Info
            </h3>
            <div className="flex flex-col gap-5">
              <div className="flex min-w-[200px] flex-col items-start gap-1 font-light">
                <h3 className="text-base font-semibold text-white/60 ssm:text-lg">
                  Known for:{" "}
                </h3>
                <p className="text-lg text-white">
                  {person.known_for_department}
                </p>
              </div>
              <div className="flex min-w-[200px] flex-col items-start gap-1 font-light">
                <h3 className="text-base font-semibold text-white/60 ssm:text-lg">
                  Birthday:{" "}
                </h3>
                <p className="text-lg text-white">{person.birthday}</p>
              </div>
              <div className="flex min-w-[200px] flex-col items-start gap-1 font-light">
                <h3 className="text-base font-semibold text-white/60 ssm:text-lg">
                  Gender:{" "}
                </h3>
                <p className="text-lg text-white">{gender}</p>
              </div>
              <div className="flex min-w-[200px] flex-col items-start gap-1 font-light">
                <h3 className="text-base font-semibold text-white/60 ssm:text-lg">
                  Place Of Birth:{" "}
                </h3>
                <p className="text-lg text-white">{person.place_of_birth}</p>
              </div>
            </div>
          </section>
        </div>
        <div className="flex w-[90%] flex-col gap-8 p-0 sm:pr-20">
          <p className={`text-2xl font-semibold text-white/80 md:text-3xl`}>
            {person.name}
          </p>
          <section className="flex flex-col gap-2 sm:hidden">
            <h3 className="pb-3 text-xl font-light text-white/60 ssm:text-2xl">
              Personal Info
            </h3>
            <div className="flex flex-col gap-5">
              <div className="flex min-w-[200px] flex-col items-start gap-1 font-light">
                <h3 className="text-base font-semibold text-white/60 ssm:text-lg">
                  Known for:{" "}
                </h3>
                <p className="text-lg text-white">
                  {person.known_for_department}
                </p>
              </div>
              <div className="flex min-w-[200px] flex-col items-start gap-1 font-light">
                <h3 className="text-base font-semibold text-white/60 ssm:text-lg">
                  Birthday:{" "}
                </h3>
                <p className="text-lg text-white">{person.birthday}</p>
              </div>
              <div className="flex min-w-[200px] flex-col items-start gap-1 font-light">
                <h3 className="text-base font-semibold text-white/60 ssm:text-lg">
                  Gender:{" "}
                </h3>
                <p className="text-lg text-white">{gender}</p>
              </div>
              <div className="flex min-w-[200px] flex-col items-start gap-1 font-light">
                <h3 className="text-base font-semibold text-white/60 ssm:text-lg">
                  Place Of Birth:{" "}
                </h3>
                <p className="text-lg text-white">{person.place_of_birth}</p>
              </div>
            </div>
          </section>
          <section className="">
            <h3 className="pb-3 text-xl font-light text-white/60 ssm:text-2xl">
              Biography:{" "}
            </h3>
            <p className="text-lg font-light text-white">
              {isExpand
                ? person?.biography
                : person?.biography.length > 500
                ? person?.biography.slice(0, 500) + "..."
                : person?.biography}
              <button
                onClick={() => setExpand(!isExpand)}
                className={`${
                  person?.biography.length > 500 ? "block" : "hidden"
                } my-2 flex flex-row items-center gap-1 rounded-3xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-150 ease-linear hover:rounded-xl hover:bg-white hover:text-blue-600`}
              >
                {isExpand ? "Show less" : "Show more"}
              </button>
            </p>
          </section>
          {movies && movies.length > 0 && (
            <Section
              title="Movies"
              link=""
              selectedIcon=""
              numberOfItems={movies.length}
              content={<HorizontalScroll items={movies} title="Movies" />}
            />
          )}
          {tvShows && tvShows.length > 0 && (
            <Section
              title="Tv Shows"
              link=""
              selectedIcon=""
              numberOfItems={tvShows.length}
              content={<HorizontalScroll items={tvShows} title="Tv Shows" />}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Person;
