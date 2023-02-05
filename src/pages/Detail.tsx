import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailMovie, getPopularMovies, getRecomMovies } from "../api";
import DetailLoader from "../components/DetailLoader";
import FlexCollection from "../components/FlexCollection";
import SearchInput from "../components/SearchInput";

export default function Detail() {
	const [recomMovies, setRecomMovies] = useState([]);
	const { id } = useParams();

	interface Genre {
		name: string;
		id: number;
	}

	interface Movie {
		poster_path: string;
		title: string;
		status: string;
		overview: string;
		release_date: string;
		runtime: string;
		popularity: string;
		vote_average: string;
		vote_count: string;
		genres: Array<Genre>;
	}

	const [movie, setMovie] = useState<Partial<Movie>>({});

	useEffect(() => {
		getDetailMovie(id).then((results) => {
			setMovie(results);
		});

		getRecomMovies(id).then((results) => {
			setRecomMovies(results);
		});
	}, [id]);

	return (
		<div className="min-h-screen bg-gray-100">
			<div className="container mx-auto p-8">
				<SearchInput />
				<div className="max-w-[1000px] mx-auto">
					{Object.keys(movie).length > 0 ? (
						<div>
							<div className="md:flex gap-16 max-w-[1000px] mx-auto mb-8">
								<div className="w-64 shrink-0">
									<img
										src={
											movie.poster_path &&
											`https://image.tmdb.org/t/p/w500/${movie.poster_path}`
										}
										alt=""
										className="rounded-xl"
									/>
								</div>
								<div>
									<p className="text-5xl mb-8">
										{movie.title}
									</p>
									<p className="mb-8 font-bold text-4xl">
										{movie.vote_average && movie.vote_count
											? parseFloat(
													movie.vote_average
											  ).toFixed(1) +
											  " (" +
											  movie.vote_count +
											  " vote)"
											: "-"}
									</p>
									<div className="flex justify-between mb-8">
										<div>
											<p className="font-bold">Length</p>
											<p>{movie.runtime} min</p>
										</div>
										<div>
											<p className="font-bold">
												Popularity
											</p>
											<p>{movie.popularity}</p>
										</div>
										<div>
											<p className="font-bold">
												Release Date
											</p>
											<p>{movie.release_date}</p>
										</div>
										<div>
											<p className="font-bold">Status</p>
											<p>{movie.status}</p>
										</div>
									</div>

									<div className="mb-8">
										<p className="font-bold mb-2">Genres</p>
										<div className="flex gap-2">
											{movie.genres &&
												movie.genres.map(
													(genre, idx) => (
														<span
															key={idx}
															className="bg-gray-500 text-white px-4 py-1 rounded-xl"
														>
															{genre.name}
														</span>
													)
												)}
										</div>
									</div>

									<div>
										<p className="font-bold">Synopsis</p>
										<p>{movie.overview}</p>
									</div>
								</div>
							</div>

							<FlexCollection movies={recomMovies} />
						</div>
					) : (
						<DetailLoader />
					)}
				</div>
			</div>
		</div>
	);
}
