import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import star from "../assets/star.png";
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';
import { getImageSrc } from '../utils/images';

const DeviceItem = ({ device }) => {
	const navigate = useNavigate();

	return (
		<Col md="3" className='mt-3' onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`) }>
			<Card style={{ cursor: "pointer" }} border="light" className='p-2'>
				<Image src={getImageSrc(device.img)} style={{width: "100%"}}/>
				<div className="mt-1 d-flex justify-content-between align-items-center">
					<div className="text-black-50"> { device.brand?.name } </div>
					<div className="d-flex justify-content-between align-items-center">
						{ device.rating ?
							<>
								<div>{device.rating} </div>
								<Image style={{width: 16}} src={star}/>
							</>
							: device.count ? 
								<b> {device.count} </b>
							:
							<div> 0 feedbacks </div>
						}
					</div>
				</div>
				<div> {device.name} </div>
			</Card>
		</Col>
	);
};

export default DeviceItem;