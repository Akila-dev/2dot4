/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { CONTACT } from '../utils/data';
import { ArrowDown, MenuButton, Slider, MenuPopup } from '../components';

import logo_icon from '../assets/imgs/2dot4-icon.svg';
// import logo_white from '../assets/imgs/logo-white.svg';

gsap.registerPlugin(useGSAP);

// Assets
import {
	BiSolidMessageRoundedDetail,
	BiLogoLinkedinSquare,
	BiLogoFacebookCircle,
} from 'react-icons/bi';
import { PiInstagramLogoFill, PiDotsThreeOutlineFill } from 'react-icons/pi';

const DiscoverContainer = ({ data, page, subpage }) => {
	const container = useRef();
	const menuContainer = useRef();
	const [showMenu, setShowMenu] = useState(false);

	const { contextSafe } = useGSAP({ scope: menuContainer });

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
	// LINES ANIMATION
	useGSAP(
		() => {
			gsap.fromTo(
				'.gsap-fade-in',
				{ opacity: 0, duration: 4, ease: 'power1.out' },
				{ opacity: 1, duration: 4, ease: 'power1.out' }
			);
			gsap.from('.horizontal-line', {
				xPercent: -100,
				delay: 0.25,
				duration: 1.25,
				ease: 'sine.out',
			});
			gsap.from('.vertical-line', {
				yPercent: -100,
				delay: 1.25,
				duration: 1.25,
				ease: 'sine.out',
			});
		},
		{ scope: container }
	);

	const close = contextSafe(() => {
		gsap.to('.gsap-menu-container', {
			xPercent: -100,
			duration: 0.75,
			stagger: 0.175,
			ease: 'power2.out',
			onComplete: () => setShowMenu(false),
		});
	});

	return (
		<div ref={container} className="fixed top-0 left-0 w-full h-full">
			<div className="flex flex-col justify-between h-full w-full items-center relative overflow-hidden scroll-snap">
				{/* CONTENT */}
				<Slider data={data} page={page} subpage={subpage} />
				{/* TOP */}
				{/* TOP */}
				<div className="h-[45px] md:h-[56.5px] flex items-center justify-center relative w-full z-10 pointer-events-none">
					<div className="flex justify-between items-center w-full layout-text h-full">
						<div className="layout-sidebars layout-sidebar-l">
							<MenuButton onClick={() => setShowMenu(true)} />
						</div>
						<div className="w-full h-full">
							<Link to="/">
								<h3 className="uppercase w-full border-x border-[--lines] md:border-none flex items-center justify-center h-full pointer-events-auto">
									{contact.brandName}
									{/* <img
										src={logo_white}
										alt="logo"
										className="h-[30px] md:h-[40px] w-auto object-cover mb-1"
									/> */}
								</h3>
							</Link>
						</div>
						<div className="layout-sidebars layout-sidebar-r">
							<Link
								to="/contact"
								className="flex gap-[6px] items-center pointer-events-auto"
							>
								<span className="hidden md:inline">Contact</span>{' '}
								<BiSolidMessageRoundedDetail className="text-xl md:text-lg" />
							</Link>{' '}
						</div>
					</div>
				</div>
				{/* MIDDLE */}
				{/* MIDDLE */}
				<div className="relative w-full flex-1 flex justify-between items-center z-10 pointer-events-none">
					<div className="!hidden md:!flex layout-sidebars !p-0 md:!px-8 lg:!px-10">
						{/* Side Nav space */}
					</div>
					<div className="w-full flex items-center justify-center flex-1">
						{/* CSPACE FOR THE ACTUAL CONTENTS */}
					</div>
					<div className="!hidden md:!flex layout-sidebars"></div>
				</div>
				{/* BOTTOM */}
				{/* BOTTOM */}
				<div className="h-[45px] md:h-[56.5px] flex items-center justify-center w-full z-10 pointer-events-none ">
					<div className="flex justify-between items-center w-full layout-text h-full">
						<div className="layout-sidebars layout-sidebar-l pointer-events-auto">
							{/* <BiSolidPaperPlane className="text-xl" /> */}
							<a
								href="discover"
								className="flex items-end w-full justify-center gap-[10px]"
							>
								<img
									src={logo_icon}
									alt="logo"
									className="h-[30px] md:h-[40px] w-auto object-cover"
								/>
								{/* <span className="hidden md:inline pb-1">Discover</span> */}
							</a>
						</div>
						<div className="w-full border-x border-[--lines] md:border-none flex items-center justify-center h-full">
							<div className="hidden lg:block">
								<ArrowDown onClick={() => scrollDown()} />
							</div>
						</div>
						<div>
							<div className="!hidden md:!flex layout-sidebars layout-sidebar-r">
								{contact.socials.map((link, id) => (
									<a href={link} key={id} className="pointer-events-auto">
										{socialIcons[id]}
									</a>
								))}
							</div>
							<div className="!flex md:!hidden layout-sidebars layout-sidebar-r">
								<PiDotsThreeOutlineFill className="text-xl pointer-events-auto" />
							</div>
						</div>
					</div>
				</div>
				{/* LINES */}
				{/* LINES */}
				<span className="lines horizontal-line border-b top-0 left-0 !h-[45px] md:!h-[56.5px]"></span>
				<span className="lines horizontal-line border-t bottom-0 left-0 !h-[45px] md:!h-[56.5px] "></span>
				<span className="lines vertical-line border-r top-0 left-0 !h-full md:w-[--sidebar-w-md]  lg:w-[--sidebar-w] !hidden md:!block"></span>
				<span className="lines vertical-line border-l top-0 right-0 !h-full md:w-[--sidebar-w-md]  lg:w-[--sidebar-w] !hidden md:!block"></span>
			</div>
			{showMenu && (
				<MenuPopup
					close={() => close()}
					container={menuContainer}
					data={data}
				/>
			)}
		</div>
	);
};

export default DiscoverContainer;
