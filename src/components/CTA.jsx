/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Cta = ({ title, text, btnText, href, onClick, short }) => {
	return (
		<div className="container">
			<div
				className={`${
					short ? 'max-w-[500px] text-center' : 'max-w-[900px]'
				} flex flex-col items-center justify-center gap-5 px-[2.5%]`}
			>
				<h1>{title}</h1>
				<p>{text}</p>
				<div className="pt-2 w-full">
					{href ? (
						<Link to={href} className="btn">
							{btnText}
						</Link>
					) : (
						<button onClick={onClick} className="btn">
							{btnText}
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Cta;
