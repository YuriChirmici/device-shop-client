import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TypeBar from '../../components/TypeBar';
import BrandBar from '../../components/BrandBar';
import DeviceList from '../../components/DeviceList';
import { useEffect, useState } from 'react';
import { fetchBrands } from '../../store/actionCreators/brand';
import { fetchTypes } from '../../store/actionCreators/type';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDevices } from '../../store/actionCreators/device';
import Pagination from '../../components/Pagination';

const Shop = () => {
	const dispatch = useDispatch();
	const limit = 4;
	const { devices } = useSelector((state) => state.device);
	const [ page, setPage ] = useState(1);
	const [ filter, setFilter ] = useState({ brandId: null, typeId: null });

	useEffect(() => {
		dispatch(fetchBrands());
		dispatch(fetchTypes());
		dispatch(fetchDevices({	page, limit, filter }));
	}, []);

	useEffect(() => {
		dispatch(fetchDevices({	page, limit, filter }));
	}, [ page, filter]);


	const onSetPage = (val) => {
		if (val !== page) {
			setPage(val);
		}
	}

	const onBrandChange = (brandId) => {
		setPage(1);
		setFilter({ ...filter, brandId });
	}

	const onTypeChange = (typeId) => {
		setPage(1);
		setFilter({ ...filter, typeId });
	}

	return (
		<Container>
			<Row className='mt-2'>
				<Col md="3">
					<TypeBar typeId={filter.typeId} onChange={onTypeChange} />
				</Col>
				<Col md="9">
					<BrandBar brandId={filter.brandId} onChange={onBrandChange} />
					<DeviceList devices={devices} />
					<Pagination page={page} setPage={onSetPage} />
				</Col>
			</Row>
		</Container>
	);
};

export default Shop;