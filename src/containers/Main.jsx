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
	BiSolidPaperPlane,
} from 'react-icons/bi';
import { PiInstagramLogoFill, PiDotsThreeOutlineFill } from 'react-icons/pi';

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
			<div className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden z-[-10]">
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
					<h3 className="uppercase w-full border-x border-[--lines] md:border-none flex items-center justify-center h-full">
						{contact.brandName}
					</h3>
					<div className="layout-sidebars layout-sidebar-r">
						<Link to="/contact" className="flex gap-[6px] items-center">
							<span className="hidden md:inline">Contact</span>{' '}
							<BiSolidMessageRoundedDetail className="text-xl md:text-lg" />
						</Link>{' '}
					</div>
				</div>
			</div>
			{/* MIDDLE */}
			{/* MIDDLE */}
			<div className="w-full flex-1 h-full flex justify-between items-center">
				<div className="!hidden md:!flex layout-sidebars !p-0 md:!pl-8 lg:!pl-10">
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
				<div className="!hidden md:!flex layout-sidebars"></div>
			</div>
			{/* BOTTOM */}
			{/* BOTTOM */}
			<div className="h-[56.5px] flex items-center justify-center w-full">
				<div className="flex justify-between items-center w-full layout-text h-full">
					<div className="layout-sidebars layout-sidebar-l">
						<BiSolidPaperPlane className="text-xl" />
						<span className="hidden md:inline">Discover</span>
					</div>
					<div className="w-full border-x border-[--lines] md:border-none flex items-center justify-center h-full">
						<ArrowDown onClick={() => scrollDown()} />
					</div>
					<div>
						<div className="!hidden md:!flex layout-sidebars layout-sidebar-r">
							{contact.socials.map((link, id) => (
								<a href={link} key={id}>
									{socialIcons[id]}
								</a>
							))}
						</div>
						<div className="!flex md:!hidden layout-sidebars layout-sidebar-r">
							<PiDotsThreeOutlineFill className="text-xl" />
						</div>
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
				className="lines border-r top-0 left-0 !h-screen md:w-[--sidebar-w-md]  lg:w-[--sidebar-w]"
			></span>
			<span
				ref={rightLine}
				className="lines border-l top-0 right-0 !h-screen md:w-[--sidebar-w-md]  lg:w-[--sidebar-w]"
			></span>
		</div>
	);
};

export default Main;
