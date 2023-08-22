import { useEffect, useState } from "react";
import { TbBookmark, TbBookmarkFilled } from "react-icons/tb";
import CastAndCrewCard from "../components/CastAndCrewCard";
import Spinner from "../components/Spinner";
import ContentDetailHero from "../components/content/ContentDetailHero";
import ContentInfo from "../components/content/ContentInfo";
import { isMovie } from "../components/content/ContentVerticalCard";
import useSelectedContentId from "../components/content/store";
import Gauge from "../components/gauge/Gauge";
import useContentDetail from "../hooks/useContentDetail";
import useCredits from "../hooks/useCredits";
import { CastAndCrew } from "../interfaces/Credits";
import useBookmarkStore from "./store";
import useContentVideos from "../hooks/useContentVideos";

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

  const {
    isBookmarked,
    changeIsBookmarkedToTrue,
    bookmarkTheContent,
    removeFromBookmarked,
    checkContentBookmarked,
  } = useBookmarkStore();

  useEffect(() => {
    if (contentDetail) checkContentBookmarked(contentDetail);
  }, [contentDetail, isBookmarked]);

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
    <div className="flex flex-col my-10 gap-0">
      <div className="relative w-full h-[60vh] bg-slate-800">
        <ContentDetailHero data={contentDetail} />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 items-start gap-20">
        <ContentInfo
          title="Overview"
          content={
            <p className="text-white/80 text-2xl font-light max-w-3xl">
              {contentDetail?.overview}
            </p>
          }
        />
        <ContentInfo
          title="Rating"
          content={<Gauge data={contentDetail} size="w-14 h-14 text-xl" />}
        />
        <ContentInfo
          title="Videos"
          content={
            <div className=" flex w-[100%] overflow-x-scroll mt-10 mb-2 snap-mandatory snap-start">
              <div className="flex flex-nowrap w-full mb-6 gap-5">
                {videos?.results.slice(0, 10).map((video) => (
                  <div className="w-full min-w-[260px] md:min-w-[520px] min-h-[230px] md:min-h-[400px]">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.key}`}
                      width="100%"
                      height="100%"
                      title={video.name}
                      allowFullScreen
                      className="focus:border-none rounded-3xl hover:rounded-xl transition-all duration-150 ease-linear border-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          }
        />
        <ContentInfo
          title="Release Date"
          content={
            <p className="text-white/80 text-2xl font-light">
              {contentDetail && isMovie(contentDetail)
                ? contentDetail?.release_date
                : contentDetail?.first_air_date}
            </p>
          }
        />
        <ContentInfo
          title="Director"
          content={
            <span className="grid grid-cols-6 grid-row-2 gap-10">
              {crew
                .filter((c) => c.job === "Director")
                .slice(0, 1)
                .map((c, index) => (
                  <CastAndCrewCard key={c.id} c={c} index={index} />
                ))}
            </span>
          }
        />
        <ContentInfo
          title="Cast"
          content={
            <span className="grid grid-cols-1 sm:grid-cols-2 ssm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 grid-row-2 gap-10">
              {cast.map((c, index) => (
                <CastAndCrewCard key={c.id} c={c} index={index} />
              ))}
            </span>
          }
        />
        <ContentInfo
          title="Companies"
          content={contentDetail.production_companies.map((company) => (
            <p key={company.id} className="text-white/80 text-2xl font-light">
              {company.name}
            </p>
          ))}
        />
        <ContentInfo
          title="Genres"
          content={contentDetail.genres.map((genre) => (
            <p key={genre.id} className="text-white/80 text-2xl font-light">
              {genre.name}
            </p>
          ))}
        />
        <button
          onClick={() => {
            changeIsBookmarkedToTrue();
            if (!isBookmarked) {
              bookmarkTheContent(contentDetail);
            }
            if (isBookmarked) {
              removeFromBookmarked(contentDetail);
            }
          }}
          className={`mb-1 text-xl font-semibold ${
            isBookmarked
              ? "text-white bg-green-600"
              : "text-white bg-blue-600 hover:bg-white hover:text-blue-600"
          } max-w-[300px] p-4 rounded-3xl hover:rounded-xl transition-all duration-150 ease-linear flex flex-row gap-1 items-center`}
        >
          {isBookmarked ? (
            <>
              <p>Added to your watchlist</p>
              <TbBookmarkFilled size={22} />
            </>
          ) : (
            <>
              <p>Add it to your watchlist</p>
              <TbBookmark size={22} />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ContentDetail;
