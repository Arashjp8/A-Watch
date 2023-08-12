import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useSelectedIconStore } from "./sidebar/store";
import { TbArrowRight } from "react-icons/tb";

interface Props {
  title: string;
  link: string;
  selectedIcon: string;
  content: ReactNode | ReactNode[];
}

const Section = ({ title, link, selectedIcon, content }: Props) => {
  const { setSelectedIcon } = useSelectedIconStore();

  return (
    <section className="w-full">
      <span
        onClick={() => setSelectedIcon(selectedIcon)}
        className="mt-10 mb-0 flex flex-row justify-between items-center border-b-[1px] border-white/60 "
      >
        <h3 className="text-3xl text-white/60 hover:text-white cursor-pointer font-light pb-3">
          <Link to={link}>{title}</Link>
        </h3>
        <Link
          to={link}
          className="mb-1 text-sm font-semibold text-white bg-blue-600 hover:bg-white hover:text-blue-600 py-2 px-4 rounded-3xl hover:rounded-xl transition-all duration-150 ease-linear flex flex-row gap-1 items-center"
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
