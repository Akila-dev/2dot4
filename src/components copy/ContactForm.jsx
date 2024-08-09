import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { BsDot } from 'react-icons/bs';

gsap.registerPlugin(useGSAP);

// eslint-disable-next-line react/prop-types
const TextBox = ({ label, name, value, onChange, type }) => {
	return (
		<div className="pt-[30px] relative">
			<input
				className="text-input"
				type={type === 1 ? 'tel' : type === 2 ? 'email' : 'text'}
				//   placeholder={label}
				name={name}
				value={value}
				onChange={onChange}
			/>
			<span className="absolute bottom-0 block w-full pb-2 text-sm opacity-70">
				{label} *
			</span>
		</div>
	);
};

const ContactForm = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phoneNo: '',
		message: '',
	});

	const { firstName, lastName, email, phoneNo, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		if (
			formData.username !== '' &&
			formData.email !== '' &&
			formData.message !== ''
		) {
			// setLoading(true);

			const contact = {
				firstName: formData.firstName,
				lastName: formData.lastName,
				phoneNo: formData.phoneNo,
				email: formData.email,
				message: formData.message,
			};

			// client
			// 	.create(contact)
			// 	.then(() => {
			// 		setLoading(false);
			// 		setIsFormSubmitted(true);

			// 		setShowFireworks(true);
			// 		playAudio(clapping);

			// 		setTimeout(() => {
			// 			setShowFireworks(false);
			// 		}, 6000);
			// 	})
			// 	// eslint-disable-next-line no-console
			// 	.catch((err) => console.log(err));
		}
	};

	const container = useRef();
	const { contextSafe } = useGSAP({ scope: container });

	const hovering = contextSafe(() => {
		gsap.timeline().to('.clip-bg', {
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
		<div ref={container} className="w-full">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
				<TextBox
					label="First Name"
					name="firstName"
					value={firstName}
					onChange={handleChangeInput}
				/>
				<TextBox
					label="Last Name"
					name="lastName"
					value={lastName}
					onChange={handleChangeInput}
				/>
				<TextBox
					label="Email"
					name="email"
					value={email}
					onChange={handleChangeInput}
					type={2}
				/>
				<TextBox
					label="Phone Number"
					name="phoneNo"
					value={phoneNo}
					onChange={handleChangeInput}
					type={1}
				/>
				<div className="pt-[50px] md:col-span-2">
					<textarea
						className="text-input !border !py-3 !px-3 h-[200px]"
						placeholder="Your Message"
						value={message}
						name="message"
						onChange={handleChangeInput}
					/>
				</div>
			</div>
			<p className="text-center py-7 text-[--grey] font-light text-sm">
				I have read and agree to the{' '}
				<span className="border-b border-[--lines] !text-[--lines] inline-block font-medium cursor-pointer">
					Terms & Conditions
				</span>
				<BsDot className="inline-block" />
				<span className="border-b border-[--lines] !text-[--lines] inline-block font-medium cursor-pointer">
					Privacy Policy
				</span>
			</p>
			<div className="pb-5">
				<button
					onMouseEnter={() => hovering()}
					onMouseLeave={() => hoverOut()}
					onClick={() => handleSubmit()}
					className="btn relative group overflow-hidden"
				>
					<span className="clip-bg"></span>
					<span className="relative z-1 group-hover:text-[--bg] duration-700">
						Send Message
					</span>
				</button>
			</div>
		</div>
	);
};

export default ContactForm;
