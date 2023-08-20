import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { REGISTRATION_ROUTE } from '../../utils/consts';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/actionCreators/user';
import { userSlice } from '../../store/reducers/userSlice';

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { setError } = userSlice.actions;
	const { isAuth, error } = useSelector((state) => state.user);
	const [ email, setEmail ] = useState("");
	const [ password, setPassword ] = useState("");

	const onLogin = () => {
		dispatch(loginUser({ email, password }));
	};

	useEffect(() => {
		if (isAuth) {
			navigate("/");
		}
	}, [isAuth]);

	useEffect(() => {
		if (error) {
			setTimeout(() => {
				alert(error);
				dispatch(setError(""));
			}, 10);
		}
	}, [error]);

	return (
		<Container className="d-flex justify-content-center align-items-center">
			<Card style={{ width: 600 }} className="p-5 mt-3">
				<h2 className='m-auto'> Login </h2>
				<Form className="d-flex flex-column">
					<Form.Control
						className="mt-3"
						placeholder="Enter your email..."
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Form.Control
						type="password"
						className="mt-3"
						placeholder="Enter your password..."
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<div className='d-flex justify-content-between align-items-center mt-3'>
						<div>
							<span> Don't have an account yet? </span>
							<NavLink to={REGISTRATION_ROUTE}> Sign Up </NavLink>
						</div>
						<Button
							variant='outline-success'
							onClick={onLogin}
						>
							Login
						</Button>
					</div>
				</Form>
			</Card>
		</Container>
	);
};

export default Login;