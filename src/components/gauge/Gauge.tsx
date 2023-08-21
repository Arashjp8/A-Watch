import { Movie } from "../../interfaces/Movie";
import { TvShow } from "../../interfaces/TvShow";

interface Props {
  data?: Movie | TvShow;
  size: string;
}
const Gauge = ({ data, size }: Props) => {
  const voteAverage = data?.vote_average
    ? Math.floor(data.vote_average * 10)
    : 0;

  const numberFontSize =
    size === "w-14 h-14 text-xl"
      ? 17
      : size === "w-10 h-10 xl:w-14 xl:h-14 xl:text-xl"
      ? 16
      : size === "w-12 h-12"
      ? 15
      : size === "w-10 h-10"
      ? 14
      : 0;

  const strokeDasharray =
    size === "w-14 h-14 text-xl"
      ? 157
      : size === "w-10 h-10 xl:w-14 xl:h-14 xl:text-xl"
      ? 159
      : size === "w-12 h-12"
      ? 135
      : size === "w-10 h-10"
      ? 115
      : 0;

  const strokeSize = size === "w-10 h-10" ? "3" : "4";

  let calc = 0;
  if (data) calc = strokeDasharray - (strokeDasharray * voteAverage) / 100;

  if (data)
    return (
      <div
        className={`relative bg-black/90 rounded-full ${size} shadow-lg z-50`}
      >
        <svg className="relative w-full h-full z-50">
          <circle
            cx="45%"
            cy="45%"
            r="45%"
            className={`w-full h-full fill-none ${
              data.vote_average * 10 >= 70
                ? "stroke-green-500"
                : data.vote_average * 10 >= 50
                ? "stroke-yellow-400"
                : "stroke-red-500"
            } translate-x-[5%] translate-y-[5%]`}
            style={{
              strokeWidth: `${strokeSize}`,
              strokeLinecap: "round",
              strokeDasharray: `${strokeDasharray}`,
              strokeDashoffset: `${calc}`,
            }}
          ></circle>
        </svg>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <h2
            style={{
              fontSize: `${numberFontSize}px`,
            }}
            className={`text-gray-500 group-hover:text-white font-bold transition-all duration-150`}
          >
            {voteAverage}
            <span className="text-[10px] text-gray-500 group-hover:text-white transition-all duration-150">
              %
            </span>
          </h2>
        </div>
      </div>
    );
  return <div></div>;
};

export default Gauge;
