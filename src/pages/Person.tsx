import { useEffect } from "react";
import Spinner from "../components/Spinner";
import CastAndCrewCard from "../components/castAndCrew/CastAndCrewCard";
import useCastAndCrewStore from "../components/castAndCrew/store";
import usePerson from "../hooks/usePerson";
import usePersonMovie from "../hooks/usePersonMovie";
import HorizontalScroll from "../components/HorizontalScroll";
import Section from "../components/Section";
import usePersonTvShows from "../hooks/usePersonTvShows";
import PersonalInfoSection from "../components/PersonalInfo/PersonalInfoSection";
import BiographySection from "../components/PersonalInfo/BiographySection";

const Person = () => {
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
    <div className="flex flex-col gap-10 sm:flex-row">
      <div className="flex flex-col items-center gap-5">
        <CastAndCrewCard
          c={person}
          imageSize="w-40 sm:w-56 sm:h-70"
          fontSize="text-[26px]"
          isName={false}
        />
        <PersonalInfoSection person={person} mobileView={false} />
        <p
          className={`block text-center text-2xl font-semibold text-white/80 sm:hidden sm:text-left md:text-3xl`}
        >
          {person.name}
        </p>
      </div>
      <div className="flex w-[90%] flex-col gap-8 p-0 sm:pr-20">
        <p
          className={`hidden text-center text-2xl font-semibold text-white/80 sm:block sm:text-left md:text-3xl`}
        >
          {person.name}
        </p>
        <PersonalInfoSection person={person} mobileView={true} />
        <BiographySection biography={person.biography} />
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
  );
};

export default Person;
