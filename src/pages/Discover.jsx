import { useEffect, useState } from 'react';
import { DiscoverContainer } from '../containers';
import { discover } from '../utils/data';
import { Loading } from '../components';

const Discover = () => {
	const [isLoading, setIsLoading] = useState(true);
	const data = discover[0].content;

	useEffect(() => {
		setIsLoading(false);
	}, []);

	return isLoading ? (
		<Loading />
	) : (
		<div className="!h-full">
			<DiscoverContainer data={data} page="discover" />
		</div>
	);
};

export default Discover;
