import { Movie } from "../../../interfaces/Movie";
import { TvShow } from "../../../interfaces/TvShow";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

interface Props {
  data?: Movie | TvShow;
}
const ContentDetailHero = ({ data }: Props) => {
  return (
    <>
      <DesktopView data={data} />
      <MobileView data={data} />
    </>
  );
};

export default ContentDetailHero;
