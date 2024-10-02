import dummy from '../assets/dummy/1.jpg';

//* SECTION 1: ABOUT SECTION
import aboutHero from '../assets/sectionImgs/1/hero.png';
// import about1 from '../assets/sectionImgs/1/1.jpg';
import about11 from '../assets/sectionImgs/1/11.png';
import about12 from '../assets/sectionImgs/1/12.jpg';
import about13 from '../assets/sectionImgs/1/13.jpg';
import about2 from '../assets/sectionImgs/1/2.jpg';
import about21 from '../assets/sectionImgs/1/21.mov';
// import about3 from '../assets/sectionImgs/1/3.jpg';
import about31 from '../assets/sectionImgs/1/31.jpg';
import about4 from '../assets/sectionImgs/1/4.jpg';
import about41 from '../assets/sectionImgs/1/41.mov';
import aboutHeroWebp from '../assets/sectionImgs/1/hero.webp';
import about1Webp from '../assets/sectionImgs/1/1.webp';
import about2Webp from '../assets/sectionImgs/1/2.webp';
import about3Webp from '../assets/sectionImgs/1/3.webp';
import about4Webp from '../assets/sectionImgs/1/4.webp';

//* SECTION 2: TECHNOLOGY SECTION
import technologyHero from '../assets/sectionImgs/2/hero.jpg';
import technology11 from '../assets/sectionImgs/2/11.jpg';
import technology21 from '../assets/sectionImgs/2/21.jpg';
import technology22 from '../assets/sectionImgs/2/22.jpg';
import technology23 from '../assets/sectionImgs/2/23.jpg';
import technologyHeroWebp from '../assets/sectionImgs/2/hero.webp';
import technology1Webp from '../assets/sectionImgs/2/1.webp';
import technology2Webp from '../assets/sectionImgs/2/2.webp';

//* SECTION 3: DIAMOND SECTION
import diamondHero from '../assets/sectionImgs/3/hero.jpg';
import diamond11 from '../assets/sectionImgs/3/11.jpg';
import diamond12 from '../assets/sectionImgs/3/12.jpg';
import diamond13 from '../assets/sectionImgs/3/13.jpg';
import diamond14 from '../assets/sectionImgs/3/14.jpg';
import diamond15 from '../assets/sectionImgs/3/15.jpg';
import diamond16 from '../assets/sectionImgs/3/16.jpg';
import diamond17 from '../assets/sectionImgs/3/17.jpg';
import diamond31 from '../assets/sectionImgs/3/31.jpg';
import diamond32 from '../assets/sectionImgs/3/32.jpg';
import diamond33 from '../assets/sectionImgs/3/33.jpg';
import diamond34 from '../assets/sectionImgs/3/34.jpg';
import diamondHeroWebp from '../assets/sectionImgs/3/hero.webp';
import diamond11Webp from '../assets/sectionImgs/3/11.webp';
import diamond12Webp from '../assets/sectionImgs/3/12.webp';
import diamond13Webp from '../assets/sectionImgs/3/13.webp';
import diamond14Webp from '../assets/sectionImgs/3/14.webp';
import diamond15Webp from '../assets/sectionImgs/3/15.webp';
import diamond16Webp from '../assets/sectionImgs/3/16.webp';
import diamond17Webp from '../assets/sectionImgs/3/17.webp';
import diamond2Webp from '../assets/sectionImgs/3/2.webp';

//* SECTION 4: APPLICATION SECTION
import applicationHero from '../assets/sectionImgs/4/hero.jpg';
import application1 from '../assets/sectionImgs/4/1.jpg';
import application2 from '../assets/sectionImgs/4/2.jpg';
import application3 from '../assets/sectionImgs/4/3.jpg';
import application4 from '../assets/sectionImgs/4/4.jpg';
import application12 from '../assets/sectionImgs/4/12.png';
import application22 from '../assets/sectionImgs/4/22.png';
import application32 from '../assets/sectionImgs/4/32.png';
import application41 from '../assets/sectionImgs/4/41.png';
import application42 from '../assets/sectionImgs/4/42.png';
import application51 from '../assets/sectionImgs/4/51.jpg';
import applicationHeroWebp from '../assets/sectionImgs/4/hero.webp';
import application1Webp from '../assets/sectionImgs/4/1.webp';
import application2Webp from '../assets/sectionImgs/4/2.webp';
import application3Webp from '../assets/sectionImgs/4/3.webp';
import application4Webp from '../assets/sectionImgs/4/4.webp';
import application12Webp from '../assets/sectionImgs/4/12.webp';
import application22Webp from '../assets/sectionImgs/4/22.webp';
import application32Webp from '../assets/sectionImgs/4/32.webp';
import application42Webp from '../assets/sectionImgs/4/42.webp';

// ATELIER
import atelier1 from '../assets/sectionImgs/atelier/1.jpg';
import atelier2 from '../assets/sectionImgs/atelier/2.jpg';
import atelier3 from '../assets/sectionImgs/atelier/3.jpg';
import atelier4 from '../assets/sectionImgs/atelier/4.jpg';
import atelier5 from '../assets/sectionImgs/atelier/5.jpg';

// export const DATA = [
// {
// 	link: '',
// 	title: '',
// 	text: '',
// 	buttonText: '',
// 	img: '',
// 	subContent: [
// 		{
// 			link: '',
// 			content: [
// 				{
// 					title: '',
// 					text: [''],
// 				},
// 			],
// 			buttonText: '',
// 			img: '',
// 			// video: '',
// 		},
// 	],
// },
// ];

export const DATA = [
	{
		link: 'about',
		title: 'A NEW STANDARD',
		text: '2DOT4 aims to lead a revolutionary shift in the diamond industry. Setting elevated standards, fostering innovation through a robust ecosystem and diverse industry collaboration.',
		buttonText: 'EXPLORE NOW',
		img: aboutHero,
		imgWebp: aboutHeroWebp,
		short: true,
		subContent: [
			{
				link: '2dot4',
				content: [
					{
						title: ['Who we are:', 'Our Mission:', 'Why We Lead the Market:'],
						text: [
							'We are an innovative company dedicated to providing sustainable, cutting-edge diamond products worldwide. With a fully integrated ecosystem, our expert team designs state-of-the-art reactors to produce top-quality lab-grown diamonds. Partnering with industry leaders, we leverage global expertise to drive scalable growth.',
							'Combining scientific prowess with creative ingenuity, we meticulously craft diamonds of unparalleled precision, ensuring superior yield and consistency. From in-house cutting to polishing, our diamonds undergo rigorous quality control, delivering excellence from the reactor to your fingertips.',
							'In a landscape accustomed to variability, we champion industrial precision, propelled by our team of PhD-qualified nano-tech engineers, industrial experts, and seasoned cutters. Our dedication to quality sets us apart, positioning us as pioneers in the future of the diamond market.',
						],
					},
				],
				buttonText: '',
				img: [about11, about12, about13],
				imgWebp: [about1Webp, about1Webp, about1Webp],
				short: false,
				moveToBottom: [true, false, false],
				// video: '',
			},
			{
				link: 'Laboratory',
				content: [
					{
						title: ['Center of Excellence'],
						text: [
							"At 2DOT4, we go beyond mere certification; we cultivate a fusion of culture, emotion, and innovation. As a center of excellence, we intertwine technology with artistry and talent, fuelled by an unwavering commitment to excellence. Recently, in Dubai, the epitome of innovation in the Middle East, we proudly inaugurated the GCC's premier Lab-Grown Diamond laboratory—a monumental stride in our quest to revolutionize the diamond industry.",
						],
					},
				],
				buttonText: 'CONTACT US',
				buttonLink:
					'https://vinwdzm1fbl.typeform.com/to/sRNc1NrB?typeform-source=2dot4.com',
				img: [about2],
				imgWebp: [about2Webp],
				short: false,
				video: [about21],
				// make_tiny: true,
			},
			{
				link: 'Education',
				content: [
					{
						title: ["Let's Embark on this exciting adventure together"],
						text: [
							'At 2DOT4 we are dedicated to providing transparent, high-standard education on lab-grown diamonds to empower individuals and businesses alike. Our strategy revolves around promoting top quality, exploring the diverse possibilities of diamond material, and fostering a deep understanding of its applications. ',
						],
					},
				],
				buttonText: 'CONTACT US',
				buttonLink:
					'https://vinwdzm1fbl.typeform.com/to/sRNc1NrB?typeform-source=2dot4.com',
				img: [about31],
				imgWebp: [about3Webp],
				short: true,
				// video: '',
			},
			{
				link: 'Sustainability',
				content: [
					{
						title: ["Unlocking Diamond Alchemy through Earth's Elements"],
						text: [
							"In the realm of diamonds, whether lab-grown or mined, the disparity lies solely in their genesis. For 2DOT4, the path to diamond creation veers towards innovation, harnessing Earth's elements within controlled environments. Our approach doesn't disrupt nature; rather, it accelerates its processes through meticulously designed reactors.",
							"A diamond, revered as the epitome of durability and timelessness, symbolises eternity. 2DOT4, however, strives to uphold this legacy in a more sustainable manner, harnessing the sun's power to craft diamonds of unparalleled purity. Classified as Type IIa, the most coveted variant due to its pristine carbon structure, these diamonds stand in a league of their own, with only a fraction of mined diamonds bearing comparison.",
						],
					},
				],
				buttonText: '',
				img: [about4, about4],
				imgWebp: [about4Webp, about4Webp],
				short: false,
				video: [about41, about41],
			},
		],
	},
	{
		link: 'technology',
		title: 'Technology',
		text: 'Our multidisciplinary approach combines cutting-edge technology, rigorous research methodologies, and a deep understanding of diamond materials, positioning us at the forefront of the industry.',
		buttonText: 'Explore Now',
		img: technologyHero,
		imgWebp: technologyHeroWebp,
		short: true,
		subContent: [
			{
				link: 'State of the Art Reactors',
				content: [
					{
						title: ['State-of-the-Art Reactors', '', ''],
						text: [
							'In the realm of cutting-edge diamond manufacturing, the cornerstone of innovation lies in the state-of-the-art CVD reactors employed by us at 2DOT4 Diamond LLC. These marvels of modern science represent the pinnacle of technological advancement, seamlessly blending precision engineering with scientific ingenuity. Behind the sleek façade lies a world of intricate processes, meticulously orchestrated to yield diamonds of unparalleled quality and brilliance.',
							"What sets our CVD reactors apart, however, goes beyond mere surface aesthetics. It's in the subtle nuances of design refinement, the meticulous attention to detail, and the relentless pursuit of perfection that truly distinguish our reactors from the competition. With a focus on efficiency, reliability, and sustainability, our reactors effortlessly transcend the boundaries of conventional diamond production, setting new standards of excellence in the industry.",
							"From optimized performance to enhanced scalability, every facet of our reactors is meticulously crafted to ensure optimal results, making them the preferred choice for discerning manufacturers seeking to elevate their diamond manufacturing capabilities. As pioneers in the field, we take pride in pushing the boundaries of what's possible, and our state-of-the-art CVD reactors are the embodiment of our commitment to innovation and excellence.",
						],
					},
				],
				buttonText: 'CONTACT US',
				buttonLink:
					'https://vinwdzm1fbl.typeform.com/to/sRNc1NrB?typeform-source=2dot4.com',
				img: [technology11, technology11, technology11],
				imgWebp: [technology1Webp, technology1Webp, technology1Webp],
				short: false,
				// video: '',
			},
			{
				link: 'CVD Technology',
				content: [
					{
						title: ['CVD Diamond Growth Technology', '', ''],
						text: [
							'At 2DOT4, we produce diamonds through Chemical Vapor Deposition (CVD), a sophisticated technique that uses our state-of-the-art reactors.',
							'We start with a diamond seed, placed in a reactor where we introduce gases like methane and hydrogen. These gases are ionised into plasma with microwave radiation, allowing carbon atoms from the methane to bond with the seed, building the diamond layer by layer.',
							'This process is not only reliable but also more environmentally friendly compared to traditional methods. Our technology enables us to craft high-quality diamonds in various sizes and shapes, suitable for use in industries such as electronics, optics, and jewellery.',
						],
					},
				],
				buttonText: 'CONTACT US',
				buttonLink:
					'https://vinwdzm1fbl.typeform.com/to/sRNc1NrB?typeform-source=2dot4.com',
				img: [technology21, technology22, technology23],
				imgWebp: [technology2Webp, technology2Webp, technology2Webp],
				short: false,
				// video: '',
			},
		],
	},
	{
		link: 'diamonds',
		title: 'FROM SEED TO POLISHED STONE',
		text: 'A lab-grown diamond forms through human innovation, using a refined process of pressure, heat, or carbon vapor, creating a gem that mirrors nature’s brilliance.',
		// text: 'Diamonds, process seeds, rough and polished',
		buttonText: 'Explore Now',
		img: diamondHero,
		imgWebp: diamondHeroWebp,
		short: true,
		subContent: [
			// {
			// 	link: 'FROM SEED TO POLISHED STONE',
			// 	content: [
			// 		{
			// 			title: '',
			// 			text: [''],
			// 		},
			// 	],
			// 	buttonText: '',
			// 	img: '',
			// 	imgWebp: '',
			// 	video: 'video',
			// },
			{
				link: 'LAB GROWN DIAMONDS',
				content: [
					{
						title: ['Lab-Grown Diamonds'],
						text: [
							'Growing diamonds in a lab allows remarkable flexibility as size, cut, and colour can all be predetermined. We can now design our pieces first and then grow the diamonds to exact specifications, making genuinely remarkable and original jewellery pieces.',
							"A lab-grown diamond is a marvel of modern science and innovation. Unlike traditional diamonds formed deep within the Earth's crust over millions of years, lab-grown diamonds are meticulously created in controlled laboratory environments.",
							'At the core of these diamonds lies a tiny seed, much like the nucleus of a cell. Using advanced techniques, scientists replicate the natural conditions under which diamonds are formed, but in a fraction of the time. By introducing specific elements and applying heat and pressure, they coax these seeds to grow layer by layer, atom by atom, until they emerge as stunning diamonds.',
							"What's truly remarkable is that these lab-grown diamonds possess the same physical, chemical, and optical properties as their mined counterparts. They exhibit the same brilliance, clarity, and durability, making them indistinguishable to the naked eye and to gemological testing equipment.",
							'From an environmental standpoint, lab-grown diamonds offer a sustainable alternative to traditional mining practices. By eliminating the need for large-scale excavation and reducing the carbon footprint associated with mining operations, they represent a greener and more ethical choice for conscientious consumers.',
							'In essence, lab-grown diamonds represent a harmonious convergence of science, technology, and sustainability, offering a brilliant solution for those seeking beauty without compromise.',
						],
					},
				],
				buttonText: 'CONTACT US',
				buttonLink:
					'https://vinwdzm1fbl.typeform.com/to/sRNc1NrB?typeform-source=2dot4.com',
				img: [
					diamond11,
					diamond12,
					diamond13,
					diamond14,
					diamond15,
					diamond16,
					diamond17,
				],
				imgWebp: [
					diamond11Webp,
					diamond12Webp,
					diamond13Webp,
					diamond14Webp,
					diamond15Webp,
					diamond16Webp,
					diamond17Webp,
				],
				short: false,
				// video: '',
			},
			{
				link: 'Our Standard',
				content: [
					{
						title: ['Our Standard'],
						text: [
							'At 2DOT4, we redefine excellence by marrying the intrinsic properties of diamonds with the precision of a perfect cut. Our unwavering commitment is to deliver unparalleled light performance through a harmonious fusion of color, clarity, and cut—the cornerstone of our revolutionary 2DOT4 standard.',
							'Expect nothing short of brilliance as we consistently offer diamonds within the esteemed D to F color range, paired exclusively with ideal or excellent cuts. This meticulous calibration ensures optimal light performance, setting a new benchmark in the industry.',
							'We pride ourselves on cultivating stones free from any milk or black inclusions, guaranteeing your diamond radiates the utmost brilliance and fire—the epitome of sought-after beauty in the diamond realm.',
							'Join us as we boldly reshape the landscape of the diamond industry, setting a new standard of excellence with every facet, every sparkle, and every shimmering moment.',
						],
					},
				],
				buttonText: 'CONTACT US',
				buttonLink:
					'https://vinwdzm1fbl.typeform.com/to/sRNc1NrB?typeform-source=2dot4.com',
				img: [diamond31, diamond32, diamond33, diamond34],
				imgWebp: [diamond2Webp, diamond2Webp, diamond2Webp, diamond2Webp],
				short: false,
				// video: '',
			},
		],
	},
	{
		link: 'applications',
		title: 'Applications',
		text: 'Our cutting-edge R&D team is revolutionizing the diamond industry. We create stunning gem diamonds and pioneer innovative industrial applications for lab-grown diamonds. Leveraging advanced technology and rigorous research, we set new standards and lead the market. Discover the future of diamonds with us.',
		buttonText: 'Explore Now',
		img: applicationHero,
		imgWebp: applicationHeroWebp,
		short: true,
		subContent: [
			{
				link: 'Diamond substrate',
				content: [
					{
						title: ['Diamond substrate'],
						text: [
							'Our research into diamond substrates is foundational to our broader R&D initiatives. These substrates are critical for a variety of research and industrial applications, serving as the perfect base for further material growth and experimental analysis. Our team has developed a meticulous process for manufacturing, cutting, and polishing these substrates in-house, ensuring they meet the high standards required for advanced applications.',
							'Utilizing these substrates, our researchers have been able to grow epitaxial layers for semiconductor devices and conduct experiments that exploit the unique thermal, electrical, and optical properties of diamonds. This work underpins a range of innovations in electronics and photonics.',
						],
					},
				],
				buttonText: 'CONTACT US',
				buttonLink:
					'https://vinwdzm1fbl.typeform.com/to/sRNc1NrB?typeform-source=2dot4.com',
				img: [application1, application12],
				imgWebp: [application1Webp, application12Webp],
				short: false,
				// video: '',
			},
			{
				link: 'Thermal Management',
				content: [
					{
						title: ['Thermal Management'],
						text: [
							'Our work with polycrystalline diamond heat spreaders highlights our commitment to solving modern challenges in electronics. Leveraging the unparalleled thermal conductivity of diamonds, our R&D has focused on developing heat spreaders that efficiently manage thermal energy in electronic devices. This research is crucial for enhancing the performance and longevity of compact, high-heat components like transistors and laser diodes.',
							'Our advancements in this area are paving the way for the next generation of electronic devices that are smaller, faster, and more energy-efficient, aligning with global sustainability goals.',
						],
					},
				],
				buttonText: 'CONTACT US',
				buttonLink:
					'https://vinwdzm1fbl.typeform.com/to/sRNc1NrB?typeform-source=2dot4.com',
				img: [application2, application22],
				imgWebp: [application2Webp, application22Webp],
				short: false,
				// video: '',
			},
			{
				link: 'Diamond Cutting Tools',
				content: [
					{
						title: ['Diamond Cutting Tools'],
						text: [
							'The development of diamond cutting tools represents a significant segment of our research efforts. Our scientists and engineers have been exploring the applications of both single crystal and polycrystalline diamond (PCD) in industrial manufacturing.',
							'These tools are celebrated for their unmatched hardness and resistance to wear, making them ideal for machining an array of materials across various industries. Our research aims to enhance the precision, surface finish, and overall durability of these tools, thereby boosting productivity and efficiency in sectors such as automotive, aerospace, and metalworking. Our commitment to this area signifies our dedication to supporting industrial advancement and innovation.',
						],
					},
				],
				buttonText: 'CONTACT US',
				buttonLink:
					'https://vinwdzm1fbl.typeform.com/to/sRNc1NrB?typeform-source=2dot4.com',
				img: [application3, application32],
				imgWebp: [application3Webp, application32Webp],
				short: false,
				// video: '',
			},
			{
				link: 'Semiconductor Diamonds',
				content: [
					{
						title: ['Semiconductor Diamonds'],
						text: [
							'Semiconductor diamonds represent a thrilling frontier in our research efforts. These materials hold the promise of revolutionizing the electronics industry with their superior thermal properties, wide bandgap, and exceptional electrical characteristics. Our team is deeply engaged in exploring the potentials of semiconductor diamonds, aiming to create devices that operate at unprecedented speeds and efficiencies while withstanding extreme conditions.',
							'This research not only contributes to the advancement of electronic devices but also aligns with our vision of sustainable and resilient technology development.',
						],
					},
				],
				buttonText: 'CONTACT US',
				buttonLink:
					'https://vinwdzm1fbl.typeform.com/to/sRNc1NrB?typeform-source=2dot4.com',
				img: [application41, application42],
				imgWebp: [application4Webp, application42Webp],
				short: false,
				// video: '',
			},
			{
				link: 'Summary',
				content: [
					{
						title: ['Summary'],
						text: [
							'At 2DOT4 Diamonds LLC, our pursuit of excellence in the field of lab-grown diamonds extends beyond gemstone production into the realms of technical and industrial applications. Our comprehensive research and development efforts demonstrate our commitment to innovation, quality, and the future of technology. By pushing the boundaries of what is possible with lab-grown diamonds, we are not just crafting the future of our company but also contributing to the broader future of industry and science.',
						],
					},
				],
				buttonText: 'CONTACT US',
				buttonLink:
					'https://vinwdzm1fbl.typeform.com/to/sRNc1NrB?typeform-source=2dot4.com',
				img: [application51],
				imgWebp: [application4Webp],
				short: false,
				// video: '',
			},
		],
	},
];

export const ATELIER = {
	img: dummy,
	subContent: [
		{
			link: 'Atelier Program',
			content: [
				{
					title: [
						'What is Atelier Program',
						'How does the program work?',
						'How long does the Atelier program takes?',
						'What are the capacities of the Atelier Program?',
						'What are the prices for the items of the ATELIER program?',
					],
					text: [
						"Step into our exclusive atelier program, where dreams become dazzling reality. Here, we craft bespoke masterpieces tailored to your every desire. From the smallest detail to the grandest vision, we bring your imagination to life, transforming your dreams into exquisite works of art. With limitless possibilities, let us guide you on a journey to create a one-of-a-kind treasure that captures the essence of your unique story. Your dream awaits – let's make it shine together.",
						'Embark on an enchanting journey with us, where every step is a magical moment toward your ultimate masterpiece. Our meticulous process begins with selecting the perfect model, laying the foundation for your vision. From there, we dive deep into a realm of endless creativity, refining and shaping with each iteration until your dream takes its breathtaking form. Let us guide you through this enchanting voyage, where every detail leads to the creation of a timeless treasure crafted just for you. Your journey to perfection starts here.',
						'The timeline for completing a project can vary significantly based on its complexity, making it challenging to offer a precise estimate. Generally, projects utilizing our pre-selected options are completed more quickly than custom development projects, such as creating a completely new diamond cut, which may require several months for cutting and polishing. Rest assured, we are committed to providing accurate timelines and ensuring each project is completed to the highest standards of quality and craftsmanship.',
						"Our Atelier program is all about crafting unique and special pieces that reflect your individual style. Because we want to give each project the attention it deserves, we have a limited number of spots available each year. If we receive more requests than we can handle right away, don't worry! We'll add you to our waiting list and keep you updated on when we can start working together. Your dream piece is worth the wait, and we're here to make it happen.",
						'The price will be determined based on factors such as quality, materials and complexity, and would be mutually agreed upon between 2DOT4 and the client for each individual case',
					],
				},
			],
			buttonText: 'CONTACT US',
			buttonLink:
				'https://vinwdzm1fbl.typeform.com/to/sRNc1NrB?typeform-source=2dot4.com',
			img: [atelier1, atelier2, atelier3, atelier4, atelier5],
			imgWebp: [
				application1Webp,
				application12Webp,
				application1Webp,
				application12Webp,
				application1Webp,
				application12Webp,
			],
			short: false,
			// video: '',
		},
	],
};

export const discover = [
	{
		img: dummy,
		content: [
			{
				img: [application4],
				imgWebp: [application4Webp],
				title: 'A NAME THAT REFLECTS OUR MANIFESTO',
				text: '2DOT4 is the universal figure referring to the diamond refractive index, synonym of perfection amongst transparent stones. 2DOT4 is our signature, we are creating a perfect and precise standard related to brilliant technology, human intelligence and sensibility.',
			},
		],
	},
];

export const CONTACT = {
	brandName: '2DOT4',
	socials: [
		'https://www.instagram.com/2dot4_diamonds/',
		'https://www.linkedin.com/company/2-dot-4-diamonds-llc/posts/?feedView=all',
		// 'https://facebook.com',
	],
	phoneNo: ['08067586986'],
	mail: ['rhemarx-dev@email.com'],
};

export const FOOTERLINKLIST = [
	{
		link: '/discover',
		label: 'discover',
	},
	{
		link: 'https://vinwdzm1fbl.typeform.com/to/sRNc1NrB?typeform-source=2dot4.com',
		label: 'contact',
	},
	{
		link: '/faq',
		label: 'FAQ',
	},
	{
		link: '/privacy',
		label: 'Privacy Policy',
	},
	{
		link: '/atelier',
		label: 'Atelier Program',
	},
	{
		link: 'https://vinwdzm1fbl.typeform.com/to/sRNc1NrB?typeform-source=2dot4.com',
		label: 'Career',
	},
];

// ! PRIVACY POLICY
export const PRIVACY_POLICY = [
	{
		title: 'Privacy Policy for 2dot4 Diamond',
		text: 'At 2DOT4, we respect your privacy and are dedicated to safeguarding your personal data. This policy explains how we collect, use, and protect your information when you interact with our website or services. Please review it to understand our data practices.',
		list: [],
		intro: true,
	},
	{
		title: 'Information We Collect',
		text: 'We collect personal information to provide and improve our services. This includes:',
		list: [
			{
				title: 'Personal Data',
				desc: 'Name, email address, phone number, shipping address, billing information, and any other details provided during account creation, purchases, or customer service interactions.',
			},
			{
				title: 'Automatically Collected Data',
				desc: 'When you visit our website, certain information is automatically collected. This includes your IP address, browser type, operating system, referring URLs, pages viewed, and how you interact with our website.',
			},
		],
	},
	{
		title: 'Cookies and Tracking Technologies',
		text: 'We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device that help us recognize you and remember your preferences. The types of cookies we use include:',
		list: [
			{
				title: 'Essential Cookies',
				desc: 'These are necessary for the website to function properly. They allow you to navigate the site and use essential features like secure areas and shopping carts.',
			},
			{
				title: 'Performance Cookies',
				desc: "These cookies collect information about how you use our website, such as which pages you visit. The data collected is used to improve the website's performance and user experience.",
			},
			{
				title: 'Functional Cookies',
				desc: 'These cookies remember your preferences and settings, improving your user experience on subsequent visits.',
			},
			{
				title: 'Advertising Cookies',
				desc: 'We use these cookies to deliver personalized advertisements and measure the effectiveness of our marketing campaigns.',
			},
		],
		more: 'You can control cookies through your browser settings, but please note that disabling cookies may affect the functionality of our website.',
	},
	{
		title: 'How We Use Your Information',
		text: 'We use the information we collect for the following purposes:',
		list: [
			{
				title: '',
				desc: 'To process and fulfill orders',
			},
			{
				title: '',
				desc: 'To provide customer support',
			},
			{
				title: '',
				desc: 'To personalize your shopping experience',
			},
			{
				title: '',
				desc: 'To improve our website and services',
			},
			{
				title: '',
				desc: 'To send marketing communications, promotions, and updates (if you have opted in)',
			},
			{
				title: '',
				desc: 'To comply with legal obligations',
			},
		],
	},
	{
		title: 'Data Sharing and Disclosure',
		text: 'We do not sell or rent your personal information to third parties. However, we may share your data with:',
		list: [
			{
				title: 'Service Providers',
				desc: 'Third-party companies that assist us in operating our website, conducting our business, or serving our customers (e.g., payment processors, shipping companies).',
			},
			{
				title: 'Legal Obligations',
				desc: 'If required by law, we may disclose your data to comply with legal processes, enforce our policies, or protect the rights, property, or safety of our business and users.',
			},
		],
	},
	{
		title: 'Data Security',
		text: 'We take the security of your personal information seriously. We use various security measures, including encryption and secure servers, to protect your data from unauthorized access, alteration, disclosure, or destruction.',
	},
	{
		title: 'Your Rights and Choices',
		text: 'You have the following rights regarding your personal data:',
		list: [
			{
				title: 'Access',
				desc: 'You can request a copy of the personal information we hold about you.',
			},
			{
				title: 'Correction',
				desc: 'If your data is inaccurate or incomplete, you can request correction or updates.',
			},
			{
				title: 'Deletion',
				desc: 'You can request the deletion of your personal information, subject to certain legal obligations.',
			},
			{
				title: 'Opt-Out',
				desc: 'You can opt out of marketing communications at any time by following the unsubscribe instructions in the emails we send.',
			},
		],
	},
	{
		title: 'Third-Party Links',
		text: 'Our website may contain links to third-party websites. Please note that we are not responsible for the privacy practices of those websites. We encourage you to review the privacy policies of any external sites you visit.',
	},
	{
		title: 'Data Retention',
		text: 'We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.',
	},
	{
		title: 'Changes to This Privacy Policy',
		text: 'We reserve the right to update this privacy policy at any time. When we do, we will revise the "Last Updated" date at the bottom of this page. We encourage you to review this policy periodically to stay informed about how we are protecting your data.',
	},
	{
		title: 'Contact Us',
		text: 'If you have any questions or concerns about this privacy policy or how we handle your personal information, please contact us at:',
		list: [
			{
				title: 'Email',
				email: 'hello@2dot4diamond.com',
			},
		],
	},
];
