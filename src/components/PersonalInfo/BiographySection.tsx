import { useState } from "react";

interface Props {
  biography: string;
}
const BiographySection = ({ biography }: Props) => {
  const [isExpand, setExpand] = useState(false);
  return (
    <section className="">
      <h3 className="pb-3 text-xl font-light text-white/60 ssm:text-2xl">
        Biography:{" "}
      </h3>
      <p className="text-lg font-light text-white">
        {isExpand
          ? biography
          : biography.length > 500
          ? biography.slice(0, 500) + "..."
          : biography}
        <button
          onClick={() => setExpand(!isExpand)}
          className={`${
            biography.length > 500 ? "block" : "hidden"
          } my-2 flex flex-row items-center gap-1 rounded-3xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-150 ease-linear hover:rounded-xl hover:bg-white hover:text-blue-600`}
        >
          {isExpand ? "Show less" : "Show more"}
        </button>
      </p>
    </section>
  );
};

export default BiographySection;
