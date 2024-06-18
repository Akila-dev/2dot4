import { useRef } from 'react';
import { CloseBtn } from '../components';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ContactForm } from '../components';

gsap.registerPlugin(useGSAP);

const Contact = () => {
	const container = useRef(null);
	useGSAP(
		() => {
			gsap.from('.gsap-show', {
				opacity: 0,
				y: 15,
				duration: 0.75,
				stagger: 0.175,
				ease: 'power2.out',
				delay: 0.5,
			});
		},
		{ scope: container }
	);
	return (
		<div ref={container}>
			<div className="px-5 md:px-[2rem] lg:px-[3rem]">
				<CloseBtn href="/" right />
			</div>
			<div className="w-full !max-w-[650px] container mx-auto !block !py-0">
				<div
					className={` flex flex-col items-center justify-center gap-5 px-[2.5%] text-center`}
				>
					<h3 className="gsap-show uppercase font-medium">
						What is Lorem Ipsum?
					</h3>
					<p className="gsap-show font-light">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry&apos;s standard dummy
						text ever since the 1500s, when an unknown printer took a galley of
						type and scrambled it to make a type specimen book. It has survived
						not only.
					</p>
				</div>
				<div className="gsap-show py-7 md:py-10">
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default Contact;
