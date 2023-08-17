import { ReactNode } from "react";

interface Props {
  title: string;
  content: ReactNode | ReactNode[];
}
const ContentInfo = ({ title, content }: Props) => {
  return (
    <section
      className={`${title === "Cast" ? "col-span-1 xl:col-span-2" : ""}`}
    >
      <h3 className="text-white text-2xl md:text-3xl font-semibold mb-5">
        {title}:{" "}
      </h3>
      {content}
    </section>
  );
};

export default ContentInfo;
