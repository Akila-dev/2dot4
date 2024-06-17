/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Cta = ({ title, text, btnText, href, onClick, short }) => {
	const container = useRef();

	useGSAP(
		() => {
			gsap.from('.gsap-show', {
				opacity: 0,
				y: 10,
				duration: 1.2,
				stagger: 0.15,
				ease: 'power4.out',
			});
		},
		{ scope: container }
	);

	return (
		<div ref={container} className="container">
			<div
				className={`${
					short ? 'max-w-[500px] text-center' : 'max-w-[900px]'
				} flex flex-col items-center justify-center gap-5 px-[2.5%]`}
			>
				<h1 className="gsap-show">{title}</h1>
				<p className="gsap-show">{text}</p>
				<div className="pt-2 w-full gsap-show">
					{href ? (
						<Link to={href} className="btn">
							{btnText}
						</Link>
					) : (
						<button onClick={onClick} className="btn">
							{btnText}
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Cta;
