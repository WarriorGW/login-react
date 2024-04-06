import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();

	useEffect(() => {
		const email = document.cookie.replace(
			/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/,
			"$1"
		);
		if (!email) {
			navigate("/login");
		}
	}, []);

	return <h1>Home</h1>;
}

export default Home;
