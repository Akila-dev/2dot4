/* eslint-disable react/prop-types */
import { ImgWithFallback, CTA } from '../components';
import { useState, useEffect, useRef } from 'react';
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

const Slide = ({ data, text, id, page, sectionId }) => {
	return (
		<div
			id={page + sectionId + id}
			className={`slide min-w-[100vw] max-w-[100vw] h-full object-cover overflow-hidden relative scroll-content transition`}
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
			<div className="md:py-[60px] px-5 md:px-[--sidebar-w] w-full h-full">
				<div className="w-full h-full flex items-center justify-center flex-1">
					<CTA
						title={data.content[0].title}
						text={text}
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

const SubpageSlider = ({ data, id, page }) => {
	// // *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
	// const [screenSize, setScreenSize] = useState(getWindowsDimension());
	// const container = useRef(null);
	// const [activeId, setActiveId] = useState(0);
	// const { contextSafe } = useGSAP({ scope: container });
	// const [isScrolling, setIsScrolling] = useState(false);

	// useEffect(() => {
	// 	const handleResize = () => {
	// 		setScreenSize(getWindowsDimension());
	// 	};

	// 	window.addEventListener('resize', handleResize);

	// 	return () => window.removeEventListener('resize', handleResize);
	// }, []);

	// const scrollTo = contextSafe((from, to) => {
	// 	if (
	// 		from >= 0 &&
	// 		from <= data.content[0].text - 1 &&
	// 		to >= 0 &&
	// 		to <= data.content[0].text - 1
	// 	) {
	// 		setIsScrolling(true);
	// 		// if(scrolling){
	// 		if (from !== to) {
	// 			if (from < to) {
	// 				gsap.timeline().fromTo(
	// 					'#' + page + id + to,
	// 					{
	// 						height: 0,
	// 						y: (screenSize.height * 40) / 100,
	// 					},
	// 					{
	// 						height: screenSize.height,
	// 						y: 0,
	// 						duration: 1.5,
	// 						ease: 'power1.out',
	// 						delay: 0.5,
	// 					}
	// 				);
	// 				gsap
	// 					.timeline()
	// 					.fromTo(
	// 						'#' + page + id + from,
	// 						{
	// 							height: screenSize.height,
	// 						},
	// 						{
	// 							y: -(screenSize.height * 40) / 100,
	// 							duration: 1.5,
	// 							ease: 'power1.out',
	// 							delay: 0.5,
	// 						}
	// 					)
	// 					.set('#' + page + id + from, {
	// 						height: 0,
	// 						y: 0,
	// 					});
	// 				// !TEXT
	// 				//! TEXT
	// 				//! TEXT
	// 				gsap
	// 					.timeline()
	// 					.fromTo(
	// 						'#' + page + id + from + ' ' + '.gsap-show',
	// 						{
	// 							opacity: 1,
	// 							y: 0,
	// 						},
	// 						{
	// 							opacity: 0,
	// 							y: 15,
	// 							duration: 0.65,
	// 							stagger: 0.05,
	// 							ease: 'power1.out',
	// 						}
	// 					)

	// 					.fromTo(
	// 						'#' + page + id + to + ' ' + '.gsap-show',
	// 						{
	// 							opacity: 0,
	// 							y: 15,
	// 						},
	// 						{
	// 							opacity: 1,
	// 							y: 0,
	// 							duration: 0.75,
	// 							stagger: 0.125,
	// 							ease: 'power1.out',
	// 							delay: 1.1,
	// 						}
	// 					);
	// 			} else {
	// 				gsap
	// 					.timeline()
	// 					.set('#' + page + id + from, {
	// 						height: screenSize.height,
	// 						y: 0,
	// 					})
	// 					.fromTo(
	// 						'#' + page + id + from,
	// 						{
	// 							height: screenSize.height,
	// 							y: 0,
	// 						},
	// 						{
	// 							height: 0,
	// 							y: (screenSize.height * 40) / 100,
	// 							duration: 1.5,
	// 							ease: 'power1.out',
	// 							delay: 0.5,
	// 						}
	// 					);
	// 				gsap
	// 					.timeline()
	// 					.set('#' + page + id + to, {
	// 						y: -(screenSize.height * 40) / 100,
	// 						height: screenSize.height,
	// 					})
	// 					.fromTo(
	// 						'#' + page + id + to,
	// 						{
	// 							y: -(screenSize.height * 40) / 100,
	// 							height: screenSize.height,
	// 						},
	// 						{
	// 							y: 0,
	// 							height: screenSize.height,
	// 							duration: 1.5,
	// 							ease: 'power1.out',
	// 							delay: 0.5,
	// 						}
	// 					)
	// 					.set('#' + page + id + from, {
	// 						height: 0,
	// 						y: 0,
	// 					});
	// 				//! TEXT
	// 				//! TEXT
	// 				//! TEXT
	// 				gsap
	// 					.timeline()
	// 					.fromTo(
	// 						'#' + page + id + from + ' ' + '.gsap-show',
	// 						{
	// 							opacity: 1,
	// 							y: 0,
	// 						},
	// 						{
	// 							opacity: 0,
	// 							y: 15,
	// 							duration: 0.65,
	// 							stagger: 0.05,
	// 							ease: 'power1.out',
	// 						}
	// 					)

	// 					.fromTo(
	// 						'#' + page + id + to + ' ' + '.gsap-show',
	// 						{
	// 							opacity: 0,
	// 							y: 15,
	// 						},
	// 						{
	// 							opacity: 1,
	// 							y: 0,
	// 							// delay: 1,
	// 							duration: 0.75,
	// 							stagger: 0.125,
	// 							ease: 'power1.out',
	// 							delay: 1.1,
	// 						}
	// 					);
	// 			}
	// 			setActiveId(to);
	// 			setTimeout(() => {
	// 				setIsScrolling(false);
	// 			}, 3000);
	// 		}
	// 	}
	// });

	// useEffect(() => {
	// 	WheelReact.config({
	// 		left: () => {
	// 			if (!isScrolling) {
	// 				if (activeId < data.content[0].text - 1) {
	// 					console.log('wheel left detected.');
	// 					setIsScrolling(true);
	// 					scrollTo(activeId, activeId + 1);
	// 				}
	// 			}
	// 		},
	// 		right: () => {
	// 			if (!isScrolling) {
	// 				if (activeId > 0) {
	// 					console.log('wheel right detected.');
	// 					setIsScrolling(true);
	// 					scrollTo(activeId, activeId - 1);
	// 				}
	// 			}
	// 		},
	// 	});
	// }, [activeId, data.content, scrollTo, isScrolling, page]);

	return (
		<div className="flex w-full h-full overflow-hidden">
			{data.content[0].text.map((text, index) => (
				<Slide
					key={index}
					data={data}
					text={text}
					sectionId={id}
					id={index}
					page={page}
				/>
			))}
		</div>
	);
};

export default SubpageSlider;
