import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import ContentDetailHero from "../components/content/ContentDetailHero/ContentDetailHero";
import InfoGrid from "../components/content/ContentInfo/InfoGrid";
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
      <ContentDetailHero data={contentDetail} />
      <InfoGrid
        cast={cast}
        crew={crew}
        contentDetail={contentDetail}
        videos={videos}
      />
    </div>
  );
};

export default ContentDetail;
