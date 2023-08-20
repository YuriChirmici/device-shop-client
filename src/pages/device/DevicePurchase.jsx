import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { addDeviceToBasket } from '../../store/actionCreators/basket';
import { useDispatch } from 'react-redux';

const DevicePurchase = ({ device }) => {
	const dispatch = useDispatch();

	return (
		<Card
			className="d-flex align-items-center justify-content-around"
			style={{ height: 300, fontSize: 32, border: "5px solid lightgray"}}
		>
			<h3> ${device.price} </h3>
			<Button
				variant="outline-dark"
				onClick={() => dispatch(addDeviceToBasket(device.id))}
			>
				Add to Basket
			</Button>
		</Card>
	);
};

export default DevicePurchase;