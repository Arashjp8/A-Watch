import Spinner from "../components/Spinner";
import CastAndCrewCard from "../components/castAndCrew/CastAndCrewCard";
import useCastAndCrewStore from "../components/castAndCrew/store";
import usePerson from "../hooks/usePerson";

const Person = () => {
  const { selectedCastAndCrewId } = useCastAndCrewStore();
  const { data: person, isLoading, error } = usePerson(selectedCastAndCrewId);

  if (error) return <p className="h-[100vh]">{error.message}</p>;

  if (isLoading)
    return (
      <div className="h-[100vh]">
        <Spinner />
      </div>
    );

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row justify-between items-center">
        <CastAndCrewCard c={person} imageSize="w-56 h-70" fontSize="text-3xl" />
        <section className="flex flex-col gap-5">
          <span className="flex flex-row items-center gap-5 font-light">
            <h3 className="text-xl ssm:text-2xl text-white/60">Known for: </h3>
            <p className="text-lg text-white">{person.known_for_department}</p>
          </span>
          <span className="flex flex-row items-center gap-5 font-light">
            <h3 className="text-xl ssm:text-2xl text-white/60">Birthday: </h3>
            <p className="text-lg text-white">{person.birthday}</p>
          </span>
          <span className="flex flex-row items-center gap-5 font-light">
            <h3 className="text-xl ssm:text-2xl text-white/60">
              Place of birth:{" "}
            </h3>
            <p className="text-lg text-white">{person.place_of_birth}</p>
          </span>
        </section>
      </div>
      <span className="">
        <h3 className="text-xl ssm:text-2xl text-white/60 cursor-pointer font-light pb-3">
          Biography:{" "}
        </h3>
        <p className="text-lg text-white font-light">{person?.biography}</p>
      </span>
    </div>
  );
};

export default Person;
