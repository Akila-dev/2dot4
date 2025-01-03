/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const CTASubSlider = ({
	title,
	text,
	btnText,
	href,
	onClick,
	short,
	makeTiny,
	id,
	page,
}) => {
	const container = useRef();
	const { contextSafe } = useGSAP({ scope: container });

	// useGSAP(
	// 	() => {
	// 		gsap.from('.gsap -show', {
	// 			opacity: 0,
	// 			y: 15,
	// 			duration: 0.75,
	// 			stagger: 0.175,
	// 			ease: 'power2.out',
	// 			delay: 0.5,
	// 		});
	// 	},
	// 	{ scope: container }
	// );

	const hovering = contextSafe(() => {
		gsap
			.timeline()
			// .set('.clip-bg', {
			// 	top: '200px',
			// 	opacity: 0,
			// 	scale: 0,
			// 	duration: 1,
			// 	stagger: 0.175,
			// 	ease: 'power2.out',
			// })
			.to('.clip-bg', {
				top: '50%',
				opacity: 1,
				scale: 1,
				duration: 1,
				// stagger: 0.175,
				ease: 'power2.out',
			});
	});
	const hoverOut = contextSafe(() => {
		gsap.to('.clip-bg', {
			top: '200px',
			scale: 0,
			duration: 1,
			// stagger: 0.175,
			ease: 'power2.out',
		});
	});

	return (
		<div
			id={id}
			ref={container}
			className="container !px-3 fixed h-full !py-[50px]"
		>
			<div
				className={`pt-[calc(20px+7vh)] md:pt-[7vh] pb-[vh] flex flex-col items-center justify-between h-full text-center ${
					short ? 'max-w-[700px]' : 'max-w-[900px]'
				}  ${makeTiny ? 'px-0  ' : 'px-[2.5%] md:px-[100px] lg:px-[50px]'}`}
			>
				<div className="space-vh">
					<p className="gsap-show page-title">{page}</p>

					<h1
						className={`gsap-subslide-show gsap-show ${
							makeTiny &&
							'text-[7vw] md:text-[3.5vw] lg:text-[2rem] leading-[130%]'
						}`}
					>
						{title}
					</h1>
				</div>
				<div className="space-vh">
					<p className="gsap-subslide-show gsap-show">{text}</p>
					{btnText && (
						<div className="pt-2 w-full gsap-subslide-show gsap-show">
							{href ? (
								<Link
									onMouseEnter={() => hovering()}
									onMouseLeave={() => hoverOut()}
									to={href}
									target="_blank"
									className="btn relative group overflow-hidden"
								>
									<span className="clip-bg"></span>
									<span className="relative z-1 group-hover:text-[--bg] duration-700">
										{btnText}
									</span>
								</Link>
							) : (
								<button
									type="button"
									onMouseEnter={() => hovering()}
									onMouseLeave={() => hoverOut()}
									onClick={onClick}
									className="btn relative group overflow-hidden"
								>
									<span className="clip-bg"></span>
									<span className="relative z-1 group-hover:text-[--bg] duration-700">
										{btnText}
									</span>
								</button>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CTASubSlider;
