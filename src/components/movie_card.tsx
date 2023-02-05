import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }: any) {
	return (
		<Link to={`/detail/${movie.id}`} className="min-w-[176px]">
			<img
				src={
					movie.poster_path &&
					`https://image.tmdb.org/t/p/w500/${movie.poster_path}`
				}
				alt=""
				className="w-full"
			/>
			<div>
				<p className="font-bold truncate">{movie.title}</p>
				<p className="text-xs">
					<span>{movie.vote_average}</span> |{" "}
					<span>
						{movie.release_date != "" &&
							format(
								new Date(movie.release_date),
								"MMM dd, yyyy"
							)}
					</span>
				</p>
				<p className="text-xs truncate">
					Action, Fantasy, Science Fiction
				</p>
			</div>
		</Link>
	);
}
