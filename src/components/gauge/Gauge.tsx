import { Movie } from "../../interfaces/Movie";
import { TvShow } from "../../interfaces/TvShow";

interface Props {
  data?: Movie | TvShow;
  size: number;
}
const Gauge = ({ data, size }: Props) => {
  const voteAverage = data?.vote_average
    ? Math.floor(data.vote_average * 10)
    : 0;

  const tailwindSize =
    size === 4
      ? "w-14 h-14 text-xl"
      : size === 3
      ? "w-10 h-10 xl:w-14 xl:h-14 xl:text-xl"
      : size === 2
      ? "w-12 h-12"
      : size === 1
      ? "w-10 h-10"
      : "";

  const numberFontSize =
    size === 4 ? 17 : size === 3 ? 16 : size === 2 ? 15 : size === 1 ? 14 : 0;

  const strokeDasharray =
    size === 4
      ? 157
      : size === 3
      ? 159
      : size === 2
      ? 135
      : size === 1
      ? 115
      : 0;

  const strokeSize = size === 1 ? "3" : "4";

  let calc = 0;
  if (data) calc = strokeDasharray - (strokeDasharray * voteAverage) / 100;

  if (data)
    return (
      <div
        className={`relative rounded-full bg-black/90 ${tailwindSize} z-50 shadow-lg`}
      >
        <svg className="relative z-50 h-full w-full">
          <circle
            cx="45%"
            cy="45%"
            r="45%"
            className={`h-full w-full fill-none ${
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
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
          <h2
            style={{
              fontSize: `${numberFontSize}px`,
            }}
            className={`font-bold text-gray-500 transition-all duration-150 group-hover:text-white`}
          >
            {voteAverage}
            <span className="text-[10px] text-gray-500 transition-all duration-150 group-hover:text-white">
              %
            </span>
          </h2>
        </div>
      </div>
    );
  return <div></div>;
};

export default Gauge;
