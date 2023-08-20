import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { createBrand } from '../../store/actionCreators/brand';

const CreateBrand = ({ show, onHide }) => {
	const dispatch = useDispatch();
	const [ brand, setBrand ] = useState("");

	const onAddBrand = () => {
		dispatch(createBrand({ name: brand }));
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
					Add new brand
				</Modal.Title>
			</Modal.Header>
		<Modal.Body>
			<Form>
				<Form.Control 
					placeholder="Enter brand name..."
					value={brand}
					onChange={(e) => setBrand(e.target.value)}
				/>
			</Form>
		</Modal.Body>
		<Modal.Footer>
			<Button variant="outline-danger" onClick={onHide}>
				Close
			</Button>
			<Button variant="outline-success" onClick={onAddBrand}>
				Add
			</Button>
		</Modal.Footer>
	  </Modal>
	);
};

export default CreateBrand;