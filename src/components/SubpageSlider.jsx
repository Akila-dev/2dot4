/* eslint-disable react/prop-types */
import { ImgWithFallback, CTASubSlider } from '../components';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// import WheelReact from 'wheel-react';

import { PiCaretLeftThin, PiCaretRightThin } from 'react-icons/pi';

gsap.registerPlugin(useGSAP);

const getWindowsDimension = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
};

const Slide = ({ data, text, id, page, sectionId }) => {
	return (
		<div
			id={page + sectionId + id}
			className={`scroll-item-sub absolute top-0 bottom-0 !right-0 overflow-hidden h-full w-0`}
		>
			<div className="h-full w-full">
				<div
					className={`slide w-full h-full object-cover overflow-hidden relative scroll-content transition`}
				>
					<div className="absolute !bottom-0 !right-0 w-screen h-screen overflow-hidden ">
						<ImgWithFallback
							src={data.imgWebp[id]}
							fallback={data.img[id]}
							alt={data.link + id}
						/>
						<div className="bg-overlay absolute top-0 left-0"></div>
					</div>
					{/* Content */}
					<div className="fixed  md:py-[60px] px-5 md:px-[305px] w-screen h-full flex items-center justify-between">
						<div className="w-full h-full flex items-center justify-center flex-1">
							<CTASubSlider
								title={
									data.content[0].title.length > 1
										? data.content[0].title[id]
										: data.content[0].title
								}
								text={text}
								btnText={
									data.content[0].text.length === id + 1 ? data.buttonText : ''
								}
								href={'/contact'}
								short
								id={page + id}
								// short={data.short}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const SubpageSlider = ({ data, id, page }) => {
	// *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
	const [screenSize, setScreenSize] = useState(getWindowsDimension());
	const container = useRef(null);
	const [activeId, setActiveId] = useState(0);
	const { contextSafe } = useGSAP({ scope: container });
	// const [isSideScrolling, setIsSideScrolling] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setScreenSize(getWindowsDimension());
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useGSAP(
		() => {
			gsap.fromTo(
				'.gsap-nav-controller',
				{
					opacity: 0,
					y: 15,
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.75,
					stagger: 0.175,
					ease: 'power2.out',
					delay: 0.5,
				}
			);
		},
		{ scope: container }
	);

	const scrollTo = contextSafe((from, to) => {
		if (
			from >= 0 &&
			from <= data.content[0].text.length - 1 &&
			to >= 0 &&
			to <= data.content[0].text.length - 1
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
					setActiveId(to);
				}, 500);
				// setTimeout(() => {
				// 	setIsSideScrolling(false);
				// }, 3000);
			}
		}
	});

	const next = contextSafe(() => {
		if (activeId < data.content[0].text.length - 1) {
			console.log('test next');
			scrollTo(activeId, activeId + 1);
			// setIsSideScrolling(true);
		}
	});

	const prev = contextSafe(() => {
		if (activeId > 0) {
			console.log('test prev');
			scrollTo(activeId, activeId - 1);
			// setIsSideScrolling(true);
		}
	});

	// useEffect(() => {
	// 	WheelReact.config({
	// 		left: () => {
	// 			if (!isSideScrolling) {
	// 				setIsSideScrolling(true);
	// 				next();
	// 			}
	// 		},
	// 		right: () => {
	// 			if (!isSideScrolling) {
	// 				setIsSideScrolling(true);
	// 				prev();
	// 			}
	// 		},
	// 	});
	// }, [isSideScrolling, next, prev]);

	return (
		<div
			ref={container}
			className="w-full h-full overflow-hidden relative right-0"
			// {...WheelReact.events}
		>
			{data.content[0].text.map((text, index) => (
				<Slide
					key={index}
					data={data}
					text={text}
					sectionId={id}
					id={index}
					page={page}
					// next={() => next()}
					// prev={() => prev()}
				/>
			))}
			<div className="gsap-nav-controller hidden lg:flex w-[80px] xl:w-[100px] h-full justify-center items-center fixed lg:left-[--sidebar-w]">
				{data.content[0].text.length > 1 && activeId !== 0 && (
					<button className="hover:opacity-70" onClick={() => prev()}>
						<PiCaretLeftThin className="text-4xl font-light" />
					</button>
				)}
			</div>
			<div className="gsap-nav-controller hidden lg:flex w-[80px] xl:w-[100px] h-full justify-center items-center fixed lg:right-[--sidebar-w]">
				{data.content[0].text.length > 1 &&
					activeId !== data.content[0].text.length - 1 && (
						<button className="hover:opacity-70" onClick={() => next()}>
							<PiCaretRightThin className="text-4xl font-light" />
						</button>
					)}
			</div>
			{data.content[0].text.length > 1 && (
				<div className="gsap-nav-controller hidden lg:flex items-center justify-center !absolute w-full bottom-[57.5px] left-0 h-[50px] text-xs tracking-wider font-medium">
					0{activeId + 1}
					<span className="px-1">/</span>0{data.content[0].text.length}
				</div>
			)}

			{/* MOBILE */}
			<div className="gsap-nav-controller lg:hidden items-center justify-center !absolute w-full bottom-0 left-0 h-[45px] md:h-[57.5px] text-xs tracking-wider font-medium px-[--sidebar-w-sm] md:px-[--sidebar-w-md] ">
				<div className=" h-full w-full flex items-center justify-center gap-5 ">
					<div className="gsap-nav-controller lg:hidden w-[35px]  h-full flex items-center justify-start">
						{data.content[0].text.length > 1 && activeId !== 0 && (
							<button className="hover:opacity-70" onClick={() => prev()}>
								<PiCaretLeftThin className="text-lg font-light" />
							</button>
						)}
					</div>
					<div className="gsap-nav-controller lg:hidden bg-green-800 h-full">
						{data.content[0].text.length > 1 && (
							<div className="gsap-nav-controller flex items-center justify-center !absolute w-full h-full text-xs tracking-wider font-medium">
								0{activeId + 1}
								<span className="px-1">/</span>0{data.content[0].text.length}
							</div>
						)}
					</div>
					<div className="gsap-nav-controller lg:hidden w-[35px]  h-full flex items-center justify-end">
						{data.content[0].text.length > 1 &&
							activeId !== data.content[0].text.length - 1 && (
								<button className="hover:opacity-70" onClick={() => next()}>
									<PiCaretRightThin className="text-lg font-light" />
								</button>
							)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubpageSlider;
