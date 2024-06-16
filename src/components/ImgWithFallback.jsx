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
		<picture className="w-full h-screen object-cover overflow-hidden">
			<source srcSet={src} type={type} />
			<img src={fallback} {...delegated} />
		</picture>
	);
};

export default ImgWithFallback;
