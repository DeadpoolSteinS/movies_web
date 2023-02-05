import ContentLoader from "react-content-loader";

const DetailLoader = (props: any) => (
	<ContentLoader
		speed={1}
		width={1000}
		height={424}
		viewBox="0 0 1000 424"
		backgroundColor="#f3f3f3"
		foregroundColor="#c4c4c4"
		{...props}
	>
		<rect x="320" y="15" rx="3" ry="3" width="500" height="35" />
		<rect x="320" y="107" rx="3" ry="3" width="52" height="5" />
		<rect x="320" y="80" rx="3" ry="3" width="308" height="11" />
		<rect x="320" y="132" rx="3" ry="3" width="800" height="6" />
		<rect x="320" y="162" rx="3" ry="3" width="800" height="6" />
		<rect x="320" y="192" rx="3" ry="3" width="800" height="6" />
		<rect x="5" y="13" rx="0" ry="0" width="256" height="384" />
	</ContentLoader>
);

export default DetailLoader;
