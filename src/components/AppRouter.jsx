import { Routes, Route } from 'react-router-dom';
import { getRoutesByRole } from '../routes';
import Shop from '../pages/shop/Shop';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';

const AppRouter = () => {
	const { user, isAuth, isLoading } = useSelector((state) => state.user)
	if (isLoading) {
		return <Spinner animation="grow" />
	}

	const routes = getRoutesByRole(user.role, isAuth);

	return (
		<div>
			<Routes>
				<Route path="/" Component={Shop} />
				{ routes.map(({ path, Component }) =>
					<Route key={path} path={path} Component={Component} exact />
				)}
			</Routes>
		</div>
	);
};

export default AppRouter;