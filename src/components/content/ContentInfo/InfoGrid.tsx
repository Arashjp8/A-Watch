import { CastAndCrew } from "../../../interfaces/Credits";
import { Movie } from "../../../interfaces/Movie";
import { TvShow } from "../../../interfaces/TvShow";
import { FetchVideosResponse } from "../../../interfaces/Videos";
import CastAndCrewCard from "../../castAndCrew/CastAndCrewCard";
import ContentInfo from "../ContentInfo";
import { isMovie } from "../ContentVerticalCard";

interface Props {
  cast: CastAndCrew[];
  crew: CastAndCrew[];
  contentDetail: TvShow | Movie;
  videos: FetchVideosResponse;
}

const InfoGrid = ({ cast, crew, contentDetail, videos }: Props) => {
  return (
    <div className="grid grid-cols-1 items-start gap-20 xl:grid-cols-2">
      <ContentInfo
        title="Overview"
        content={
          <p className="max-w-3xl text-2xl font-light text-white/80">
            {contentDetail?.overview}
          </p>
        }
      />
      <ContentInfo
        title="Release Date"
        content={
          <p className="text-2xl font-light text-white/80">
            {contentDetail && isMovie(contentDetail)
              ? contentDetail?.release_date
              : contentDetail?.first_air_date}
          </p>
        }
      />
      <ContentInfo
        title="Videos"
        content={
          <div className="mb-2 mt-10 flex w-[100%] snap-mandatory snap-start overflow-x-scroll">
            <div className="mb-6 flex w-full flex-nowrap gap-5">
              {videos?.results.slice(0, 10).map((video) => (
                <div
                  key={video.id}
                  className={`min-h-[230px] w-full min-w-[260px] md:min-w-[520px] ${
                    videos.results.length === 1
                      ? "md:min-h-[700px]"
                      : "md:min-h-[400px]"
                  }`}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    width="100%"
                    height="100%"
                    title={video.name}
                    allowFullScreen
                    className="rounded-3xl border-none transition-all duration-150 ease-linear hover:rounded-xl focus:border-none"
                  />
                </div>
              ))}
            </div>
          </div>
        }
      />
      <ContentInfo
        title="Companies"
        content={contentDetail.production_companies.map((company) => (
          <p key={company.id} className="text-2xl font-light text-white/80">
            {company.name}
          </p>
        ))}
      />
      <ContentInfo
        title="Director"
        content={
          <span className="grid-row-2 grid grid-cols-6 gap-10">
            {crew
              .filter((c) => c.job === "Director")
              .slice(0, 1)
              .map((c, index) => (
                <CastAndCrewCard
                  key={c.id}
                  c={c}
                  index={index}
                  imageSize="w-[150px] min-w-[150px] h-[220px]"
                  fontSize="text-2xl"
                  cursor="cursor-pointer"
                  onHover="hover:rounded-xl hover:opacity-50"
                  isName={true}
                />
              ))}
          </span>
        }
      />
      <ContentInfo
        title="Cast"
        content={
          <span className="grid-row-2 grid grid-cols-1 gap-10 sm:grid-cols-2 ssm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {cast.map((c, index) => (
              <CastAndCrewCard
                key={c.id}
                c={c}
                index={index}
                imageSize="w-[150px] min-w-[150px] h-[220px]"
                fontSize="text-2xl"
                cursor="cursor-pointer"
                onHover="hover:rounded-xl hover:opacity-50"
                isName={true}
              />
            ))}
          </span>
        }
      />
      <ContentInfo
        title="Genres"
        content={contentDetail.genres.map((genre) => (
          <p key={genre.id} className="text-2xl font-light text-white/80">
            {genre.name}
          </p>
        ))}
      />
      <ContentInfo
        title="Status"
        content={
          <p
            key={contentDetail.id}
            className="text-2xl font-light text-white/80"
          >
            {contentDetail.status}
          </p>
        }
      />
    </div>
  );
};

export default InfoGrid;
