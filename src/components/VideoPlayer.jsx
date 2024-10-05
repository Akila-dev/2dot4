/* eslint-disable react/prop-types */
import { useRef, useEffect } from 'react';

export default function VideoPlayer({ src }) {
	const videoRef = useRef();
	useEffect(() => {
		videoRef.current.defaultMuted = true;
	});

	return (
		<video
			className="w-full h-full object-cover"
			ref={videoRef}
			loop
			autoPlay
			muted
			playsInline
		>
			<source src={src} type="video/mp4" />
		</video>
	);
}
