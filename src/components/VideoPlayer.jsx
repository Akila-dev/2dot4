/* eslint-disable react/prop-types */
import { useRef, useEffect } from 'react';

export default function VideoPlayer({ src }) {
	const videoRef = useRef();
	useEffect(() => {
		videoRef.current.defaultMuted = true;
		videoRef.current.defaultPlaybackRate = 1;
		videoRef.current.controls = false;
		videoRef.current.autoplay = true;
		videoRef.current.loop = true;
		console.log(videoRef);
	});

	return (
		<video
			className="w-full h-screen object-cover"
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
