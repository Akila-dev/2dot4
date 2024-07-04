/* eslint-disable react/prop-types */
import { CONTACT } from '../utils/data';
// import { useEffect, useRef, useState } from 'react';
import { useRef } from 'react';
import WheelReact from 'wheel-react';

import { CTA, ArrowDown } from '../components';
// import logo_white from '../assets/imgs/logo-white.svg';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Intro = ({ closeIntro }) => {
	// const [scrolling, setScrolling] = useState(false);
	const contact = { ...CONTACT };
	const container = useRef();
	const { contextSafe } = useGSAP({ scope: container });

	const scrollDown = contextSafe(() => {
		// setScrolling(true);

		gsap.timeline().to('.intro-content', {
			yPercent: -20,
			opacity: 0,
			delay: 0.5,
			duration: 0.75,
			stagger: 0.175,
			ease: 'power2.out',
			onComplete: () => closeIntro(),
		});
		// setTimeout(() => {
		// 	closeIntro();
		// }, 2000);

		// setTimeout(() => {
		// 	setScrolling(false);
		// }, 3000);
	});

	// useEffect(() => {
	// 	WheelReact.config({
	// 		up: () => {
	// 			if (!scrolling) {
	// 				setScrolling(true);
	// 				scrollDown();
	// 			}
	// 		},
	// 	});
	// 	// WheelReact.clearTimeout();
	// }, [scrollDown, scrolling]);

	return (
		<div
			ref={container}
			className="flex flex-col justify-between h-full w-full items-center overflow-hidden fixed top-0"
			{...WheelReact.events}
		>
			<div
				ref={container}
				className="intro-container flex flex-col justify-between h-full w-full items-center overflow-hidden fixed top-0"
			>
				<div className="bg-overlay absolute top-0 left-0 z-[-1]"></div>

				<div className="h-[45px] md:h-[56.5px] flex items-center justify-center border-b border-[--border] w-full intro-content">
					<h3 className="uppercase">{contact.brandName}</h3>
					{/* <img
						src={logo_white}
						alt="logo"
						className="h-[30px] md:h-[40px] w-auto object-cover mb-1  transition duration-500"
					/> */}
				</div>
				<div className="intro-content">
					<CTA
						title="A NEW STANDARD"
						text="2DOT4 leads a revolutionary shift in diamond industry. Setting elevated standards, fostering innovation through a robust ecosystem and diverse collaboration."
						btnText="ENTER OUR WORLD"
						onClick={() => scrollDown()}
						short
					/>
				</div>
				<div className="h-[66.5px] flex items-center justify-centerw-full intro-content">
					<ArrowDown onClick={() => scrollDown()} />
				</div>
			</div>
		</div>
	);
};

export default Intro;
