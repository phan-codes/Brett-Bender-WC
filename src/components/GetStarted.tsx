import React from "react";
import Reveal from "./Reveal";
import { Link } from "react-router-dom";

const GetStarted = () => {
	return (
		<div className="bg-[#052DB9] font-Noto tracking-wider flex flex-col items-center justify-center text-center text-gray-200 gap-y-6 py-24">
			<Reveal>
				<h1 className="font-semibold text-2xl md:text-3xl">Ready for the design changes you need? </h1>
			</Reveal>
			<Reveal>
				<Link
					to="/services"
					className="bg-[#e8bc37] py-2 px-4 font-bold text-gray-600 rounded-full shadow-lg hover:bg-[#b3912b] animate-bounce">
					GET STARTED
				</Link>
			</Reveal>
		</div>
	);
};

export default GetStarted;
