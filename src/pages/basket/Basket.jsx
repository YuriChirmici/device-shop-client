import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { fetchBasket } from '../../store/actionCreators/basket';
import { useDispatch, useSelector } from 'react-redux';
import DeviceList from "../../components/DeviceList";

const Basket = () => {
	const dispatch = useDispatch();
	const { basket } = useSelector((state) => state.basket);

	useEffect(() => {
		dispatch(fetchBasket());
	}, [])
	return (
		<Container className='d-flex flex-column'>
			<h1> Basket </h1>
			<DeviceList devices={basket}/>
		</Container>
	);
};

export default Basket;