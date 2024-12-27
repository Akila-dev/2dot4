/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { ImgWithFallback, CTA, SideNavLink } from '../components';
// import useDetectScroll from '@smakss/react-scroll-direction';
import WheelReact from 'wheel-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const getWindowsDimension = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
};

const Slide = ({ data, id, page }) => {
	// scrollTrigger: {
	// 	trigger: element.querySelector(".first"),
	// 	start: "top top",
	// 	end: "bottom center",
	// 	scrub: true
	//   }
	return (
		<div
			id={page + id}
			className={`slide w-full h-full object-cover overflow-hidden relative scroll-content transition`}
		>
			<div className="absolute !bottom-0 left-0 w-full h-screen overflow-hidden ">
				<ImgWithFallback
					src={data.imgWebp}
					fallback={data.img}
					alt={data.link}
				/>
				<div className="bg-overlay absolute top-0 left-0"></div>
			</div>
			{/* Content */}
			<div className="py-[60px] px-5 md:px-[--sidebar-w] w-full h-full">
				<div className="w-full h-full flex items-center justify-center flex-1">
					<CTA
						title={data.title}
						text={data.text}
						btnText={data.buttonText}
						href={data.link}
						short
						id={page + id}
						// short={data.short}
					/>
				</div>
			</div>
		</div>
	);
};

const SubpageSlide = ({ data, page, id }) => {
	return (
		<div
			id={page + id}
			className={`slide w-full h-full object-cover overflow-hidden relative scroll-content transition`}
		>
			<div className="absolute bottom-0 left-0 w-full h-full object-cover ">
				<ImgWithFallback
					src={data.imgWebp}
					fallback={data.img}
					alt={data.link}
				/>
				<div className="bg-overlay absolute top-0 left-0"></div>
			</div>

			{/* Content */}
			<div className="py-[60px] px-5 md:px-[--sidebar-w] w-full h-full">
				<div className="w-full h-full flex items-center justify-center flex-1">
					<CTA
						title={data.content[0].title}
						text={data.content[0].text[0]}
						btnText={data.buttonText}
						href={'../contact'}
						short
						makeTiny
						id={page + id}
						// short={data.short}
					/>
				</div>
			</div>
		</div>
	);
};

const Slider = ({ data, subpage, page }) => {
	// *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
	const [screenSize, setScreenSize] = useState(getWindowsDimension());
	const container = useRef(null);
	const [activeId, setActiveId] = useState(0);
	const { contextSafe } = useGSAP({ scope: container });
	const [isScrolling, setIsScrolling] = useState(false);

	// GET SCROLL DIRECTION
	// const { scrollDir } = useDetectScroll();

	useEffect(() => {
		const handleResize = () => {
			setScreenSize(getWindowsDimension());
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const scrollTo = contextSafe((from, to) => {
		if (
			from >= 0 &&
			from <= data.length - 1 &&
			to >= 0 &&
			to <= data.length - 1
		) {
			setIsScrolling(true);
			// if(scrolling){
			if (from !== to) {
				if (from < to) {
					gsap.timeline().fromTo(
						'#slide' + to,
						{
							height: 0,
							y: (screenSize.height * 40) / 100,
						},
						{
							height: screenSize.height,
							y: 0,
							duration: 1.5,
							ease: 'power1.out',
							delay: 0.5,
						}
					);
					gsap
						.timeline()
						.fromTo(
							'#slide' + from,
							{
								height: screenSize.height,
							},
							{
								y: -(screenSize.height * 40) / 100,
								duration: 1.5,
								ease: 'power1.out',
								delay: 0.5,
							}
						)
						.set('#slide' + from, {
							height: 0,
							y: 0,
						});
					// !TEXT
					//! TEXT
					//! TEXT
					gsap
						.timeline()
						.fromTo(
							'#slide' + from + ' ' + '.gsap-show',
							{
								opacity: 1,
								y: 0,
							},
							{
								opacity: 0,
								y: 15,
								duration: 0.65,
								stagger: 0.05,
								ease: 'power1.out',
							}
						)

						.fromTo(
							'#slide' + to + ' ' + '.gsap-show',
							{
								opacity: 0,
								y: 15,
							},
							{
								opacity: 1,
								y: 0,
								duration: 0.75,
								stagger: 0.125,
								ease: 'power1.out',
								delay: 1.1,
							}
						);
				} else {
					gsap
						.timeline()
						.set('#slide' + from, {
							height: screenSize.height,
							y: 0,
						})
						.fromTo(
							'#slide' + from,
							{
								height: screenSize.height,
								y: 0,
							},
							{
								height: 0,
								y: (screenSize.height * 40) / 100,
								duration: 1.5,
								ease: 'power1.out',
								delay: 0.5,
							}
						);
					gsap
						.timeline()
						.set('#slide' + to, {
							y: -(screenSize.height * 40) / 100,
							height: screenSize.height,
						})
						.fromTo(
							'#slide' + to,
							{
								y: -(screenSize.height * 40) / 100,
								height: screenSize.height,
							},
							{
								y: 0,
								height: screenSize.height,
								duration: 1.5,
								ease: 'power1.out',
								delay: 0.5,
							}
						)
						.set('#slide' + from, {
							height: 0,
							y: 0,
						});
					//! TEXT
					//! TEXT
					//! TEXT
					gsap
						.timeline()
						.fromTo(
							'#slide' + from + ' ' + '.gsap-show',
							{
								opacity: 1,
								y: 0,
							},
							{
								opacity: 0,
								y: 15,
								duration: 0.65,
								stagger: 0.05,
								ease: 'power1.out',
							}
						)

						.fromTo(
							'#slide' + to + ' ' + '.gsap-show',
							{
								opacity: 0,
								y: 15,
							},
							{
								opacity: 1,
								y: 0,
								// delay: 1,
								duration: 0.75,
								stagger: 0.125,
								ease: 'power1.out',
								delay: 1.1,
							}
						);
				}
				setActiveId(to);
				setTimeout(() => {
					setIsScrolling(false);
				}, 3000);
			}
		}
	});

	useEffect(() => {
		WheelReact.config({
			left: () => {
				// WheelReact.clearTimeout();
				console.log('wheel left detected.');
			},
			right: () => {
				// WheelReact.clearTimeout();
				console.log('wheel right detected.');
			},
			up: () => {
				// WheelReact.clearTimeout();
				if (!isScrolling) {
					if (activeId < data.length - 1) {
						console.log('wheel up detected.');
						setIsScrolling(true);
						scrollTo(activeId, activeId + 1);
					}
				}
			},
			down: () => {
				// WheelReact.clearTimeout();
				if (!isScrolling) {
					if (activeId > 0) {
						console.log('wheel down detected.');
						setIsScrolling(true);
						scrollTo(activeId, activeId - 1);
					}
				}
			},
		});
	}, [activeId, data.length, scrollTo, isScrolling]);

	return (
		<div
			ref={container}
			{...WheelReact.events}
			className="absolute bottom-0 left-0 w-full h-full object-cover overflow-hidden"
		>
			<div className="scroll-container h-full gsap-fade-in">
				{data.map((item, index) => (
					<div
						id={'slide' + index}
						className={`scroll-item fixed bottom-0 overflow-hidden w-full h-0`}
						key={index}
					>
						<div className="h-full">
							{subpage ? (
								<SubpageSlide data={item} id={index} page={page} />
							) : (
								<Slide data={item} id={index} page={page} />
							)}
						</div>
					</div>
				))}
			</div>

			{/* Sidebar */}
			<div className="!hidden md:!flex layout-sidebars !p-0 md:!px-8 lg:!px-10 fixed top-0 left-0 h-full gsap-fade-in">
				<div className="md-flex-y-3">
					{data.map((item, id) => (
						<SideNavLink
							data={item}
							id={id}
							key={id}
							onClick={() => scrollTo(activeId, id)}
							active={activeId}
						/>
					))}
				</div>
			</div>
			{/* TOP NAV FOR MOBILE */}
			<div className=" md:hidden gsap-fade-in w-full h-[46.5px] border-b-0 border-[--border] fixed top-[56.5px] t">
				<div className="flex gap-5 items-center h-full w-full overflow-x-scroll no-scrollbar px-[25%]">
					{data.map((item, id) => (
						<div key={id} className="block text-center">
							<SideNavLink
								data={item}
								// id={id}
								key={id}
								onClick={() => scrollTo(activeId, id)}
								active={activeId}
							/>
						</div>
					))}
				</div>
				<span className="horizontal-line absolute top-0 left-0 w-full h-[46.5px] border-b border-[--border] z-[-1]"></span>
			</div>
		</div>
	);
};

export default Slider;
