import { Main } from '../containers';
import { DATA } from '../utils/data';

const Applications = () => {
	return (
		<div className="!h-full">
			<Main data={DATA[3].subContent} page="application" subpage />
		</div>
	);
};

export default Applications;
