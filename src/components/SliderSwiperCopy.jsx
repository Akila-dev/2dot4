/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { ImgWithFallback, CTA } from '../components';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

import { Mousewheel, EffectCreative } from 'swiper/modules';

const Slide = ({ data }) => (
	<div className="w-full h-full object-cover overflow-hidden relative">
		<div className="absolute top-0 left-0 w-full h-full object-cover ">
			<ImgWithFallback src={data.imgWebp} fallback={data.img} alt={data.link} />
			<div className="bg-overlay absolute top-0 left-0"></div>
		</div>
		{/* Content */}
		<div className="relative py-[60px] px-5 lg:px-[--sidebar-w] w-full h-full">
			<div className="w-full h-full flex items-center justify-center flex-1">
				<CTA
					title={data.title}
					text={data.text}
					btnText={data.buttonText}
					short
				/>
			</div>
		</div>
	</div>
);

const Slider = ({ data }) => {
	const [prev, setPrev] = useState(-1);
	const [current, setCurrent] = useState(0);
	const [next, setNext] = useState(1);
	const dataLength = data.length;

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
				{prev >= 0 && (
					<SwiperSlide>
						<Slide data={data[prev]} />
					</SwiperSlide>
				)}
				<SwiperSlide>
					<Slide data={data[current]} />
				</SwiperSlide>
				{prev <= dataLength - 1 && (
					<SwiperSlide>
						<Slide data={data[next]} />
					</SwiperSlide>
				)}
			</Swiper>
		</div>
	);
};

export default Slider;
