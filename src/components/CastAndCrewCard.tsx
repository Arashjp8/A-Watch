import { Cast } from "../pages/MovieDetail";

interface Props {
  c: Cast;
  index?: number;
}
const CastAndCrewCard = ({ c, index }: Props) => {
  return (
    <div
      className={`flex flex-col gap-5 ${
        index && index > 10 ? "hidden" : "inline"
      } cursor-pointer`}
    >
      <img
        src={`https://image.tmdb.org/t/p/w1280${c.profile_path}`}
        alt="profile-pic"
        onClick={() => console.log(c)}
        className="w-[150px] min-w-[150px] rounded-3xl hover:rounded-xl border-2 border-blue-500 hover:opacity-50 transition-all duration-150 ease-linear"
      />
      <p className={` text-white/80 text-2xl font-light`}>{c.name}</p>
    </div>
  );
};

export default CastAndCrewCard;
