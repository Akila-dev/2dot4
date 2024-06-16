/* eslint-disable react/prop-types */
import { CONTACT } from '../utils/data';
import { CTA, ArrowDown } from '../components';

const Intro = ({ closeIntro }) => {
	const contact = { ...CONTACT };

	const scrollDown = () => {
		closeIntro();
	};
	return (
		<div className="flex flex-col justify-between h-screen w-full items-center relative overflow-hidden">
			<div className="bg-overlay absolute top-0 left-0 z-[-1]"></div>

			<div className="h-[56.5px] flex items-center justify-center border-b border-[--border] w-full">
				<h3 className="uppercase">{contact.brandName}</h3>
			</div>
			<div>
				<CTA
					title="A NEW STANDARD"
					text="2DOT4 leads a revolutionary shift in diamond industry. Setting elevated standards, fostering innovation through a robust ecosystem and diverse collaboration."
					btnText="ENTER OUR WORLD"
					short
				/>
			</div>
			<div className="h-[56.5px] flex items-center justify-centerw-full">
				<ArrowDown onClick={() => scrollDown()} />
			</div>
		</div>
	);
};

export default Intro;
