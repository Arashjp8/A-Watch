export const BaseUrl = "https://api.themoviedb.org/3";
export const apiKey = "9bea273ec3cc99de5d3fd85578d2b0ed";

export const popularMovieAPIURL = `${BaseUrl}/movie/popular?api_key=${apiKey}&language=en-US`;
export const discoverMoviesAPIURL = `${BaseUrl}/discover/movie?api_key=${apiKey}&language=en-US`;
export const trendingMoviesAPIURL = `${BaseUrl}/trending/movie/day?api_key=${apiKey}&language=en-US`;

export const popularTVShowsAPIURL = `${BaseUrl}/tv/popular?api_key=${apiKey}&language=en-US`;
export const trendingTvShowsAPIURL = `${BaseUrl}/trending/tv/day?api_key=${apiKey}&language=en-US`;
