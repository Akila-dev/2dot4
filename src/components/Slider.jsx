/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { ImgWithFallback, CTA } from '../components';
import useDetectScroll from '@smakss/react-scroll-direction';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

import { Mousewheel, EffectCreative } from 'swiper/modules';

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
	const [current, setCurrent] = useState(0);
	const [currentData, setCurrentData] = useState(data[current]);
	const [changeSlide, setChangeSlide] = useState(false);

	const container = useRef(null);

	// GET SCROLL DIRECTION

	const { scrollDir } = useDetectScroll();

	const { contextSafe } = useGSAP({ scope: container });

	return (
		<div className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden">
            <Swiper
				// direction={'vertical'}
				grabCursor={false}
				mousewheel={true}
				effect={'creative'}
				centeredSlides={true}
				creativeEffect={{
					prev: {
						shadow: true,
						translate: [0, '-20%', -1],
					},
					next: {
						translate: [0, '100%', 0],
					},
				}}
				modules={[Mousewheel, EffectCreative]}
				className="mySwiper"
			>
                {data.map((item, index) => (
					<SwiperSlide key={index}>

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
                    </SwiperSlide>
				))}
                </Swiper>
			{/* <div
				ref={container}
				className="fixed top-0 left-0 w-full h-screen object-cover overflow-hidden scroll-container"
			>
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
			</div> */}
		</div>
	);
};

export default Slider;
