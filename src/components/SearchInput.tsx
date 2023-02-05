import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchInput() {
	const navigate = useNavigate();
	const [searchKeyword, setSearchKeyword] = useState("");

	const searchHandle = () => {
		return navigate(`/search/${searchKeyword}`);
	};

	return (
		<div className="mb-8 relative">
			<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
				<svg
					aria-hidden="true"
					className="w-5 h-5 text-gray-500 dark:text-gray-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					></path>
				</svg>
			</div>
			<input
				id="searchInput"
				value={searchKeyword}
				onChange={(e) => setSearchKeyword(e.target.value)}
				className="block w-full p-4 pl-10 text-sm text-gray-500 border border-gray-300 rounded-lg bg-gray-50"
				placeholder="Search Movies..."
			/>
			<button
				onClick={searchHandle}
				className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
			>
				Search
			</button>
		</div>
	);
}
