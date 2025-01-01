/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

{
	/* <ImgWithFallback
  src={webpImg}
  fallback={pngImg}
  alt="blah"
/> */
}

import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImgWithFallback = ({ src, mobile, centered, ...delegated }) => {
	return (
		<div className="w-screen h-screen !object-center !object-cover overflow-hidden">
			<picture className="w-screen h-screen !object-center !object-cover overflow-hidden lg:hidden">
				<LazyLoadImage
					height={'100%'}
					src={mobile}
					width={'100%'}
					className="w-screen h-screen !object-cover image-pos"
				/>
			</picture>
			<picture className="w-screen h-screen !object-center !object-cover overflow-hidden hidden lg:block">
				<LazyLoadImage
					height={'100%'}
					src={src}
					width={'100%'}
					className={`w-screen h-screen !object-cover ${
						centered ? 'object-center' : 'image-pos'
					}`}
				/>
			</picture>
		</div>
	);
};

export default ImgWithFallback;
