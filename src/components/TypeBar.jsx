import { useSelector } from "react-redux";
import ListGroup from 'react-bootstrap/ListGroup';

const TypeBar = ({ typeId, onChange }) => {
	const { types } = useSelector((state) => state.type);

	return (
		<ListGroup>
			{ types.map((type) => 
				<ListGroup.Item
					variant="light"
					active={typeId === type.id}
					style={{cursor: "pointer"}}
					key={type.id}
					onClick={() => onChange(type.id)}
				>
					{type.name}
				</ListGroup.Item>
			)}
		</ListGroup>
	);
};

export default TypeBar;