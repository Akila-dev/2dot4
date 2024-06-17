/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { ImgWithFallback, CTA } from '../components';
import useDetectScroll from '@smakss/react-scroll-direction';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Slide = ({ data, changeSlide, direction }) => {
	var initData = { ...data };
	const [currentData, setCurrentData] = useState(initData);

	// useEffect(() => {
	// 	if (changeSlide) {
	// 		gsap.timeline().to
	// 	}
	// }, [changeSlide]);

	return (
		<div className="w-full h-full object-cover overflow-hidden relative scroll-content transition">
			<div className="absolute top-0 left-0 w-full h-full object-cover ">
				<ImgWithFallback
					src={currentData.imgWebp}
					fallback={currentData.img}
					alt={currentData.link}
				/>
				<div className="bg-overlay absolute top-0 left-0"></div>
			</div>
			{/* Content */}
			<div className="relative py-[60px] px-5 lg:px-[--sidebar-w] w-full h-full">
				<div className="w-full h-full flex items-center justify-center flex-1">
					<CTA
						title={currentData.title}
						text={currentData.text}
						btnText={currentData.buttonText}
						short
					/>
				</div>
			</div>
		</div>
	);
};

const Slider = ({ data }) => {
	const [current, setCurrent] = useState(0);
	const [currentData, setCurrentData] = useState(data[current]);
	const [changeSlide, setChangeSlide] = useState(false);

	const container = useRef(null);

	// GET SCROLL DIRECTION

	const { scrollDir } = useDetectScroll();

	useEffect(() => {
		const handleNavigation = () => {
			if (scrollDir === 'up') {
				if (current > 0) setCurrent((prev) => prev - 1);
				setCurrentData(data[current]);
				setChangeSlide(true);
			} else if (scrollDir === 'down') {
				if (current < data.length - 1) setCurrent((prev) => prev + 1);
				setCurrentData(data[current]);
				setChangeSlide(true);
			} else {
				setChangeSlide(false);
			}
		};

		window.addEventListener('scroll', handleNavigation);

		return () => {
			window.removeEventListener('scroll', handleNavigation);
		};
	}, []);

	return (
		<div className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden">
			<div
				ref={container}
				className="fixed top-0 left-0 w-full h-screen object-cover overflow-hidden scroll-container"
			>
				{/* {scrollDir} */}
				<Slide
					data={currentData}
					changeSlide={changeSlide}
					direction={scrollDir}
					container={container}
				/>
			</div>
		</div>
	);
};

export default Slider;
