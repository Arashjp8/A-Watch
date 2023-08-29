import { ReactNode } from "react";

interface Props {
  title: string;
  content: ReactNode | ReactNode[];
}
const ContentInfo = ({ title, content }: Props) => {
  return (
    <section
      className={`${
        title === "Cast" || title === "Videos" || title === ""
          ? "col-span-1 xl:col-span-2"
          : ""
      }`}
    >
      <h3 className="mb-5 text-2xl font-semibold text-white md:text-3xl">
        {title}
        {title === "" ? "" : ":"}{" "}
      </h3>
      {content}
    </section>
  );
};

export default ContentInfo;
