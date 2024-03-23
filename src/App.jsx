import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LoginForm from "./pages/LoginForm";

function App() {
	return (
		<>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/login" element={<LoginForm />} />
			</Routes>
		</>
	);
}

export default App;
