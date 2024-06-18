/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { CONTACT, FOOTERLINKLIST } from '../utils/data';
import {
	// CTA,
	ArrowDown,
	MenuButton,
	SideNavLink,
	Slider,
	CloseBtn,
	// ImgWithFallback,
} from '../components';

gsap.registerPlugin(useGSAP);

// Assets
import {
	BiSolidMessageRoundedDetail,
	BiLogoLinkedinSquare,
	BiLogoFacebookCircle,
	BiSolidPaperPlane,
} from 'react-icons/bi';
import { PiInstagramLogoFill, PiDotsThreeOutlineFill } from 'react-icons/pi';
import { RiCloseLargeLine } from 'react-icons/ri';

const MenuPopup = ({ close, data, container }) => {
	const { contextSafe } = useGSAP({ scope: container });

	const spinIn = contextSafe(() => {
		gsap.timeline().to('.menu-icon', {
			rotation: 360,
			opacity: 0.5,
			duration: 1,
			stagger: 0.175,
			ease: 'power2.out',
			// clearProps: 'width',
		});
	});

	const spinOut = contextSafe(() => {
		gsap.timeline().to('.menu-icon', {
			rotation: 0,
			opacity: 1,
			duration: 1,
			stagger: 0.175,
			ease: 'power2.out',
			// clearProps: 'width',
		});
	});

	useGSAP(
		() => {
			gsap.from('.gsap-menu-container', {
				xPercent: -100,
				duration: 0.75,
				stagger: 0.175,
				ease: 'power2.out',
			});
		},
		{ scope: container }
	);

	return (
		<div
			ref={container}
			className="fixed top-0 left-0 w-full sm:max-w-[375px] !z-[100] h-full"
		>
			<div className="gsap-menu-container bg-[--white] text-[--bg] w-full h-full overflow-y-auto flex flex-col gap-10 justify-between px-5 md:px-[2rem] text-xs">
				<CloseBtn onClick={() => close()} />

				<div>
					<div className="space-y-4">
						{data.map((item, id) => (
							<Link
								key={id}
								to={item.link}
								className="block uppercase text-2xl text-medium link"
							>
								{item.link}
							</Link>
						))}
					</div>
				</div>
				<div className="grid grid-cols-5 pb-[15vh] gap-2">
					<div className="space-y-4 col-span-2">
						{FOOTERLINKLIST.slice(0, 3).map((link, id) => (
							<Link
								key={id}
								to={link.link}
								className="block capitalize text-base link"
							>
								{link.label}
							</Link>
						))}
					</div>
					<div className="space-y-4 col-span-3">
						{FOOTERLINKLIST.slice(3, 6).map((link, id) => (
							<Link
								key={id}
								to={link.link}
								className="block capitalize text-base link"
							>
								{link.label}
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

const Main = ({ data, subpage }) => {
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
			gsap.from('.horizontal-line', {
				xPercent: -100,
				delay: 0.1,
				duration: 1,
				ease: 'sine.out',
			});
			gsap.from('.vertical-line', {
				yPercent: -100,
				delay: 0.8,
				duration: 1.5,
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
				<Slider data={data} subpage={subpage} />
				{/* TOP */}
				{/* TOP */}
				<div className="h-[56.5px] flex items-center justify-center relative w-full z-10 pointer-events-none">
					<div className="flex justify-between items-center w-full layout-text h-full">
						<div className="layout-sidebars layout-sidebar-l">
							<MenuButton onClick={() => setShowMenu(true)} />
						</div>
						<div className="w-full h-full">
							<Link to="/">
								<h3 className="uppercase w-full border-x border-[--lines] md:border-none flex items-center justify-center h-full pointer-events-auto">
									{contact.brandName}
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
						{/* CSPACE FOR THE ACTUAL CONTENTS */}
					</div>
					<div className="!hidden md:!flex layout-sidebars"></div>
				</div>
				{/* BOTTOM */}
				{/* BOTTOM */}
				<div className="h-[56.5px] flex items-center justify-center w-full z-10 pointer-events-none ">
					<div className="flex justify-between items-center w-full layout-text h-full">
						<div className="layout-sidebars layout-sidebar-l pointer-events-auto">
							<BiSolidPaperPlane className="text-xl" />
							<span className="hidden md:inline">Discover</span>
						</div>
						<div className="w-full border-x border-[--lines] md:border-none flex items-center justify-center h-full">
							<ArrowDown onClick={() => scrollDown()} />
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
				<span className="lines horizontal-line border-b top-0 left-0 !h-[56.5px]"></span>
				<span className="lines horizontal-line border-t bottom-0 left-0 !h-[56.5px] "></span>
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

export default Main;
