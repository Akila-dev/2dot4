/* eslint-disable react/prop-types */
import { ImgWithFallback, CTA } from '../components';

const Slide = ({ data, id, page }) => {
	return (
		<div
			id={page + id}
			className={`slide w-full h-full object-cover overflow-hidden relative scroll-content transition`}
		>
			<div className="absolute !bottom-0 left-0 w-full h-screen overflow-hidden ">
				<ImgWithFallback
					src={data.imgWebp}
					fallback={data.img}
					alt={data.link}
				/>
				<div className="bg-overlay absolute top-0 left-0"></div>
			</div>
			{/* Content */}
			<div className="md:py-[60px] px-5 md:px-[--sidebar-w] w-full h-full">
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

export default Slide;
