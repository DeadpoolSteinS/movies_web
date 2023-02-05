import MovieCard from "./movie_card";
import { BeatLoader } from "react-spinners";

export default function FlexCollection(props: any) {
	return (
		<div className="mb-8">
			<p className="text-2xl font-bold mb-4">Recommendation Movies</p>
			{props.movies.length > 0 ? (
				<div className="flex gap-4 overflow-auto">
					{props.movies.map((movie: any, idx: number) => (
						<MovieCard key={idx} movie={movie} />
					))}
				</div>
			) : (
				<div className="flex justify-center items-center h-64 text-xl font-bold">
					<BeatLoader color="#0000ff" size={24} />
				</div>
			)}
		</div>
	);
}
