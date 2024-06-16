/* eslint-disable react/prop-types */
const SideNav = ({ data, active }) => {
	return (
		<div className="md:space-y-3">
			{data.map((item, id) => (
				<button
					className="block uppercase text-lg font-medium text-[--grey]"
					key={id}
				>
					{active === id && (
						<span className="hidden md:block absolute left-0 mt-3 h-[20px] w-[1.75rem] border-t-[1.5px] border-[--lines]"></span>
					)}
					<span className={active === id ? 'text-[--white] font-semibold' : ''}>
						{item.link}
					</span>
				</button>
			))}
		</div>
	);
};

export default SideNav;
