/* eslint-disable react/prop-types */
import { ImgWithFallback, CTASubSlider, VideoPlayer } from '../components';
// import { LazyLoadComponent } from 'react-lazy-load-image-component';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// import { PiCaretLeftThin, PiCaretRightThin } from 'react-icons/pi';

gsap.registerPlugin(useGSAP);

const Slide = ({
	data,
	text,
	id,
	page,
	sectionId,
	// activeId,
	scrollTo,
	subActiveId,
	currentId,
}) => {
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
						{data.video && data.video[id] ? (
							// <div className="w-full h-full bg-black ">
							<div className="w-full h-full object-cover">
								<div className="w-full h-full">
									<VideoPlayer src={data.video[id]} />
								</div>
							</div>
						) : (
							<ImgWithFallback
								src={data.img[id]}
								mobile={
									data.mobileImg && data.mobileImg[id]
										? data.mobileImg[id]
										: data.img[id]
								}
								alt={data.link + id}
							/>
						)}
						<div className="bg-overlay absolute top-0 left-0"></div>
					</div>
					{/* Content */}
					<div className="fixed  md:py-[60px] px-5 md:px-[305px] w-screen h-full flex items-center justify-between">
						<div
							className={`w-full h-full flex justify-center flex-1 ${
								data.moveToBottom && data.moveToBottom[id]
									? 'items-end pb-8'
									: 'items-center'
							}`}
						>
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
								href={data.buttonLink}
								short
								id={page + id}
								makeTiny={data.make_tiny}
								page={page}
								// activeId={activeId}
								slide_length={data.content[0].text.length}
								// short={data.short}
								scrollTo={scrollTo}
								subActiveId={subActiveId}
								currentId={currentId}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// eslint-disable-next-line no-unused-vars
const SubpageSlider = ({
	data,
	id,
	page,
	// activeId,
	container,
	scrollTo,
	subActiveId,
	currentId,
}) => {
	// const container = useRef(null);
	// const { contextSafe } = useGSAP({ scope: container });
	// const [isSideScrolling, setIsSideScrolling] = useState(false);
	// console.log(id, activeId);

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
					// activeId={activeId}
					scrollTo={scrollTo}
					subActiveId={subActiveId}
					currentId={currentId}
				/>
			))}
		</div>
	);
};

export default SubpageSlider;
