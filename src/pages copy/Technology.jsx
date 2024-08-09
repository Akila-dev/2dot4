import { Main } from '../containers';
import { DATA } from '../utils/data';

const Technology = () => {
	return (
		<div className="!h-full">
			<Main data={DATA[1].subContent} page="technology" subpage />
		</div>
	);
};

export default Technology;
