import { Movie } from "../interfaces/Movie";
import { TvShow } from "../interfaces/TvShow";

interface Props {
  data?: Movie | TvShow;
  size: string;
}
const Gauge = ({ data, size }: Props) => {
  const numberSize = size.includes("w-14 h-14 text-xl")
    ? 16
    : size.includes("w-10 h-10 xl:w-14 xl:h-14")
    ? 15
    : size.includes("w-10 h-10 xl:w-12 xl:h-12 xl:text-xl")
    ? 14
    : size.includes("w-10 h-10")
    ? 13
    : 0;

  const strokeDasharray = size.includes("w-14 h-14 text-xl")
    ? 157
    : size.includes("w-10 h-10 xl:w-14 xl:h-14")
    ? 156
    : size.includes("w-10 h-10 xl:w-12 xl:h-12 xl:text-xl")
    ? 135
    : size.includes("w-10 h-10")
    ? 115
    : 0;

  let calc = 0;
  if (data)
    calc =
      strokeDasharray -
      (strokeDasharray * Math.floor(data.vote_average * 10)) / 100;

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
              data.vote_average * 10 > 70
                ? "stroke-green-500"
                : data.vote_average * 10 > 50
                ? "stroke-yellow-400"
                : "stroke-red-500"
            } stroke-[4] translate-x-[5%] translate-y-[5%]`}
            style={{
              strokeLinecap: "round",
              strokeDasharray: `${strokeDasharray}`,
              strokeDashoffset: `${calc}`,
            }}
          ></circle>
        </svg>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <h2
            className={`text-[${numberSize}px] group-hover:text-[${
              numberSize + 1
            }px] text-gray-600 group-hover:text-white font-bold transition-all duration-150`}
          >
            {Math.floor(data.vote_average * 10)}
            <span className="text-[10px] text-gray-600 group-hover:text-white transition-all duration-150">
              %
            </span>
          </h2>
        </div>
      </div>
    );
  return <div></div>;
};

export default Gauge;
