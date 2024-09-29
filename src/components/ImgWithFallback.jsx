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

const ImgWithFallback = ({
	src,
	fallback,
	type = 'image/webp',
	...delegated
}) => {
	return (
		<picture className="w-screen h-screen !object-center !object-cover overflow-hidden">
			{/* <source
				srcSet={src}
				type={type}
				className="w-screen h-screen !object-center !object-cover overflow-hidden"
			/> */}
			<LazyLoadImage
				height={'100%'}
				src={fallback}
				width={'100%'}
				className="w-screen h-screen object-cover"
			/>
			{/* <img
				src={fallback}
				{...delegated}
				className="w-screen h-screen !object-center !object-cover overflow-hidden"
			/> */}
		</picture>
	);
};

export default ImgWithFallback;
