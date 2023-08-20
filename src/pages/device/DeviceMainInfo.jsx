import star from "../../assets/star.png";
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const DeviceMainInfo = ({ device }) => {
	return (
		<Row>
			<h2> {device.name} </h2>
			<div>
				<div className="d-flex align-items-center">
					{ device.rating ?
						<>
							<div>{device.rating} </div>
							<Image style={{width: 16}} src={star}/>
						</>
						: 
						<div> 0 feedbacks </div>
					}
				</div>
			</div>
		</Row>
	);
};

export default DeviceMainInfo;