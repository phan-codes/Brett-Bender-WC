import React from "react";
import { NavLink } from "react-router-dom";
import { NavLinkProp } from "./HamburgerMenu";
import { Link } from "react-feather";

const NavLinks = ({ isMenuShown, hideMenu }: NavLinkProp) => {
	return (
		<div className="w-[80%] flex justify-center items-center">
			<div
				className="flex justify-between items-center w-[80%] py-1 
            px-5">
				<div className="hidden gap-x-2 justify-around items-center w-[70%] lg:flex">
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive
								? "relative py-[2px] px-[6px] mx-2 hover:text-gray-400 dark:hover:text-gray-600 duration-500 before:content-[''] before:h-[2px] before:absolute before:bg-[#052DB9] before:-bottom-0 before:left-0 before:w-14"
								: "relative py-[2px] px-[6px] mx-2 hover:text-gray-400 dark:hover:text-gray-600 duration-500"
						}>
						HOME
					</NavLink>
					<NavLink
						to="/about"
						className={({ isActive }) =>
							isActive
								? "relative py-[2px] px-[6px] mx-2 hover:text-gray-400 dark:hover:text-gray-600 duration-500 before:content-[''] before:h-[2px] before:absolute before:bg-[#052DB9] before:-bottom-0 before:left-0 before:w-[86px]"
								: "relative py-[2px] px-[6px] mx-2 hover:text-gray-400 dark:hover:text-gray-600 duration-500"
						}>
						ABOUT US
					</NavLink>
					<NavLink
						to="/services"
						className={({ isActive }) =>
							isActive
								? "relative py-[2px] px-[6px] mx-2 hover:text-gray-400 dark:hover:text-gray-600 duration-500 before:content-[''] before:h-[2px] before:absolute before:bg-[#052DB9] before:-bottom-0 before:left-0 before:w-20"
								: "relative py-[2px] px-[6px] mx-2 hover:text-gray-400 dark:hover:text-gray-600 duration-500 "
						}>
						SERVICES
					</NavLink>
				</div>
				<div className="hidden lg:block">
					<NavLink
						to="/contact"
						className={({ isActive }) =>
							isActive
								? "border-gray-400 dark:border-gray-700 border-solid border rounded-full py-2 px-4 outline-none hover:bg-gray-100 dark:hover:bg-gray-950 duration-500 bg-gray-100 dark:bg-gray-950"
								: "border-gray-400 dark:border-gray-700 border-solid border rounded-full py-2 px-4 bg-transparent outline-none hover:bg-gray-100 dark:hover:bg-gray-950 duration-500"
						}>
						CONTACT US
					</NavLink>
				</div>

				{/* SMALL SCREEN NAVLINKS */}

				<div
					className={`absolute z-50 min-w-full h-fit flex justify-center top-[70px]  right-0 items-center flex-col bg-white dark:bg-gradient-to-r dark:from-[black] dark:via-[#000207] dark:to-black rounded-md lg:hidden ${
						isMenuShown ? "gap-y-3 py-10 duration-700" : "opacity-0 py-0 gap-y-0 duration-300"
					}`}>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive
								? "relative py-[2px] px-[6px] mx-2 hover:text-gray-400 dark:hover:text-gray-600 duration-500 before:content-[''] before:h-[2px] before:absolute before:bg-[#052DB9] before:-bottom-0 before:left-0 before:w-14"
								: "relative py-[2px] px-[6px] mx-2 hover:text-gray-400 dark:hover:text-gray-600 duration-500"
						}
						onClick={hideMenu}>
						HOME
					</NavLink>
					<NavLink
						to="/about"
						className={({ isActive }) =>
							isActive
								? "relative py-[2px] px-[6px] mx-2 hover:text-gray-400 dark:hover:text-gray-600 duration-500 before:content-[''] before:h-[2px] before:absolute before:bg-[#052DB9] before:-bottom-0 before:left-0 before:w-[86px]"
								: "`relative py-[2px] px-[6px] mx-2 hover:text-gray-400 dark:hover:text-gray-600 duration-500"
						}
						onClick={hideMenu}>
						ABOUT US
					</NavLink>
					<NavLink
						to="/services"
						className={({ isActive }) =>
							isActive
								? "relative py-[2px] px-[6px] mx-2 hover:text-gray-400 dark:hover:text-gray-600 duration-500 before:content-[''] before:h-[2px] before:absolute before:bg-[#052DB9] before:-bottom-0 before:left-0 before:w-20"
								: "relative py-[2px] px-[6px] mx-2 hover:text-gray-400 dark:hover:text-gray-600 duration-500"
						}
						onClick={hideMenu}>
						SERVICES
					</NavLink>

					<NavLink
						to="/contact"
						className={({ isActive }) =>
							isActive
								? "border-gray-400 dark:border-gray-700 border-solid border rounded-full py-2 px-4 outline-none hover:bg-gray-100 dark:hover:bg-gray-950 duration-500 bg-gray-100 dark:bg-gray-950"
								: "border-gray-400 dark:border-gray-700 border-solid border rounded-full py-2 px-4 bg-transparent outline-none hover:bg-gray-100 dark:hover:bg-gray-950 duration-500"
						}
						onClick={hideMenu}>
						CONTACT US
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default NavLinks;
