import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'b9bf285c0165f727ace1749a552c9625';

const fetchMovies = () => {
  return axios
    .get(`/trending/all/day?api_key=${API_KEY}`)
    .then(response => response.data.results);
};

const fetchMovieId = id => {
  return axios
    .get(`/movie/${id}?api_key=${API_KEY}`)
    .then(response => response.data);
};

const fetchCast = id => {
  return axios.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
};

const fetchReviews = id => {
  return axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
};

const fetchMoviesBySearch = query => {
  return axios
    .get(`search/movie?api_key=${API_KEY}&query=${query}`)
    .then(response => response.data.results);
};
// eslint-disable-next-line
export default {
  fetchMovies,
  fetchMovieId,
  fetchCast,
  fetchReviews,
  fetchMoviesBySearch,
};
