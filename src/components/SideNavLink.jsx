/* eslint-disable react/prop-types */
const SideNavLink = ({ data, active, id, onClick }) => {
	return (
		<button
			className="w-full h-full md:h-auto block uppercase text-xs md:text-base xl:text-[1.1rem] font-medium text-[--grey] hover:font-medium hover:text-[--white] pointer-events-auto text-left  text-nowrap md:text-wrap"
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
						? 'text-[--white] !font-bold transition duration-1000'
						: ''
				}
			>
				{data.link}
			</span>
		</button>
	);
};

export default SideNavLink;
