import { Main } from '../containers';
import { DATA } from '../utils/data';
import { useLocation } from 'react-router-dom';

const Home = () => {
	let { state } = useLocation();
	console.log(state);
	return (
		<div className="!h-full">
			<Main data={DATA} page="home" scroll_to={state ? state.index : ''} />
		</div>
	);
};

export default Home;
