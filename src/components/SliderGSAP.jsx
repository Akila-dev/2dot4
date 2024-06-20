/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { ImgWithFallback, CTA, SideNavLink } from '../components';
import useDetectScroll from '@smakss/react-scroll-direction';
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

const Slide = ({ data, id, page }) => {
	// scrollTrigger: {
	// 	trigger: element.querySelector(".first"),
	// 	start: "top top",
	// 	end: "bottom center",
	// 	scrub: true
	//   }
	return (
		<div
			id={page + id}
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
			<div className="relative py-[60px] px-5 md:px-[--sidebar-w] w-full h-full">
				<div className="w-full h-full flex items-center justify-center flex-1">
					<CTA
						title={data.title}
						text={data.text}
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

const SubpageSlide = ({ data, page, id }) => {
	return (
		<div
			id={page + id}
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
			<div className="relative py-[60px] px-5 md:px-[--sidebar-w] w-full h-full">
				<div className="w-full h-full flex items-center justify-center flex-1">
					<CTA
						title={data.content[0].title}
						text={data.content[0].text[0]}
						btnText={data.buttonText}
						href={'../contact'}
						short
						makeTiny
						id={page + id}
						// short={data.short}
					/>
				</div>
			</div>
		</div>
	);
};

const Slider = ({ data, subpage, page }) => {
	// *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
	const [screenSize, setScreenSize] = useState(getWindowsDimension());

	useEffect(() => {
		const handleResize = () => {
			setScreenSize(getWindowsDimension());
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const container = useRef(null);
	const [activeId, setActiveId] = useState(0);
	const { contextSafe } = useGSAP({ scope: container });

	const { scrollDir } = useDetectScroll();

	// GET SCROLL DIRECTION

	const scrollTo = contextSafe((from, to) => {
		if (from !== to) {
			if (from < to) {
				gsap
					.timeline()
					.fromTo(
						'#slide' + from + ' ' + '.gsap-show',
						{
							opacity: 1,
							y: 0,
							duration: 0.5,
							stagger: 0.175,
							ease: 'power1.out',
						},
						{
							opacity: 0,
							y: 15,
							duration: 0.5,
							stagger: 0.175,
							ease: 'power1.out',
						}
					)
					.to('#slide' + from, {
						height: 0,
						duration: 1,
						ease: 'power1.out',
					})
					.to(
						'#slide' + to,
						{
							height: screenSize.height,
							duration: 1,
							ease: 'power1.out',
						},
						0.2
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
							duration: 0.5,
							stagger: 0.175,
							ease: 'power1.out',
						}
					);
			} else {
				gsap
					.timeline()
					.fromTo(
						'#slide' + from + ' ' + '.gsap-show',
						{
							opacity: 1,
							y: 0,
							duration: 0.5,
							stagger: 0.175,
							ease: 'power1.out',
						},
						{
							opacity: 0,
							y: 15,
							duration: 0.5,
							stagger: 0.175,
							ease: 'power1.out',
						}
					)
					.to('#slide' + to, {
						height: screenSize.height,
						duration: 1,
						ease: 'power1.out',
					})
					.to('#slide' + from, {
						height: 0,
						duration: 1,
						ease: 'power1.out',
					})
					.fromTo(
						'#slide' + to + ' ' + '.gsap-show',
						{
							opacity: 0,
							y: 15,
						},
						{
							opacity: 1,
							y: 0,
							duration: 0.75,
							stagger: 0.175,
							ease: 'power1.out',
						}
					);
			}
			setActiveId(to);
		}
	});

	return (
		<div
			ref={container}
			className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden"
		>
			<div className="scroll-container h-full">
				{data.map((item, index) => (
					<div
						id={'slide' + index}
						className={`scroll-item h-full`}
						key={index}
					>
						<div className="h-full">
							{subpage ? (
								<SubpageSlide data={item} id={index} page={page} />
							) : (
								<Slide data={item} id={index} page={page} />
							)}
						</div>
					</div>
				))}
			</div>
			{/* Sidebar */}
			<div className="!hidden md:!flex layout-sidebars !p-0 md:!px-8 lg:!px-10 fixed top-0 left-0 h-full">
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
		</div>
	);
};

export default Slider;
