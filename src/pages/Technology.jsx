import { useEffect, useState } from 'react';
import { Main } from '../containers';
import { DATA } from '../utils/data';
import { Loading } from '../components';

const Technology = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, []);

	return isLoading ? (
		<Loading />
	) : (
		<div className="!h-full">
			<Main data={DATA[1].subContent} page="technology" subpage />
		</div>
	);
};

export default Technology;
