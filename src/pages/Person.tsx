import CastAndCrewCard from "../components/castAndCrew/CastAndCrewCard";
import useCastAndCrewStore from "../components/castAndCrew/store";
import usePerson from "../hooks/usePerson";

const Person = () => {
  const { selectedCastAndCrewId } = useCastAndCrewStore();
  const { data: person, isLoading, error } = usePerson(selectedCastAndCrewId);

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
