import React from "react";
import { useTheme } from "../providers/ThemeContext";
import { Link } from "react-router-dom";

const Companies = () => {
	const { theme } = useTheme();
	return (
		<section className="flex group">
			<div className="flex min-w-full justify-around items-center py-3 gap-x-6 border-b border-solid border-gray-200 dark:border-gray-900 animate-slide group-hover:paused">
				<Link to="https://www.wolfgordon.com/" className="inline-block max-w-none" target="_blank">
					<img src="/wolfgordon.png" alt=" wolf gordon" width={150} height={70} />
				</Link>

				<Link to="https://koroseal.com/" className="inline-block max-w-none" target="_blank">
					<img src="/koroseal.png" alt="koroseal" width={150} height={70} />
				</Link>
				<Link to="https://www.innovationsusa.com/" className="inline-block max-w-none" target="_blank">
					<img
						src={`${theme === "light" ? "/innovations-e1466986811546.png" : "/innovationsdark.png"}`}
						alt="innovations"
						width={150}
						height={70}
					/>
				</Link>
				<Link to="https://www.mayaromanoff.com/" className="inline-block mx-3 max-w-none" target="_blank">
					<img src="/mayaR-300x47.png" alt="mayar" width={150} height={70} />
				</Link>
			</div>

			{/* Duplicate */}

			<div className="flex min-w-full justify-around items-center py-3 gap-x-6 border-b border-solid border-gray-200 dark:border-gray-900 animate-slide group-hover:paused">
				<Link to="https://www.wolfgordon.com/" className="inline-block max-w-none" target="_blank">
					<img src="/wolfgordon.png" alt=" wolf gordon" width={150} height={70} />
				</Link>

				<Link to="https://koroseal.com/" className="inline-block max-w-none" target="_blank">
					<img src="/koroseal.png" alt="koroseal" width={150} height={70} />
				</Link>
				<Link to="https://www.innovationsusa.com/" className="inline-block max-w-none" target="_blank">
					<img
						src={`${theme === "light" ? "/innovations-e1466986811546.png" : "/innovationsdark.png"}`}
						alt="innovations"
						width={150}
						height={70}
					/>
				</Link>
				<Link to="https://www.mayaromanoff.com/" className="inline-block mx-3 max-w-none" target="_blank">
					<img src="/mayaR-300x47.png" alt="mayar" width={150} height={70} />
				</Link>
			</div>
		</section>
	);
};

export default Companies;
