import React from "react";
import Reveal from "./Reveal";
import { Link } from "react-router-dom";

const HomeContacts = () => {
	return (
		<div className="px-10 py-14 flex flex-col justify-center items-center gap-y-6 bg-white dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.9),rgba(0,0,0,0.8),rgba(0,0,0,0.7)),url('/src/assets/dark.png')] md:flex-row text-center md:justify-around">
			<Reveal>
				<Link
					to="mailto:info@bebwallcovering.com"
					className="flex flex-col items-center justify-center gap-y-2 hover:bg-slate-200 px-5 py-3 rounded-full outline-none border-none dark:hover:bg-gradient-to-r dark:hover:from-[#161620] dark:hover:via-[#12121c] dark:hover:to-[#0d0c11] ">
					<img src="/svgs/email.svg" alt="email icon" width={35} height={35} className="dark:invert" />
					<p className="text-sm mx-2 dark:text-gray-300">info@bebwallcovering.com</p>
				</Link>
			</Reveal>
			<Reveal>
				<Link
					to="/"
					className="flex flex-col items-center justify-center gap-y-2 hover:bg-slate-200 px-5 py-3 rounded-full outline-none border-none dark:hover:bg-gradient-to-r dark:hover:from-[#161620] dark:hover:via-[#12121c] dark:hover:to-[#0d0c11]">
					<img src="/svgs/location.svg" alt="email icon" width={35} height={35} className="dark:invert" />
					<p className="text-sm dark:text-gray-300 mx-2 max-w-56">
						10722 Arrow Route Ste 806 Rancho Cucamonga, CA 91730
					</p>
				</Link>
			</Reveal>

			<Reveal>
				<Link
					to="tel:+19094663733"
					className="flex flex-col items-center justify-center gap-y-2 hover:bg-slate-200 px-5 py-3 rounded-full outline-none border-none dark:hover:bg-gradient-to-r dark:hover:from-[#161620] dark:hover:via-[#12121c] dark:hover:to-[#0d0c11]">
					<img src="/svgs/phone.svg" alt="email icon" width={35} height={35} className="dark:invert" />
					<p className="text-sm mx-2 dark:text-gray-300">(909) 466-3733</p>
				</Link>
			</Reveal>
		</div>
	);
};

export default HomeContacts;
