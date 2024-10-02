import { useEffect, useState } from 'react';
import { DiscoverContainer } from '../containers';
import { ATELIER } from '../utils/data';
import { Loading } from '../components';

const Atelier = () => {
	const data = ATELIER.subContent;
	const [isLoading, setIsLoading] = useState(true);

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

export default Atelier;
