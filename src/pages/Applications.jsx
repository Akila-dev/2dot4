import { useEffect, useState } from 'react';
import { Main } from '../containers';
import { DATA } from '../utils/data';
import { Loading } from '../components';

const Applications = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, []);

	return isLoading ? (
		<Loading />
	) : (
		<div className="!h-full">
			<Main data={DATA[3].subContent} page="application" subpage />
		</div>
	);
};

export default Applications;
