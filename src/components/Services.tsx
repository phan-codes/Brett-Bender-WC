import React from "react";
import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";

const Services = () => {
	return (
		<div className="flex flex-col justify-center items-center text-center gap-5 w-full py-5 px-6 bg-white dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.9),rgba(0,0,0,0.8),rgba(0,0,0,0.7)),url('/src/assets/dark.png')]">
			<Reveal>
				<h1 className="py-5 w-44 font-bold font-Noto tracking-wider text-lg dark:text-gray-300">
					Our Services{" "}
					<hr className="h-1 border-b-solid border-[2px] border-[#e8bc37] outline-none w-20 my-2 rounded-full translate-x-12 " />
				</h1>
			</Reveal>
			<Reveal>
				<p className="text-sm text-gray-500 py-5 px-7">
					We offer a variety of wallcovering and wall protection services to suit your specific needs.
				</p>
			</Reveal>
			<ServiceCard />
		</div>
	);
};

export default Services;
