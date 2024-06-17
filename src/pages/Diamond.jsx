import { Main } from '../containers';
import { DATA } from '../utils/data';

const Diamond = () => {
	return (
		<div className="!h-full">
			<Main data={DATA[2].subContent} subpage />
		</div>
	);
};

export default Diamond;
