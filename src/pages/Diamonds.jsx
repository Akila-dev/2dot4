import { useEffect, useState } from 'react';
import { Main } from '../containers';
import { DATA } from '../utils/data';
import { Loading } from '../components';

const Diamonds = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, []);

	return isLoading ? (
		<Loading />
	) : (
		<div className="!h-full">
			<Main data={DATA[2].subContent} page="diamond" subpage />
		</div>
	);
};

export default Diamonds;
