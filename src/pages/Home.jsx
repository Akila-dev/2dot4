// import React from 'react';
// import { Outlet } from "react-router-dom";
// import WheelReact from 'wheel-react';

import { Intro, Main } from '../containers';
import { DATA } from '../utils/data';
import { useIntroStore } from '../utils/globals';

const Home = () => {
	const showIntro = useIntroStore((state) => state.showIntro);
	const stopintro = useIntroStore((state) => state.stopintro);

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
