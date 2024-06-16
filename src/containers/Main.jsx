/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT } from '../utils/data';
import {
	CTA,
	ArrowDown,
	MenuButton,
	SideNav,
	ImgWithFallback,
} from '../components';

// Assets
import {
	BiSolidMessageRoundedDetail,
	BiLogoLinkedinSquare,
	BiLogoFacebookCircle,
} from 'react-icons/bi';
import { PiInstagramLogoFill } from 'react-icons/pi';

const Main = ({ data }) => {
	const topLine = useRef(null);
	const bottomLine = useRef(null);
	const leftLine = useRef(null);
	const rightLine = useRef(null);

	const socialIcons = [
		<PiInstagramLogoFill className="social-icons" />,
		<BiLogoLinkedinSquare className="social-icons" />,
		<BiLogoFacebookCircle className="social-icons" />,
	];

	const contact = { ...CONTACT };

	const scrollDown = () => {
		console.log('scroll down');
	};

	// *ANIMATION CODES
	// eslint-disable-next-line no-unused-vars
	const [dataIndex, setDataIndex] = useState(0);

	return (
		<div className="flex flex-col justify-between h-screen w-full items-center relative">
			{/* BG IMAGE */}
			<div className="absolute top-0 left-0 w-full h-screen overflow-hidden z-[-10]">
				<ImgWithFallback
					img={data[dataIndex].imgWebp}
					fallback={data[dataIndex].img}
					alt={data[dataIndex].link}
				/>
				<div className="bg-overlay absolute top-0 left-0"></div>
			</div>
			{/* TOP */}
			{/* TOP */}
			<div className="h-[56.5px] flex items-center justify-center relative w-full">
				<div className="flex justify-between items-center w-full layout-text h-full">
					<div className="layout-sidebars layout-sidebar-l">
						<MenuButton />
					</div>
					<h3 className="uppercase">{contact.brandName}</h3>
					<div className="layout-sidebars layout-sidebar-r">
						<Link to="/contact" className="flex gap-[6px] items-center">
							<span className="hidden md:inline">Contact</span>{' '}
							<BiSolidMessageRoundedDetail className="text-base" />
						</Link>{' '}
					</div>
				</div>
			</div>
			{/* MIDDLE */}
			{/* MIDDLE */}
			<div className="w-full flex-1 h-full flex justify-between items-center">
				<div className="layout-sidebars">
					<SideNav data={data} active={0} />
				</div>
				<div className="w-full flex items-center justify-center flex-1">
					<CTA
						title="A NEW STANDARD"
						text="2DOT4 leads a revolutionary shift in diamond industry. Setting elevated standards, fostering innovation through a robust ecosystem and diverse collaboration."
						btnText="ENTER OUR WORLD"
						short
					/>
				</div>
				<div className="layout-sidebars"></div>
			</div>
			{/* BOTTOM */}
			{/* BOTTOM */}
			<div className="h-[56.5px] flex items-center justify-center w-full">
				<div className="flex justify-between items-center w-full layout-text h-full">
					<div className="layout-sidebars layout-sidebar-l">Discover</div>
					<ArrowDown onClick={() => scrollDown()} />
					<div className="layout-sidebars layout-sidebar-r">
						{contact.socials.map((link, id) => (
							<a href={link} key={id}>
								{socialIcons[id]}
							</a>
						))}
					</div>
				</div>
			</div>
			{/* LINES */}
			{/* LINES */}
			<span
				ref={topLine}
				className="lines border-b top-0 left-0 !h-[56.5px] "
			></span>
			<span
				ref={bottomLine}
				className="lines border-t bottom-0 left-0 !h-[56.5px] "
			></span>
			<span
				ref={leftLine}
				className="lines border-r top-0 left-0 !h-screen !w-[--sidebar-w]"
			></span>
			<span
				ref={rightLine}
				className="lines border-l top-0 right-0 !h-screen !w-[--sidebar-w]"
			></span>
		</div>
	);
};

export default Main;
