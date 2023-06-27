import { useEffect } from "react";

const SetTitle = (title) => {
	useEffect(() => {
		document.title = `Mine School | ${title}`;
	}, [title]);
};

export default SetTitle;
