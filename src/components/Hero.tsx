import React from "react";
import Reveal from "./Reveal";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<div className="bg-[linear-gradient(to_bottom,rgba(100,100,100,0),rgba(100,100,100,0.05),rgba(100,100,100,0)),url('/src/assets/light.png')] flex flex-col gap-y-5 justify-center items-center text-center py-10 px-6 dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.9),rgba(0,0,0,0.8),rgba(0,0,0,0.7)),url('/src/assets/dark.png')]">
			<Reveal>
				<h1 className="text-4xl text-black leading-normal dark:text-gray-300 font-extrabold font-Noto tracking-wider max-w-96 mx-auto lg:text-5xl">
					Quality &#10003; <br /> <span className="text-[#052DB9]">Experience &#10003;</span> <br />{" "}
					<span className="text-[#e8bc37]">Dedication &#10003;</span>
				</h1>
			</Reveal>
			<Reveal>
				<p className="text-sm text-gray-500">Serving the Southern California region and beyond.</p>
			</Reveal>
			<Reveal>
				<Link
					to="/services"
					className="bg-[#052DB9] inline-block mt-2 py-2 px-4 text-gray-200 rounded-full shadow-lg hover:bg-[#1f368a] animate-bounce">
					Services
				</Link>
			</Reveal>
		</div>
	);
};

export default Hero;
