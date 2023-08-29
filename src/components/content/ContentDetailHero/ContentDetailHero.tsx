import { Movie } from "../../../interfaces/Movie";
import { TvShow } from "../../../interfaces/TvShow";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

interface Props {
  data?: Movie | TvShow;
}
const ContentDetailHero = ({ data }: Props) => {
  return (
    <div className="relative w-full bg-slate-800 md:h-[60vh]">
      <DesktopView data={data} />
      <MobileView data={data} />
    </div>
  );
};

export default ContentDetailHero;
