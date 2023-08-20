import Row from 'react-bootstrap/Row';

const DeviceCharacteristics = ({ device }) => {
	if (!device.info?.length) {
		return;
	}

	return (
		<Row className='d-flex flex-column m-3'>
			<h2> Characteristics: </h2>
			{ device.info.map((item, index) => 
				<Row
					key={item.id}
					style={{ background: index % 2 === 0 ? "lightgray" : "transparent", padding: 10 }}
				>
					{item.title}: {item.description}
				</Row>
			)}
		</Row>
	);
};

export default DeviceCharacteristics;