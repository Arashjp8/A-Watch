import { useEffect, useState } from "react";
import ContentDetailHero from "../components/content/ContentDetailHero";
import VoteAverage from "../components/VoteAverage";
import CastAndCrewCard from "../components/CastAndCrewCard";
import ContentInfo from "../components/content/ContentInfo";
import useSelectedMovieId from "../components/content/store";
import { isMovie } from "../components/content/ContentCard";
import { CastAndCrew } from "../interfaces/Credits";
import useContentDetail from "../hooks/useContentDetail";
import useCredits from "../hooks/useCredits";
import Spinner from "../components/Spinner";

const ContentDetail = () => {
  const [cast, setCast] = useState<CastAndCrew[]>([]);
  const [crew, setCrew] = useState<CastAndCrew[]>([]);
  const { selectedContentId, content } = useSelectedMovieId();
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

  useEffect(() => {
    if (credits) {
      setCast(credits.cast);
      setCrew(credits.crew);
    }
  }, [credits]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (contentDetailIsLoading || creditsIsLoading)
    return (
      <div className="h-[100vh]">
        <Spinner />
      </div>
    );

  if (contentDetailError || creditsError)
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
          content={
            <VoteAverage data={contentDetail} style="w-14 h-14 text-xl" />
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
      </div>
    </div>
  );
};

export default ContentDetail;
