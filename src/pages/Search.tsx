import SearchInput from "../components/SearchInput";
import { BeatLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { getSearchMovie } from "../api";
import MovieCard from "../components/movie_card";
import { useParams } from "react-router-dom";

export default function Search() {
	const { keyword } = useParams();
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [totalResults, setTotalResults] = useState(0);
	const [totalPage, setTotalPage] = useState(0);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		getSearchMovie(keyword, page).then((results) => {
			setMovies(results.results);
			setTotalResults(results.total_results);
			setTotalPage(results.total_pages);

			setLoading(false);
		});
	}, [keyword, page]);

	return (
		<div className="min-h-screen bg-gray-100">
			<div className="container mx-auto p-8">
				<SearchInput />
				<div className="mb-8">
					<p className="mb-4 text-2xl font-semibold">
						Found {totalResults} results for '{keyword}'
					</p>
					{!loading ? (
						movies.length > 0 ? (
							<div className="grid grid-cols-5 gap-8">
								{movies.map((movie, idx) => (
									<MovieCard key={idx} movie={movie} />
								))}
							</div>
						) : (
							<div className="flex justify-center items-center h-64 text-xl font-bold">
								Hasil tidak ditemukan
							</div>
						)
					) : (
						<div className="flex justify-center items-center h-64 text-xl font-bold">
							<BeatLoader color="#0000ff" size={24} />
						</div>
					)}
				</div>

				<div className="flex justify-center">
					<button
						onClick={() => {
							if (page > 1) setPage((page) => page - 1);
						}}
						className="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						<svg
							aria-hidden="true"
							className="w-5 h-5 mr-2"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
								clipRule="evenodd"
							></path>
						</svg>
						Previous
					</button>
					<button
						onClick={() => {
							if (page < totalPage) setPage((page) => page + 1);
						}}
						className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						Next
						<svg
							aria-hidden="true"
							className="w-5 h-5 ml-2"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							></path>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}
