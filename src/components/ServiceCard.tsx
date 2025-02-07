import React from "react";
import Reveal from "./Reveal";
import { Link } from "react-router-dom";

const ServiceCard = () => {
	return (
		<div className="flex flex-wrap w-full gap-y-7 justify-center items-center md:gap-x-10 pt-10 pb-16">
			<Reveal>
				<div className="flex flex-col flex-wrap rounded-lg h-fit max-w-96 bg-gray-50 hover:border hover:border-[#e8bc37] dark:bg-gradient-to-r dark:from-[#161620] dark:via-[#12121c] dark:to-[#0d0c11] hover:-translate-y-2 duration-700 shadow-lg dark:shadow-gray-900 dark:shadow-sm">
					<div className="m-5">
						<Link to="/services">
							<img
								src="/vinylwallpaper.jpg"
								alt="vinyl"
								width={300}
								height={200}
								className="w-full h-64 pb-4 rounded"
							/>
							<h1 className="font-bold font-Noto text-[#e8bc37]">Vinyl wallcovering and wall papers</h1>
							<p className="text-xs leading-5 text-gray-400 py-2 text-wrap">
								We offer professional quality installation of all types of commercial vinyl wallcoverings, patterned
								rolled goods, digital murals, and dry erase.
							</p>
						</Link>
					</div>
				</div>
			</Reveal>
			<Reveal>
				<div className="flex flex-col flex-wrap rounded-lg h-fit max-w-96 bg-gray-50 hover:border hover:border-[#e8bc37] dark:bg-gradient-to-r dark:from-[#161620] dark:via-[#12121c] dark:to-[#0d0c11] hover:-translate-y-2 duration-700 shadow-lg dark:shadow-gray-900 dark:shadow-sm">
					<div className="m-5 ">
						<Link to="/services">
							<img
								src="/wallprotection.jpg"
								alt="vinyl"
								width={300}
								height={200}
								className="w-full h-64 pb-4 rounded"
							/>
							<h1 className="font-bold font-Noto text-[#e8bc37]">Wall protection</h1>
							<p className="text-xs leading-5 text-gray-400 py-4">
								We&apos;re fully experienced in installation of rigid vinyl sheet wall protection and FRP products.
							</p>
						</Link>
					</div>
				</div>
			</Reveal>

			<Reveal>
				<div className="flex flex-col flex-wrap rounded-lg h-fit max-w-96 bg-gray-50 hover:border hover:border-[#e8bc37] dark:bg-gradient-to-r dark:from-[#161620] dark:via-[#12121c] dark:to-[#0d0c11] hover:-translate-y-2 duration-700 shadow-lg dark:shadow-gray-900 dark:shadow-sm">
					<div className="m-5 ">
						<Link to="/services">
							<img src="/tackable.jpg" alt="vinyl" width={300} height={200} className="w-full h-64 pb-4 rounded" />
							<h1 className="font-bold font-Noto text-[#e8bc37]">Tackable wall panels</h1>
							<p className="text-xs leading-5 text-gray-400 py-4">
								We expertly install vinyl or fabric covered tackable wall panels, as well as specialized acoustic wall
								panels.
							</p>
						</Link>
					</div>
				</div>
			</Reveal>
		</div>
	);
};

export default ServiceCard;
