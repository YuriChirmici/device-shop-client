import AppRouter from "./components/AppRouter";
import Navbar from "./components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkUser } from "./store/actionCreators/user";
import Spinner from "react-bootstrap/Spinner";
import { useLocation } from 'react-router-dom';

function App() {
	const dispatch = useDispatch();
	const { isLoading } = useSelector((state) => state.user);
	const location = useLocation();

	useEffect(() => {
		if (![ "/registration", "/login" ].includes(location.pathname)) {
			dispatch(checkUser());
		}
	}, []);

	if (isLoading) {
		return <Spinner animation="grow" />
	}

	return (
		<div className="App">
			<Navbar />
			<AppRouter />
		</div>
	);
}

export default App;
