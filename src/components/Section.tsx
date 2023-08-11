import { ReactNode } from "react";
import { useSelectedIconStore } from "./sidebar/store";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  link: string;
  selectedIcon: string;
  content: ReactNode | ReactNode[];
}

const Section = ({ title, link, selectedIcon, content }: Props) => {
  const { setSelectedIcon } = useSelectedIconStore();

  return (
    <section>
      <h3 className="mt-10 mb-0 text-3xl text-white/60 hover:text-white cursor-pointer font-light pb-3 border-b-[1px] border-white/60">
        <Link to={link} onClick={() => setSelectedIcon(selectedIcon)}>
          {title}
        </Link>
      </h3>
      {content}
    </section>
  );
};

export default Section;
