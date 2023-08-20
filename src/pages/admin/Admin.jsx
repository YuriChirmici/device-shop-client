import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import CreateBrand from "../../components/modals/CreateBrand";
import CreateType from "../../components/modals/CreateType";
import CreateDevice from "../../components/modals/CreateDevice";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrands } from '../../store/actionCreators/brand';
import { fetchTypes } from '../../store/actionCreators/type';

const Admin = () => {
	const dispatch = useDispatch();
	const [ brandVisible, setBrandVisible ] = useState(false);
	const [ typeVisible, setTypeVisible ] = useState(false);
	const [ deviceVisible, setDeviceVisible ] = useState(false);

	const { brands } = useSelector((state) => state.brand);
	const { types } = useSelector((state) => state.type);

	useEffect(() => {
		if (!brands.length) {
			dispatch(fetchBrands());
		}
		if (!types.length) {
			dispatch(fetchTypes());
		}
	}, []);

	return (
		<Container className='d-flex flex-column'>
			<Button
				variant="outline-dark"
				className='mt-4 p-2'
				onClick={() => setBrandVisible(true)}
			>
				Add new brand
			</Button>

			<Button
				variant="outline-dark"
				className='mt-4 p-2'
				onClick={() => setTypeVisible(true)}
			>
				Add new type
			</Button>

			<Button
				variant="outline-dark"
				className='mt-4 p-2'
				onClick={() => setDeviceVisible(true)}
			>
				Add new device
			</Button>

			<CreateBrand show={brandVisible} onHide={() => setBrandVisible(false) } />
			<CreateType show={typeVisible} onHide={() => setTypeVisible(false) } />
			<CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false) } />
		</Container>
	);
};

export default Admin;