import { useState } from "react";
import Spinner from "../components/Spinner";
import CastAndCrewCard from "../components/castAndCrew/CastAndCrewCard";
import useCastAndCrewStore from "../components/castAndCrew/store";
import usePerson from "../hooks/usePerson";

const Person = () => {
  const [isExpand, setExpand] = useState(false);
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
    <div className="flex flex-row gap-10">
      <div className="flex flex-col items-center gap-5">
        <CastAndCrewCard
          c={person}
          imageSize="w-56 h-70"
          fontSize="text-[26px]"
        />
        <section className="flex flex-col gap-5">
          <span className="flex flex-row items-center gap-5 font-light">
            <h3 className="text-base ssm:text-lg font-semibold text-white/60">
              Known for:{" "}
            </h3>
            <p className="text-lg text-white">{person.known_for_department}</p>
          </span>
          <span className="flex flex-row items-center gap-5 font-light">
            <h3 className="text-base ssm:text-lg font-semibold text-white/60">
              Birthday:{" "}
            </h3>
            <p className="text-lg text-white">{person.birthday}</p>
          </span>
        </section>
      </div>
      <section className="">
        <h3 className="text-xl ssm:text-2xl text-white/60 cursor-pointer font-light pb-3">
          Biography:{" "}
        </h3>
        <p className="text-lg text-white font-light">
          {isExpand
            ? person?.biography
            : person?.biography.slice(0, 1000) + "..."}
          <button
            onClick={() => setExpand(!isExpand)}
            className="text-sm font-semibold my-2 px-4 py-2 rounded-3xl hover:rounded-xl transition-all duration-150 ease-linear flex flex-row gap-1 items-center text-white bg-blue-600 hover:bg-white hover:text-blue-600"
          >
            {isExpand ? "Show less" : "Show more"}
          </button>
        </p>
      </section>
    </div>
  );
};

export default Person;
