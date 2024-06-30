/* eslint-disable react/prop-types */

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

// Assets
import { GoArrowDown } from 'react-icons/go';

const ArrowDown = ({ onClick }) => {
	const container = useRef(null);
	const tl = useRef(null);

	const toggleTimeline = () => {
		tl.current.reversed(!tl.current.reversed());
	};

	useGSAP(
		() => {
			const circles = gsap.utils.toArray('.dotted-circle');
			tl.current = gsap
				.timeline()
				.to(circles[0], {
					rotation: 360,
					duration: 5,
					repeat: -1,
					ease: 'linear',
				})
				.reverse();
		},
		{ scope: container }
	);

	return (
		<div
			ref={container}
			className="relative h-full flex items-center pointer-events-auto"
		>
			<button
				// ref={circle}
				onClick={onClick}
				onMouseEnter={() => toggleTimeline()}
				onMouseLeave={() => toggleTimeline()}
				className={`h-[35px] md:h-[40px] w-[35px] md:w-[40px] rounded-full border border-[--border] border-dashed dotted-circle`}
			>
				{/* <span
					onClick={onClick}
					className="inline-block h-[40px] w-[40px] rounded-full border border-[--border] border-dashed dotted-circle"
				></span> */}
				{/* {hovering ? (
					<span
						onClick={onClick}
						className="inline-block h-[40px] w-[40px] rounded-full border border-[--border] border-dashed dotted-circle"
					></span>
				) : (
					<span
						onClick={onClick}
						className="inline-block h-[40px] w-[40px] rounded-full border border-[--border] border-dashed"
					></span>
				)} */}
			</button>
			<div className="absolute top-0 h-full flex justify-center items-center pointer-events-none">
				<span className="`h-[35px] md:h-[40px] w-[35px] md:w-[40px]  flex items-center justify-center pl-[1px]">
					<GoArrowDown className="te text-base md:text-lg text-[--grey]" />
				</span>
			</div>
		</div>
	);
};

export default ArrowDown;
