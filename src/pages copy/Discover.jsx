import { DiscoverContainer } from '../containers';
import { discover } from '../utils/data';

const Discover = () => {
	const data = discover[0].content;
	return (
		<div className="!h-full">
			<DiscoverContainer data={data} page="discover" />
		</div>
	);
};

export default Discover;
