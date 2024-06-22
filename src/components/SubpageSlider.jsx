/* eslint-disable react/prop-types */
import { ImgWithFallback, CTASubSlider } from '../components';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

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
							src={data.imgWebp}
							fallback={data.img}
							alt={data.link}
						/>
						<div className="bg-overlay absolute top-0 left-0"></div>
					</div>
					{/* Content */}
					<div className="fixed  md:py-[60px] px-5 md:px-[305px] w-screen h-full flex items-center justify-between ">
						<div className="w-full h-full flex items-center justify-center flex-1">
							<CTASubSlider
								title={data.content[0].title}
								text={text}
								btnText={data.buttonText}
								href={data.link}
								short
								id={page + id}
								// short={data.short}
							/>
							{data.content[0].text.length > 1 && (
								<div className="hidden lg:flex items-center justify-center !fixed w-full bottom-[57.5px] h-[50px] text-xs tracking-wider font-medium">
									0{id + 1}
									<span className="px-1">/</span>0{data.content[0].text.length}
								</div>
							)}
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
			from <= data.content[0].text.length - 1 &&
			to >= 0 &&
			to <= data.content[0].text.length - 1
		) {
			var targetTo = '#' + String(page + id + to);
			var targetFrom = '#' + String(page + id + from);
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
				}
				setTimeout(() => {
					setActiveId(to);
				}, 500);
			}
		}
	});

	const next = contextSafe(() => {
		if (activeId < data.content[0].text.length - 1) {
			console.log('test next');
			scrollTo(activeId, activeId + 1);
		}
	});

	const prev = contextSafe(() => {
		if (activeId > 0) {
			console.log('test prev');
			scrollTo(activeId, activeId - 1);
		}
	});

	return (
		<div
			ref={container}
			className="w-full h-full overflow-hidden relative right-0"
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
			<div className="hidden lg:flex w-[80px] xl:w-[100px] h-full justify-center items-center fixed lg:left-[--sidebar-w]">
				{data.content[0].text.length > 1 && activeId !== 0 && (
					<button className="hover:opacity-70" onClick={() => prev()}>
						<PiCaretLeftThin className="text-4xl font-light" />
					</button>
				)}
			</div>
			<div className="hidden lg:flex w-[80px] xl:w-[100px] h-full justify-center items-center fixed lg:right-[--sidebar-w]">
				{data.content[0].text.length > 1 &&
					activeId !== data.content[0].text.length - 1 && (
						<button className="hover:opacity-70" onClick={() => next()}>
							<PiCaretRightThin className="text-4xl font-light" />
						</button>
					)}
			</div>
		</div>
	);
};

export default SubpageSlider;
