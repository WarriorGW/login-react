import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();

	useEffect(() => {
		const username = document.cookie.replace(
			/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/,
			"$1"
		);
		if (!username) {
			navigate("/login");
		}
	}, []);

	return <h1>Home</h1>;
}

export default Home;
