import { useSelector } from 'react-redux';
import Pagination from "react-bootstrap/Pagination";

const Paginator = ({ page, setPage }) => {
	const limit = 8;
	const { totalCount } = useSelector((state) => state.device);

	const pagesNum = Math.ceil(totalCount / limit);
	let pages = [];
	for (let i = 0; i < pagesNum; i++) {
		pages.push(i + 1);
	}

	return (
		<Pagination className='mt-5'>
			{ pages.map((p) =>
				<Pagination.Item
					key={p}
					active={p === page}
					onClick={() => setPage(p)}
				>
					{p}
				</Pagination.Item>
			)}

		</Pagination>
	);
};

export default Paginator;