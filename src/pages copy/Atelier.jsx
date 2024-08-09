import { DiscoverContainer } from '../containers';
import { ATELIER } from '../utils/data';

const Atelier = () => {
	const data = ATELIER.subContent;
	return (
		<div className="!h-full">
			<DiscoverContainer data={data} page="discover" subpage />
		</div>
	);
};

export default Atelier;
