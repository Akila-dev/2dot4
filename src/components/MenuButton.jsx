// import React from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';

const BenuButton = () => {
	return (
		<button className="flex items-center uppercase gap-1 pointer-events-auto">
			<CgMenuRightAlt className="text-xl md:text-lg" />
			<span className="hidden md:inline">Menu</span>
		</button>
	);
};

export default BenuButton;
