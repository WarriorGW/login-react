import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm.jsx";
import Confirmation from "./pages/Confirmation.jsx";
import ChangePass from "./pages/ChangePass.jsx";
import SendMailPass from "./pages/SendMailPass.jsx";

function App() {
	return (
		<>
			<nav className="flex space-x-3 text-center justify-center my-5">
				<Link to="/">Home</Link>
				<Link to="/login">Login</Link>
				<Link to="/register">Register</Link>
			</nav>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/login" element={<LoginForm />} />
				<Route path="/register" element={<RegisterForm />} />
				<Route path="/confirmation/:token" element={<Confirmation />} />
				<Route path="/changePass" element={<SendMailPass />} />
				<Route path="/changePass/:token" element={<ChangePass />} />
			</Routes>
		</>
	);
}

export default App;
