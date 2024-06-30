// import React from 'react';
// import { Outlet } from "react-router-dom";
import { useState } from 'react';
// import WheelReact from 'wheel-react';

import { Intro, Main } from '../containers';
import { DATA } from '../utils/data';

const Home = () => {
	const [showIntro, setShowIntro] = useState(true);

	return (
		<div className="!h-full">
			{showIntro ? (
				<Intro closeIntro={() => setShowIntro(false)} />
			) : (
				<Main data={DATA} page="home" />
			)}
		</div>
	);
};

export default Home;
