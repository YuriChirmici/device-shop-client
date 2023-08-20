import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getImageSrc } from '../../utils/images';
import { useEffect } from 'react';
import { fetchDeviceById } from '../../store/actionCreators/device';
import Spinner from 'react-bootstrap/Spinner';

import DeviceMainInfo from './DeviceMainInfo';
import DevicePurchase from './DevicePurchase';
import DeviceCharacteristics from './DeviceCharacteristics';

const Device = () => {
	const dispatch = useDispatch();
	const deviceId = useParams().id;
	const { devices, isLoading } = useSelector((state) => state.device);
	const device = devices.find(({ id }) => id.toString() === deviceId);

	useEffect(() => {
		if(!device) {
			dispatch(fetchDeviceById(deviceId));
		}
	}, [])

	if (isLoading) {
		return <Spinner animation="grow" />
	}

	if (!device) {
		return <h2> Device not found </h2>
	}

	return (
		<Container className='mt-3'>
			<Row className=' d-flex'>
				<Col md="4">
					<Image src={getImageSrc(device.img)} style={{width: "100%"}}/>
				</Col>
				<Col md="4">
					<DeviceMainInfo device={device} />
				</Col>
				<Col md="4">
					<DevicePurchase device={device} />
				</Col>
			</Row>
			<DeviceCharacteristics device={device} />
		</Container>
	);
};

export default Device;