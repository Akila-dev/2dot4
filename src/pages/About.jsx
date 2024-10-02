import { useEffect, useState } from 'react';
import { Main } from '../containers';
import { DATA } from '../utils/data';
import { Loading } from '../components';

const About = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, []);

	return isLoading ? (
		<Loading />
	) : (
		<div className="!h-full">
			<Main data={DATA[0].subContent} page="about" subpage />
		</div>
	);
};

export default About;
