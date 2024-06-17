// import React from 'react';
// import { Outlet } from "react-router-dom";
import { useState } from 'react';

import { Intro, Main } from '../containers';
import { DATA } from '../utils/data';

const Home = () => {
	const [showIntro, setShowIntro] = useState(true);
	return (
		<div className="!h-full">
			{showIntro ? (
				<Intro closeIntro={() => setShowIntro(false)} />
			) : (
				<Main data={DATA} />
			)}
		</div>
	);
};

export default Home;
