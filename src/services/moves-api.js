import axios from "axios";
const API_KEY = "cebf74f2036e82ff6c32c96394fea389";
const BASE_URL = `https://api.themoviedb.org/3`;
const page = 1;
export const getMovies = (query) => {
  return axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
    )
    .then((response) => {
      return response.data;
    });
};
export const getTrendingMovies = () => {
  return axios
    .get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=${page}`
    )
    .then((response) => {
      return response.data;
    });
};
export const getCast = (movieId) => {
  return axios
    .get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
    .then((response) => {
      return response.data;
    });
};

export const getReviews = (movieId) => {
  return axios
    .get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      return response.data;
    });
};

export const getMovieDetails = (movieId) => {
  return axios
    .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then((response) => {
      return response.data;
    });
};
