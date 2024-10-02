import { useEffect, useState } from 'react';
import { Main } from '../containers';
import { DATA } from '../utils/data';
import { useLocation } from 'react-router-dom';
import { Loading } from '../components';

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);
	let { state } = useLocation();
	console.log(state);

	useEffect(() => {
		setIsLoading(false);
	}, []);

	return isLoading ? (
		<Loading />
	) : (
		<div className="!h-full">
			<Main data={DATA} page="home" scroll_to={state ? state.index : ''} />
		</div>
	);
};

export default Home;
