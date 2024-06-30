import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

// eslint-disable-next-line react/prop-types
const MenuButton = ({ onClick }) => {
	const container = useRef();
	const { contextSafe } = useGSAP({ scope: container });
	const animateIcon = contextSafe(() => {
		gsap
			// .timeline()
			// .set('.menu-lines', {
			// 	width: 0,
			// })
			.fromTo(
				'.menu-lines',
				{
					width: 0,
				},
				{
					width: 20,
					duration: 1,
					stagger: 0.175,
					ease: 'power2.out',
					// clearProps: 'width',
				}
			);
	});
	return (
		<button
			ref={container}
			onMouseEnter={() => animateIcon()}
			onClick={onClick}
			className="flex items-center uppercase gap-2 pointer-events-auto"
		>
			<div className="flex flex-col gap-0 w-[20px]">
				<span className="menu-lines block h-[4px] w-[20px] border-t border-[--white]"></span>
				<span className="menu-lines block h-[3px] w-[20px] border-t border-[--white]"></span>
				<span className="menu-lines block h-[2px] w-[20px] border-b border-[--white]"></span>
			</div>
			<span className="hidden md:block">Menu</span>
		</button>
	);
};

export default MenuButton;
