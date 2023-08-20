import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createDevice } from '../../store/actionCreators/device';

const CreateDevice = ({ show, onHide }) => {
	const dispatch = useDispatch();
	const { types } = useSelector((state) => state.type);
	const { brands } = useSelector((state) => state.brand);

	const [ selectedType, setSelectedType ] = useState({});
	const [ selectedBrand, setSelectedBrand ] = useState({});
	const [ info, setInfo ] = useState([]);
	const [ name, setName ] = useState("");
	const [ price, setPrice ] = useState(0);
	const [ image, setImage ] = useState(null);

	const addInfo = () => {
		setInfo([ ...info, {
			id: Date.now(),
			title: "",
			description: ""
		}]);
	};

	const changeInfo = (id, key, value) => {
		const newInfo = info.map(
			(item) => item.id === id ? { ...item, [key]: value }: item
		)
		setInfo(newInfo);
	}

	const onRemoveInfo = (item) => {
		setInfo(info.filter(({ id }) => id !== item.id));
	};

	const onCreateDevice = () => {
		const stringInfo = JSON.stringify(info.map(
			({ title, description}) => ({ title, description })
		));

		const formData = new FormData();
		formData.append("name", name);
		formData.append("price", price);
		formData.append("brandId", selectedBrand.id);
		formData.append("typeId", selectedType.id);
		formData.append("img", image);
		formData.append("info", stringInfo);
		dispatch(createDevice(formData));
		onHide();
	}

	return (
		<Modal
			show={show}
			onHide={onHide}
			size="lg"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Add new device
				</Modal.Title>
			</Modal.Header>
		<Modal.Body>
			<Form>
				<Dropdown>
					<Dropdown.Toggle variant="outline-dark">
						{ selectedType.name || "Select type" }
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{ types.map((type) => 
							<Dropdown.Item
								key={type.id}
								onClick={() => setSelectedType(type)}
							>
								{type.name}
							</Dropdown.Item> 
						)}
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown className='mt-3'>
					<Dropdown.Toggle variant="outline-dark">
						{ selectedBrand.name || "Select brand" }
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{ brands.map((brand) => 
							<Dropdown.Item
								key={brand.id}
								onClick={() => setSelectedBrand(brand)}
							>
								{brand.name}
							</Dropdown.Item> 
						)}
					</Dropdown.Menu>
				</Dropdown>
				<Form.Control 
					className='mt-3'
					placeholder="Enter device name..."
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<Form.Control 
					type="number"
					min="0"
					step="5"
					className='mt-3'
					placeholder="Enter device price..."
					value={price}
					onChange={(e) => setPrice(e.target.value)}
				/>
				<Form.Control 
					type="file"
					className='mt-3'
					accept=".jpg,.jpeg,.png"
					onChange={(e) => setImage(e.target.files[0])}
				/>
				<hr/>
				<Button variant="outline-dark" onClick={addInfo}>
					Add new property
				</Button>

				{info.map((item) => 
					<Row key={item.id} className='mt-3'>
						<Col md="4">
							<Form.Control
								placeholder="Enter property title..."
								value={item.title}
								onChange={(e) => changeInfo(item.id, "title", e.target.value)}
							/>
						</Col>
						<Col md="4">
							<Form.Control
								placeholder="Enter property description..."
								value={item.description}
								onChange={(e) => changeInfo(item.id, "description", e.target.value)}
							/>
						</Col>
						<Col md="4">
						<Button variant="outline-danger" onClick={() => onRemoveInfo(item)}>
							Delete
						</Button>
						</Col>
					</Row>
				)}
			</Form>
		</Modal.Body>
		<Modal.Footer>
			<Button variant="outline-danger" onClick={onHide}>
				Close
			</Button>
			<Button variant="outline-success" onClick={onCreateDevice}>
				Add
			</Button>
		</Modal.Footer>
	  </Modal>
	);
};

export default CreateDevice;