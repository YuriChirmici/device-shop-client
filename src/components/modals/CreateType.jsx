import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { createType } from '../../store/actionCreators/type';
import { useDispatch } from 'react-redux';

const CreateType = ({ show, onHide }) => {
	const dispatch = useDispatch();
	const [ type, setType ] = useState("");

	const onAddType = () => {
		dispatch(createType({ name: type }));
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
					Add new type
				</Modal.Title>
			</Modal.Header>
		<Modal.Body>
			<Form>
				<Form.Control 
					placeholder="Enter type name..."
					value={type}
					onChange={(e) => setType(e.target.value)}
				/>
			</Form>
		</Modal.Body>
		<Modal.Footer>
			<Button variant="outline-danger" onClick={onHide}>
				Close
			</Button>
			<Button variant="outline-success" onClick={onAddType}>
				Add
			</Button>
		</Modal.Footer>
	  </Modal>
	);
};

export default CreateType;