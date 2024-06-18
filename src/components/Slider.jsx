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
			className={`slide w-full h-full object-cover overflow-hidden relative scroll-content transition`}
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
						// short={data.short}
					/>
				</div>
			</div>
		</div>
	);
};

const SubpageSlide = ({ data, id }) => {
	return (
		<div
			className={`slide w-full h-full object-cover overflow-hidden relative scroll-content transition`}
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
						text={data.content[0].text[0]}
						btnText={data.buttonText}
						href={data.link}
						short

						// short={data.short}
					/>
				</div>
			</div>
		</div>
	);
};

const Slider = ({ data, subpage }) => {
	// const swiper = useSwiper();
	const [current, setCurrent] = useState(0);
	const [currentData, setCurrentData] = useState(data[current]);
	const [changeSlide, setChangeSlide] = useState(false);

	const container = useRef(null);

	// GET SCROLL DIRECTION

	const { scrollDir } = useDetectScroll();

	return (
		<div className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden">
			<div className="scroll-container">
				{data.map((item, index) => (
					<div className="scroll-item" key={index}>
						<div id={'slide' + index} className="h-full">
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
					</div>
				))}
			</div>
		</div>
	);
};

export default Slider;
