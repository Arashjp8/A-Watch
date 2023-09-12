import React from "react";
import { Movie } from "../../interfaces/Movie";
import { TvShow } from "../../interfaces/TvShow";
import { FetchResponse } from "../../services/apiClient";
import { InfiniteData } from "@tanstack/react-query";
import ContentVerticalCard from "./ContentVerticalCard";

interface Props {
  data?: InfiniteData<FetchResponse<Movie | TvShow>>;
}

const ContentGrid = ({ data }: Props) => {
  return (
    <section className="grid grid-cols-2 gap-1 md:grid-cols-3 md:gap-20 lg:grid-cols-4 sxl:grid-cols-5 xl:grid-cols-6">
      {data?.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.results.map((movie) => (
            <ContentVerticalCard
              data={movie}
              key={movie.id}
              size="w-36 h-[440px]"
              detailTop="top-48"
              nameFontSize="text-lg"
              marginBottom="mb-0"
            />
          ))}
        </React.Fragment>
      ))}
    </section>
  );
};

export default ContentGrid;
