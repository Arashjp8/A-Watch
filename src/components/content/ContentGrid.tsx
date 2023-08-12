import React from "react";
import { Movie } from "../../interfaces/Movie";
import { TvShow } from "../../interfaces/TvShow";
import { FetchResponse } from "../../services/apiClient";
import { InfiniteData } from "@tanstack/react-query";
import ContentCard from "./ContentCard";

interface Props {
  data?: InfiniteData<FetchResponse<Movie | TvShow>>;
}

const ContentGrid = ({ data }: Props) => {
  return (
    <section className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sxl:grid-cols-5 xl:grid-cols-6">
      {data?.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.results.map((movie) => (
            <ContentCard data={movie} key={movie.id} />
          ))}
        </React.Fragment>
      ))}
    </section>
  );
};

export default ContentGrid;
