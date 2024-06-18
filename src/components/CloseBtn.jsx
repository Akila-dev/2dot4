import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { RiCloseLargeLine } from 'react-icons/ri';

gsap.registerPlugin(useGSAP);

// eslint-disable-next-line react/prop-types
const CloseBtn = ({ container, onClick, right, href }) => {
	const { contextSafe } = useGSAP({ scope: container });

	const spinIn = contextSafe(() => {
		gsap.timeline().to('.menu-icon', {
			rotation: 360,
			opacity: 0.5,
			duration: 1,
			stagger: 0.175,
			ease: 'power2.out',
			// clearProps: 'width',
		});
	});

	const spinOut = contextSafe(() => {
		gsap.timeline().to('.menu-icon', {
			rotation: 0,
			opacity: 1,
			duration: 1,
			stagger: 0.175,
			ease: 'power2.out',
			// clearProps: 'width',
		});
	});
	return (
		<div
			className={`h-[60px] min-h-[80px] max-h-[80px] flex items-center ${
				right && 'justify-end'
			}`}
		>
			{href ? (
				<Link
					to={href}
					onMouseEnter={() => spinIn()}
					onMouseLeave={() => spinOut()}
					className="flex gap-2 items-center font-medium group"
				>
					<RiCloseLargeLine className="!text-xl menu-icon " />
					<span
						className={`group-hover:opacity-70 text-xs ${
							right ? 'hidden md:block' : ''
						}`}
					>
						CLOSE
					</span>
				</Link>
			) : (
				<button
					onClick={onClick}
					onMouseEnter={() => spinIn()}
					onMouseLeave={() => spinOut()}
					className="flex gap-2 items-center font-medium group"
				>
					<RiCloseLargeLine className="!text-xl menu-icon " />
					<span
						className={
							'group-hover:opacity-70 text-xs' + '' + right && 'hidden md:block'
						}
					>
						CLOSE
					</span>
				</button>
			)}
		</div>
	);
};

export default CloseBtn;
