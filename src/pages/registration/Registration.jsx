import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../utils/consts';
import { registerUser } from '../../store/actionCreators/user';
import { useDispatch, useSelector } from 'react-redux';
import { userSlice } from '../../store/reducers/userSlice';

const Registration = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { setError } = userSlice.actions;
	const { isAuth, error } = useSelector((state) => state.user);

	const [ email, setEmail ] = useState("");
	const [ password, setPassword ] = useState("");

	const onRegister = () => {
		dispatch(registerUser({ email, password }));
	};

	useEffect(() => {
		if (isAuth) {
			navigate("/");
		}
	}, [isAuth])

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
				<h2 className='m-auto'> Registration </h2>
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
						placeholder="Enter you password..."
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<div className='d-flex justify-content-between align-items-center mt-3'>
						<div>
							<span> Already have an account? </span>
							<NavLink to={LOGIN_ROUTE}> Login </NavLink>
						</div>
						<Button
							variant='outline-success'
							onClick={onRegister}
						>
							Sign Up
						</Button>
					</div>
					
				</Form>
			</Card>
		</Container>
	);
};

export default Registration;