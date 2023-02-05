import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { getPopularMovies, getUpcomingMovies } from "../api";
import MovieCard from "../components/movie_card";
import { Link } from "react-router-dom";
import SearchInput from "../components/SearchInput";

export default function Home() {
	const [popularMovies, setPopularMovies] = useState([]);
	const [upcomingMovies, setUpcomingMovies] = useState([]);

	useEffect(() => {
		getPopularMovies().then((results) => {
			setPopularMovies(results);
		});

		getUpcomingMovies().then((results) => {
			setUpcomingMovies(results);
		});
	}, []);

	return (
		<div className="min-h-screen bg-gray-100">
			<div className="container mx-auto p-8">
				<SearchInput />

				<div className="mb-8">
					<p className="text-2xl font-bold mb-4">Popular Movies</p>
					{popularMovies.length > 0 ? (
						<div className="flex gap-4 overflow-auto">
							{popularMovies.map((movie, idx) => (
								<MovieCard key={idx} movie={movie} />
							))}
						</div>
					) : (
						<div className="flex justify-center items-center h-64 text-xl font-bold">
							<BeatLoader color="#0000ff" size={24} />
						</div>
					)}
				</div>
				<div>
					<p className="text-2xl font-bold mb-4">Upcoming Movies</p>
					{upcomingMovies.length > 0 ? (
						<div className="flex gap-4 overflow-auto">
							{upcomingMovies.map((movie, idx) => (
								<MovieCard key={idx} movie={movie} />
							))}
						</div>
					) : (
						<div className="flex justify-center items-center h-64 text-xl font-bold">
							<BeatLoader color="#0000ff" size={24} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
