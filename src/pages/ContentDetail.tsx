import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import CastAndCrewCard from "../components/castAndCrew/CastAndCrewCard";
import ContentDetailHero from "../components/content/ContentDetailHero/ContentDetailHero";
import ContentInfo from "../components/content/ContentInfo";
import { isMovie } from "../components/content/ContentVerticalCard";
import useSelectedContentId from "../components/content/store";
import useContentDetail from "../hooks/useContentDetail";
import useContentVideos from "../hooks/useContentVideos";
import useCredits from "../hooks/useCredits";
import { CastAndCrew } from "../interfaces/Credits";

const ContentDetail = () => {
  const [cast, setCast] = useState<CastAndCrew[]>([]);
  const [crew, setCrew] = useState<CastAndCrew[]>([]);
  const { selectedContentId, content } = useSelectedContentId();
  const {
    data: contentDetail,
    isLoading: contentDetailIsLoading,
    error: contentDetailError,
  } = useContentDetail(content, selectedContentId);

  const {
    data: credits,
    isLoading: creditsIsLoading,
    error: creditsError,
  } = useCredits(content, selectedContentId);

  const {
    data: videos,
    isLoading: videosAreLoading,
    error: videosError,
  } = useContentVideos(content, selectedContentId);

  useEffect(() => {
    if (credits) {
      setCast(credits.cast);
      setCrew(credits.crew);
    }
  }, [credits]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (contentDetailIsLoading || creditsIsLoading || videosAreLoading)
    return (
      <div className="h-[100vh]">
        <Spinner />
      </div>
    );

  if (contentDetailError || creditsError || videosError)
    return (
      <p className="h-[100vh]">
        {contentDetailError
          ? contentDetailError.message
          : creditsError?.message}
      </p>
    );

  return (
    <div className="my-10 flex flex-col gap-10 md:gap-0">
      <div className="relative w-full bg-slate-800 md:h-[60vh]">
        <ContentDetailHero data={contentDetail} />
      </div>
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
    </div>
  );
};

export default ContentDetail;
