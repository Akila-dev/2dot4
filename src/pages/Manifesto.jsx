import { useEffect, useState } from 'react';
import { DiscoverContainer } from '../containers';
import { manifesto } from '../utils/data';
import { Loading } from '../components';

const Manifesto = () => {
	const [isLoading, setIsLoading] = useState(true);
	const data = manifesto.subContent;

	useEffect(() => {
		setIsLoading(false);
	}, []);

	return isLoading ? (
		<Loading />
	) : (
		<div className="!h-full">
			<DiscoverContainer data={data} page="manifesto" subpage />
		</div>
	);
};

export default Manifesto;
