import { useNavigate } from "react-router-dom";
import { CastAndCrew } from "../../interfaces/Credits";
import useCastAndCrewStore from "./store";
import { Person } from "../../interfaces/Person";
import ImageComponent from "../ImageComponent";

interface Props {
  c?: CastAndCrew | Person;
  index?: number;
  imageSize: string;
  fontSize: string;
  cursor?: string;
  onHover?: string;
  isName: boolean;
}
const CastAndCrewCard = ({
  c,
  index,
  imageSize,
  fontSize,
  cursor,
  onHover,
  isName,
}: Props) => {
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
        } ${cursor}`}
      >
        <ImageComponent
          src={`https://image.tmdb.org/t/p/w200${c.profile_path}`}
          alt={c.name}
          className={`${imageSize} rounded-3xl ${onHover} border-2 border-blue-500 transition-all duration-150 ease-linear`}
        />
        {isName && (
          <p className={`text-white/80 ${fontSize} font-light`}>{c.name}</p>
        )}
      </div>
    );
  return <div></div>;
};

export default CastAndCrewCard;
