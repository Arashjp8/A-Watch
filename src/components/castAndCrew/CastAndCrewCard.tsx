import { useNavigate } from "react-router-dom";
import { CastAndCrew } from "../../interfaces/Credits";
import useCastAndCrewStore from "./store";
import { Person } from "../../interfaces/Person";

interface Props {
  c?: CastAndCrew | Person;
  index?: number;
}
const CastAndCrewCard = ({ c, index }: Props) => {
  const navigate = useNavigate();
  const { changeSelectedCastAndCrewId } = useCastAndCrewStore();
  if (c)
    return (
      <div
        onClick={() => {
          changeSelectedCastAndCrewId(c.id);
          navigate(`/person/${c.id}`);
        }}
        className={`flex flex-col gap-5 ${
          index && index > 10 ? "hidden" : "inline"
        } cursor-pointer`}
      >
        <img
          src={`https://image.tmdb.org/t/p/w1280${c.profile_path}`}
          alt="profile-pic"
          onClick={() => console.log(c)}
          className="w-[150px] min-w-[150px] h-[220px] rounded-3xl hover:rounded-xl border-2 border-blue-500 hover:opacity-50 transition-all duration-150 ease-linear"
        />
        <p className={` text-white/80 text-2xl font-light`}>{c.name}</p>
      </div>
    );
  return <div></div>;
};

export default CastAndCrewCard;
