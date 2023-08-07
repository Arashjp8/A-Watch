const BaseUrl = "https://api.themoviedb.org/3";
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

export const popularMovieAPIURL = `${BaseUrl}movie/popular?api_key=${apiKey}&language=en-US`;
export const discoverMoviesAPIURL = `${BaseUrl}discover/movie?api_key=${apiKey}&language=en-US`;
export const popularTVShowsAPIURL = `${BaseUrl}tv/popular?api_key=${apiKey}&language=en-US`;
export const trendingAPIURL = `${BaseUrl}trending/all/day?api_key=${apiKey}&language=en-US`;

export const searchAPIURL = `${BaseUrl}search/multi?api_key=${apiKey}&language=en-US&page=1`;
