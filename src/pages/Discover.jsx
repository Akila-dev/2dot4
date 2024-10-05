import { useEffect, useState } from 'react';
import { DiscoverContainer } from '../containers';
import { discover } from '../utils/data';
import { Loading } from '../components';

const Discover = () => {
	const [isLoading, setIsLoading] = useState(true);
	const data = discover.subContent;

	useEffect(() => {
		setIsLoading(false);
	}, []);

	return isLoading ? (
		<Loading />
	) : (
		<div className="!h-full">
			<DiscoverContainer data={data} page="discover" subpage />
		</div>
	);
};

export default Discover;
