/* eslint-disable react/prop-types */
import { ImgWithFallback, CTASubSlider } from '../components';
import { useRef, useEffect } from 'react';
import WheelReact from 'wheel-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// import WheelReact from 'wheel-react';

import { PiCaretLeftThin, PiCaretRightThin } from 'react-icons/pi';

gsap.registerPlugin(useGSAP);

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
										: id === 0
										? data.content[0].title
										: ''
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

// eslint-disable-next-line no-unused-vars
const SubpageSlider = ({ data, id, page, scrollTo, activeId, setActiveId }) => {
	const container = useRef(null);
	const { contextSafe } = useGSAP({ scope: container });
	// const [isSideScrolling, setIsSideScrolling] = useState(false);

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

	const next = contextSafe(() => {
		if (activeId < data.content[0].text.length - 1) {
			console.log('test next');
			scrollTo(activeId, activeId + 1, id);
			// setIsSideScrolling(true);
		}
	});

	const prev = contextSafe(() => {
		if (activeId > 0) {
			console.log('test prev');
			scrollTo(activeId, activeId - 1, id);
			// setIsSideScrolling(true);
		}
	});

	// useEffect(() => {
	// 	WheelReact.config({
	// 		left: () => {
	// 			if (activeId < data.content[0].text.length - 1) {
	// 				console.log('test next');
	// 				scrollTo(activeId, activeId + 1, id);
	// 				// setIsSideScrolling(true);
	// 			}
	// 		},
	// 		right: () => {
	// 			if (activeId > 0) {
	// 				console.log('test prev');
	// 				scrollTo(activeId, activeId - 1, id);
	// 				// setIsSideScrolling(true);
	// 			}
	// 		},
	// 	});
	// }, [activeId, data.length, scrollTo, page, data.content, id]);

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