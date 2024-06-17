/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { ImgWithFallback, CTA } from '../components';
import useDetectScroll from '@smakss/react-scroll-direction';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Slide = ({ data, id }) => {
	return (
		<div
			className={`"w-full h-full object-cover overflow-hidden relative scroll-content transition"`}
		>
			<div className="absolute top-0 left-0 w-full h-full object-cover ">
				<ImgWithFallback
					src={data.imgWebp}
					fallback={data.img}
					alt={data.link}
				/>
				<div className="bg-overlay absolute top-0 left-0"></div>
			</div>
			{/* Content */}
			<div className="relative py-[60px] px-5 lg:px-[--sidebar-w] w-full h-full">
				<div className="w-full h-full flex items-center justify-center flex-1">
					<CTA
						title={data.title}
						text={data.text}
						btnText={data.buttonText}
						href={data.link}
						short
					/>
				</div>
			</div>
		</div>
	);
};

const SubpageSlide = ({ data, id }) => {
	return (
		<div
			className={`"w-full h-full object-cover overflow-hidden relative scroll-content transition"`}
		>
			<div className="absolute top-0 left-0 w-full h-full object-cover ">
				<ImgWithFallback
					src={data.imgWebp}
					fallback={data.img}
					alt={data.link}
				/>
				<div className="bg-overlay absolute top-0 left-0"></div>
			</div>
			{/* Content */}
			<div className="relative py-[60px] px-5 lg:px-[--sidebar-w] w-full h-full">
				<div className="w-full h-full flex items-center justify-center flex-1">
					<CTA
						title={data.content[0].title}
						text={data.content[0].text}
						btnText={data.buttonText}
						href={data.link}
						short
					/>
				</div>
			</div>
		</div>
	);
};

const Slider = ({ data, subpage }) => {
	const [current, setCurrent] = useState(0);
	const [currentData, setCurrentData] = useState(data[current]);
	const [changeSlide, setChangeSlide] = useState(false);

	const container = useRef(null);

	// GET SCROLL DIRECTION

	const { scrollDir } = useDetectScroll();

	const { contextSafe } = useGSAP({ scope: container });

	// const slideUp = contextSafe((idPrev, idNext) => {
	// 	console.log('slide up');
	// 	gsap.to('#slide' + idPrev, { height: '0%' });
	// 	// .to('#slide' + idNext, { height: '100%' });
	// });

	// const slideUp = contextSafe((idPrev, idNext) => {
	// 	console.log('slide up');
	// 	gsap.to('#slide' + idPrev, { height: '0%' });
	// 	gsap.to('#slide' + idPrev, { height: '100%' });
	// });

	// const slideDown = (idPrev, idNext) => {
	// 	return idPrev;
	// };

	// useEffect(() => {
	// 	const handleNavigation = () => {
	// 		if (scrollDir === 'up') {
	// 			console.log('up');
	// 			if (current + 1 >= 0) {
	// 				slideUp(current, current - 1);
	// 				setCurrent((prev) => prev - 1);
	// 			}
	// 		} else if (scrollDir === 'down') {
	// 			console.log('down');

	// 			// if (current < data.length - 1) {
	// 			// 	slideDown(current, current - 1);
	// 			// 	setCurrent((prev) => prev - 1);
	// 			// }
	// 		} else {
	// 			setCurrent((prev) => prev + 0);
	// 		}
	// 	};

	// 	window.addEventListener('scroll', handleNavigation);

	// 	return () => {
	// 		window.removeEventListener('scroll', handleNavigation);
	// 	};
	// }, [current, data.length, scrollDir, slideUp]);

	return (
		<div className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden">
			<div
				ref={container}
				className="fixed top-0 left-0 w-full h-screen object-cover overflow-hidden scroll-container"
			>
				{/* {scrollDir} */}
				{/* <Slide
					data={currentData}
					changeSlide={changeSlide}
					direction={scrollDir}
					container={container}
				/> */}
				{data.map((item, index) => (
					<div id={'slide' + index} className="h-full" key={index}>
						{subpage ? (
							<SubpageSlide
								data={item}
								id={index}
								// changeSlide={changeSlide}
								// direction={scrollDir}
								// container={container}
							/>
						) : (
							<Slide
								data={item}
								id={index}
								// changeSlide={changeSlide}
								// direction={scrollDir}
								// container={container}
							/>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Slider;
