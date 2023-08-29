import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useSelectedIconStore } from "./sidebar/store";
import { TbArrowRight } from "react-icons/tb";

interface Props {
  title: string;
  link: string;
  selectedIcon: string;
  content: ReactNode | ReactNode[];
  numberOfItems?: number;
}

const Section = ({
  title,
  link,
  selectedIcon,
  content,
  numberOfItems,
}: Props) => {
  const { setSelectedIcon } = useSelectedIconStore();

  return (
    <section className="w-full">
      <span
        onClick={() => setSelectedIcon(selectedIcon)}
        className="mb-0 mt-10 flex flex-row items-center justify-between border-b-[1px] border-white/60 "
      >
        <div className="flex flex-row items-start gap-3">
          <h3
            className={`text-2xl text-white/60 md:text-3xl ${
              link.length > 0 ? "hover:text-white" : ""
            } pb-3 font-light`}
          >
            {link.length > 0 ? <Link to={link}>{title}</Link> : title}
          </h3>
          <p
            className={`${
              numberOfItems ? "block" : "hidden"
            } flex flex-row items-center justify-center rounded-lg bg-blue-600/20 px-2 text-base text-blue-400 md:text-lg`}
          >
            {numberOfItems}
          </p>
        </div>
        <Link
          to={link}
          className={`${
            link.length > 0 ? "block" : "hidden"
          } mb-1 flex flex-row items-center gap-1 rounded-3xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-all duration-150 ease-linear hover:rounded-xl hover:bg-white hover:text-blue-600 ssm:text-sm`}
        >
          <p>More</p>
          <TbArrowRight size={18} />
        </Link>
      </span>
      {content}
    </section>
  );
};

export default Section;
