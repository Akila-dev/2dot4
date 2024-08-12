import { Main } from '../containers';
import { DATA } from '../utils/data';

const Home = () => {
	return (
		<div className="!h-full">
			<Main data={DATA} page="home" />
		</div>
	);
};

export default Home;
