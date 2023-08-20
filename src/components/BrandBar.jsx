import { useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';

const BrandBar = ({ brandId, onChange }) => {
	const { brands } = useSelector((state) => state.brand);

	return (
		<div className="d-flex flex-wrap">
			{ brands.map((brand) => 
				<Card
					key={brand.id}
					className="p-2"
					style={{cursor: "pointer"}}
					border={brandId === brand.id ? "dark" : "light"}
					onClick={() =>onChange(brand.id)}
				>
					{brand.name}
				</Card>
			)}
		</div>
	);
};

export default BrandBar;