/* eslint-disable react/prop-types */
const SideNavLink = ({ data, active, id, onClick }) => {
	return (
		<button
			className="block uppercase text-base xl:text-[1.1rem] font-medium text-[--grey] hover:font-medium hover:text-[--white]"
			onClick={onClick}
		>
			{active === id && (
				<span className="hidden md:block absolute left-0 mt-3 h-[20px] md:w-[1.35rem] lg:w-[1.75rem] border-t-[1.5px] border-[--lines]"></span>
			)}
			<span className={active === id ? 'text-[--white] font-semibold' : ''}>
				{data.link}
			</span>
		</button>
	);
};

export default SideNavLink;
