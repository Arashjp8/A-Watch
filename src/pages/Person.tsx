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
    <>
      <CastAndCrewCard c={person} />
      <span>
        <h3>Biography: </h3>
        <p>{person?.biography}</p>
      </span>
    </>
  );
};

export default Person;
