import { ReactNode } from "react";

interface Props {
  title: string;
  content: ReactNode | ReactNode[];
}
const MovieInfo = ({ title, content }: Props) => {
  return (
    <span className={`${title === "Cast" ? "col-span-1 xl:col-span-2" : ""}`}>
      <h3 className="text-white text-3xl font-semibold mb-5">{title}: </h3>
      {content}
    </span>
  );
};

export default MovieInfo;
