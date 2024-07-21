/* eslint-disable react/prop-types */

{
	/* <ImgWithFallback
  src={webpImg}
  fallback={pngImg}
  alt="blah"
/> */
}

const ImgWithFallback = ({
	src,
	fallback,
	type = 'image/webp',
	...delegated
}) => {
	return (
		<picture className="w-screen h-screen !object-center !object-cover overflow-hidden">
			<source
				srcSet={src}
				type={type}
				className="w-screen h-screen !object-center !object-cover overflow-hidden"
			/>
			<img
				src={fallback}
				{...delegated}
				className="w-screen h-screen !object-center !object-cover overflow-hidden"
			/>
		</picture>
	);
};

export default ImgWithFallback;
