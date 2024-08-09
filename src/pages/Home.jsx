import { useEffect } from 'react';
// import { Outlet } from "react-router-dom";
// import WheelReact from 'wheel-react';

import { Intro, Main } from '../containers';
import { DATA } from '../utils/data';
import { useIntroStore } from '../utils/globals';

const Home = () => {
	const showIntro = useIntroStore((state) => state.showIntro);
	const stopintro = useIntroStore((state) => state.stopintro);

	useEffect(() => {
		const getTouches = (evt) => {
			return evt.touches;
		};
		var xDown = null;
		var yDown = null;

		function handleTouchStart(evt) {
			const firstTouch = getTouches(evt)[0];
			xDown = firstTouch.clientX;
			yDown = firstTouch.clientY;
		}

		function handleTouchMove(evt) {
			if (!xDown || !yDown) {
				return;
			}

			var xUp = evt.touches[0].clientX;
			var yUp = evt.touches[0].clientY;

			var xDiff = xDown - xUp;
			var yDiff = yDown - yUp;

			if (Math.abs(xDiff) > Math.abs(yDiff)) {
				/*most significant*/
				if (xDiff > 0) {
					/* right swipe */
				} else {
					/* left swipe */
				}
			} else {
				if (yDiff > 0) {
					/* down swipe */
					stopintro();
				} else {
					/* up swipe */
				}
			}
			/* reset values */
			xDown = null;
			yDown = null;
		}

		window.addEventListener('touchstart', handleTouchStart, false);
		window.addEventListener('touchmove', handleTouchMove, false);

		return () => {
			window.addEventListener('touchstart', handleTouchStart, false);
			window.addEventListener('touchmove', handleTouchMove, false);
		};
	}, []);

	return (
		<div className="!h-full">
			{showIntro ? (
				<Intro closeIntro={stopintro} />
			) : (
				<Main data={DATA} page="home" />
			)}
		</div>
	);
};

export default Home;
