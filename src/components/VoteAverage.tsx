import { TvShow } from "../interfaces/TvShow";
import { Movie } from "../interfaces/Movie";

interface Props {
  data?: Movie | TvShow;
  style: string;
}
const VoteAverage = ({ data, style }: Props) => {
  if (data)
    return (
      <div
        className={`flex justify-center items-center bg-black/90 rounded-full ${style} border-2 ${
          data.vote_average * 10 > 70 ? "border-green-500" : "border-yellow-400"
        }  text-center font-semibold `}
      >
        <p
          className={`${
            data.vote_average * 10 > 70 ? "text-green-500" : "text-yellow-400"
          }`}
        >
          {Math.floor(data.vote_average * 10)}
        </p>
      </div>
    );
  return <div></div>;
};

export default VoteAverage;
