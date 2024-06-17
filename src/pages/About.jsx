import { Main } from '../containers';
import { DATA } from '../utils/data';

const About = () => {
	return (
		<div className="!h-full">
			<Main data={DATA[0].subContent} subpage />
		</div>
	);
};

export default About;
