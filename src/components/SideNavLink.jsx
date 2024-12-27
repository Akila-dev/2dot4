/* eslint-disable react/prop-types */
const SideNavLink = ({ data, active, id, onClick }) => {
	return (
		<button
			className={`w-full h-full md:h-auto block uppercase text-[3vw] md:text-base xl:text-[1.1rem] hover:font-medium hover:text-[--white] pointer-events-auto text-left  text-nowrap md:text-wrap`}
			onClick={onClick}
		>
			{active === id && (
				<span
					className={`hidden md:block absolute left-0 mt-3 h-[20px] md:w-[1.35rem] lg:w-[1.75rem] border-t-[1.5px] border-[--lines] transition duration-1000`}
				></span>
			)}
			<span
				className={
					active === id
						? '!text-[--white] !font-semibold transition duration-1000'
						: 'text-[#acacac] !font-normal'
				}
			>
				{data.link}
			</span>
		</button>
	);
};

export default SideNavLink;
