/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { SideNavLink, Slide, SubpageSlider } from '../components';
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

const Slider = ({ data, subpage, page }) => {
	// *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
	const [screenSize, setScreenSize] = useState(getWindowsDimension());
	const container = useRef(null);
	const [activeId, setActiveId] = useState(0);
	const [subActiveId, setsubActiveId] = useState(0);
	const { contextSafe } = useGSAP({ scope: container });
	const [isScrolling, setIsScrolling] = useState(false);

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
							duration: 1,
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
								duration: 1,
								ease: 'power1.out',
								delay: 0.5,
							}
						)
						.set('#slide' + from, {
							height: 0,
							y: 0,
							delay: 0.5,
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
								duration: 0.35,
								stagger: 0.1,
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
								duration: 0.35,
								stagger: 0.1,
								ease: 'power1.out',
								delay: 0.65,
							}
						);
					// !CONTROLS
					//! CONTROLS
					//! CONTROLS
					gsap
						.timeline()
						.fromTo(
							'#slide' + from + ' ' + '.gsap-nav-controller',
							{
								opacity: 1,
								y: 0,
							},
							{
								opacity: 0,
								y: 15,
								duration: 0.35,
								// stagger: 0.1,
								ease: 'power1.out',
							}
						)

						.fromTo(
							'#slide' + to + ' ' + '.gsap-nav-controller',
							{
								opacity: 0,
								y: 15,
							},
							{
								opacity: 1,
								y: 0,
								duration: 0.35,
								// stagger: 0.1,
								ease: 'power1.out',
								delay: 1,
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
								duration: 1,
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
								duration: 1,
								ease: 'power1.out',
								delay: 0.25,
							}
						)
						.set('#slide' + from, {
							height: 0,
							y: 0,
							delay: 0.5,
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
								duration: 0.35,
								stagger: 0.1,
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
								duration: 0.35,
								stagger: 0.1,
								ease: 'power1.out',
								delay: 0.45,
							}
						);
					// !CONTROLLER
					// !CONTROLLER
					// !CONTROLLER
					gsap
						.timeline()
						.fromTo(
							'#slide' + from + ' ' + '.gsap-nav-controller',
							{
								opacity: 1,
								y: 0,
							},
							{
								opacity: 0,
								y: 15,
								duration: 0.35,
								// stagger: 0.1,
								ease: 'power1.out',
							}
						)

						.fromTo(
							'#slide' + to + ' ' + '.gsap-nav-controller',
							{
								opacity: 0,
								y: 15,
							},
							{
								opacity: 1,
								y: 0,
								// delay: 1,
								duration: 0.35,
								// stagger: 0.1,
								ease: 'power1.out',
								delay: 1,
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

	const subScrollTo = contextSafe((from, to, id) => {
		if (
			from >= 0 &&
			from <= data[id].content[0].text.length - 1 &&
			to >= 0 &&
			to <= data[id].content[0].text.length - 1
		) {
			var targetTo = '#' + String(page + id + to);
			var targetFrom = '#' + String(page + id + from);
			// setIsSideScrolling(true);
			if (from !== to) {
				if (from < to) {
					gsap
						.timeline()
						.set(targetTo, {
							width: 0,
							x: (screenSize.width * 20) / 100,
						})
						.fromTo(
							targetTo,
							{
								width: 0,
								x: (screenSize.width * 20) / 100,
							},
							{
								width: screenSize.width,
								x: 0,
								duration: 1,
								ease: 'power1.out',
								delay: 0.5,
							}
						);
					gsap
						.timeline()
						.fromTo(
							targetFrom,
							{
								width: screenSize.width,
							},
							{
								x: -(screenSize.width * 20) / 100,
								duration: 1,
								ease: 'power1.out',
								delay: 0.5,
							}
						)
						.set(targetFrom, {
							width: 0,
							x: 0,
							delay: 0.5,
						});
					// !TEXT
					//! TEXT
					//! TEXT
					gsap
						.timeline()
						.fromTo(
							targetFrom + ' ' + '.gsap-show',
							{
								opacity: 1,
								y: 0,
							},
							{
								opacity: 0,
								y: 15,
								duration: 0.35,
								stagger: 0.1,
								ease: 'power1.out',
							}
						)
						.fromTo(
							targetTo + ' ' + '.gsap-show',
							{
								opacity: 0,
								y: 15,
							},
							{
								opacity: 1,
								y: 0,
								duration: 0.35,
								stagger: 0.1,
								ease: 'power1.out',
								delay: 1,
							}
						);
					// !CONTROLLER
					// !CONTROLLER
					// !CONTROLLER
					gsap
						.timeline()
						.fromTo(
							targetFrom + ' ' + '.gsap-nav-controller',
							{
								opacity: 1,
								y: 0,
							},
							{
								opacity: 0,
								y: 15,
								duration: 0.35,
								// stagger: 0.1,
								ease: 'power1.out',
							}
						)

						.fromTo(
							targetTo + ' ' + '.gsap-nav-controller',
							{
								opacity: 0,
								y: 15,
							},
							{
								opacity: 1,
								y: 0,
								duration: 0.35,
								// stagger: 0.1,
								ease: 'power1.out',
								delay: 1,
							}
						);
				} else {
					gsap
						.timeline()
						.set(targetFrom, {
							width: screenSize.width,
							x: 0,
						})
						.fromTo(
							targetFrom,
							{
								width: screenSize.width,
								x: 0,
							},
							{
								width: 0,
								x: (screenSize.width * 20) / 100,
								duration: 1,
								ease: 'power1.out',
								delay: 0.5,
							}
						);
					gsap
						.timeline()
						.set(targetTo, {
							x: -(screenSize.width * 20) / 100,
							width: screenSize.width,
						})
						.fromTo(
							targetTo,
							{
								x: -(screenSize.width * 20) / 100,
								width: screenSize.width,
							},
							{
								x: 0,
								width: screenSize.width,
								duration: 1,
								ease: 'power1.out',
								delay: 0.25,
							}
						)
						.set(targetFrom, {
							width: 0,
							x: 0,
							delay: 0.5,
						});
					//! TEXT
					//! TEXT
					//! TEXT
					gsap
						.timeline()
						.fromTo(
							targetFrom + ' ' + '.gsap-show',
							{
								opacity: 1,
								y: 0,
							},
							{
								opacity: 0,
								y: 15,
								duration: 0.35,
								stagger: 0.1,
								ease: 'power1.out',
							}
						)

						.fromTo(
							targetTo + ' ' + '.gsap-show',
							{
								opacity: 0,
								y: 15,
							},
							{
								opacity: 1,
								y: 0,
								// delay: 1,
								duration: 0.35,
								stagger: 0.1,
								ease: 'power1.out',
								delay: 0.85,
							}
						);
					// !CONTROLLER
					// !CONTROLLER
					// !CONTROLLER
					gsap
						.timeline()
						.fromTo(
							targetFrom + ' ' + '.gsap-nav-controller',
							{
								opacity: 1,
								y: 0,
							},
							{
								opacity: 0,
								y: 15,
								duration: 0.35,
								// stagger: 0.1,
								ease: 'power1.out',
							}
						)

						.fromTo(
							targetTo + ' ' + '.gsap-nav-controller',
							{
								opacity: 0,
								y: 15,
							},
							{
								opacity: 1,
								y: 0,
								duration: 0.35,
								// stagger: 0.1,
								ease: 'power1.out',
								delay: 1,
							}
						);
				}
				setTimeout(() => {
					setsubActiveId(to);
				}, 500);
				// setTimeout(() => {
				// 	setIsSideScrolling(false);
				// }, 3000);
			}
		}
	});

	// const next = contextSafe(() => {
	// 	if (activeId < data.content[0].text.length - 1) {
	// 		console.log('test next');
	// 		scrollTo(activeId, activeId + 1, id);
	// 		// setIsSideScrolling(true);
	// 	}
	// });

	// const prev = contextSafe(() => {
	// 	if (activeId > 0) {
	// 		console.log('test prev');
	// 		scrollTo(activeId, activeId - 1, id);
	// 		// setIsSideScrolling(true);
	// 	}
	// });

	useEffect(() => {
		WheelReact.config({
			left: () => {
				if (page === 'home') {
					if (!isScrolling) {
						if (activeId < data.length - 1) {
							console.log('wheel left detected.');
							setIsScrolling(true);
							scrollTo(activeId, activeId + 1);
						}
					}
				}
			},
			right: () => {
				if (page === 'home') {
					if (!isScrolling) {
						if (activeId > 0) {
							console.log('wheel right detected.');
							setIsScrolling(true);
							scrollTo(activeId, activeId - 1);
						}
					}
				}
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
	}, [activeId, data.length, scrollTo, isScrolling, page]);

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
								<SubpageSlider
									data={item}
									id={index}
									page={page}
									scrollTo={subScrollTo}
									activeId={subActiveId}
									setActiveId={setsubActiveId}
								/>
							) : (
								<Slide data={item} id={index} page={page} />
							)}
						</div>
					</div>
				))}
			</div>
			{/* Sidebar */}
			<div
				className={
					page === 'discover'
						? 'hidden'
						: '!hidden md:!flex layout-sidebars !p-0 md:!px-8 lg:!px-10 fixed top-0 left-0 h-full gsap-fade-in'
				}
			>
				<div className="md:space-y-3">
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
			<div
				className={
					page === 'discover'
						? 'hidden'
						: 'md:hidden gsap-fade-in w-full h-[40px] border-b-0 border-[--border] fixed top-[45px] md:top-[56.5px]'
				}
			>
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
				<span className="horizontal-line absolute top-0 left-0 w-full h-[40px] border-b border-[--border] z-[-1]"></span>
			</div>
		</div>
	);
};

export default Slider;
