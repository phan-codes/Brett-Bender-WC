import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import ThemeButton from "./ThemeButton";
import NavLinks from "./NavLinks";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ ref }) => {
	const [isMenuShown, setIsMenuShown] = useState(false);

	const handleMenuShow = () => {
		setIsMenuShown(!isMenuShown);
	};

	const hideMenu = () => {
		setIsMenuShown(false);
	};
	return (
		<nav
			className=" relative flex justify-between items-center w-full py-3 px-5 text-black shadow-md dark:text-gray-400 dark:bg-black dark:shadow-gray-950"
			ref={ref}>
			<Link to="/" className="flex justify-center items-center">
				<img src="/svgs/logo.svg" alt="logo" width={80} height={80} />
				<span className="translate-y-3 -translate-x-4 font-bold text-[#e8bc37]">B.E.B</span>
			</Link>
			<NavLinks isMenuShown={isMenuShown} hideMenu={hideMenu} />

			<ThemeButton />
			<HamburgerMenu isMenuShown={isMenuShown} handleMenuShow={handleMenuShow} />
		</nav>
	);
};

export default NavBar;
