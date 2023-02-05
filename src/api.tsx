import axios from "axios";

const apiKey = "22a5be7309ad7d652c523ec54c908be9";
const baseUrl = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
	const movies = await axios.get(
		`${baseUrl}/movie/popular?api_key=${apiKey}`
	);
	return movies.data.results;
};

export const getUpcomingMovies = async () => {
	const movies = await axios.get(
		`${baseUrl}/movie/upcoming?api_key=${apiKey}`
	);
	return movies.data.results;
};

export const getDetailMovie = async (id?: string) => {
	const result = await axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}`);
	return result.data;
};

export const getSearchMovie = async (
	keyword: string = "",
	page: number = 1
) => {
	const movies = await axios.get(
		`${baseUrl}/search/movie?api_key=${apiKey}&query=${keyword}&page=${page}`
	);
	return movies.data;
};

export const getRecomMovies = async (id?: string) => {
	const movies = await axios.get(
		`${baseUrl}/movie/${id}/recommendations?api_key=${apiKey}`
	);
	return movies.data.results;
};

// https://image.tmdb.org/t/p/w500
