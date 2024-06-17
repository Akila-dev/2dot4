import { Main } from '../containers';
import { DATA } from '../utils/data';

const Application = () => {
	return (
		<div className="!h-full">
			<Main data={DATA[3].subContent} subpage />
		</div>
	);
};

export default Application;
