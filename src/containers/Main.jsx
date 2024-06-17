/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT } from '../utils/data';
import {
	// CTA,
	ArrowDown,
	MenuButton,
	SideNavLink,
	Slider,
	// ImgWithFallback,
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

	// !ANIMATION CODES
	// !ANIMATION CODES
	// !ANIMATION CODES
	// !ANIMATION CODES

	return (
		<div className="fixed top-0 left-0 w-full h-screen">
			<div className="flex flex-col justify-between h-screen w-full items-center relative overflow-hidden scroll-snap">
				{/* CONTENT */}
				<Slider data={data} />
				{/* TOP */}
				{/* TOP */}
				<div className="h-[56.5px] flex items-center justify-center relative w-full z-10 pointer-events-none">
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
				<div className="w-full flex-1 flex justify-between items-center z-10 pointer-events-none">
					<div className="!hidden md:!flex layout-sidebars !p-0 md:!pl-8 lg:!pl-10">
						<div className="md:space-y-3">
							{data.map((item, id) => (
								<SideNavLink
									data={item}
									id={id}
									key={id}
									// active={dataIndex}
									// onClick={() => scrollToSection(id)}
								/>
							))}
						</div>
					</div>
					<div className="w-full flex items-center justify-center flex-1">
						{/* <CTA
						title={displayedData.title}
						text={displayedData.text}
						btnText={displayedData.buttonText}
						short
					/> */}
					</div>
					<div className="!hidden md:!flex layout-sidebars"></div>
				</div>
				{/* BOTTOM */}
				{/* BOTTOM */}
				<div className="h-[56.5px] flex items-center justify-center w-full z-10 pointer-events-none ">
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
		</div>
	);
};

export default Main;
