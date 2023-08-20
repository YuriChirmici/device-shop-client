import DeviceItem from './DeviceItem';
import Row from 'react-bootstrap/Row';

const DeviceList = ({ devices }) => {
	if (!devices.length) {
		return <h2 className='mt-3'> No devices </h2>
	}

	return (
		<Row className='d-flex'>
			{devices.map((device) => 
				<DeviceItem key={device.id} device={device}/>
			)}
		</Row>
	);
};

export default DeviceList;