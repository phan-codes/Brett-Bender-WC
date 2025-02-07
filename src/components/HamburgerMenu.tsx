import React from "react";
interface HamburgerMenuProps {
	isMenuShown: boolean;
	handleMenuShow?: () => void;
}

export interface NavLinkProp extends HamburgerMenuProps {
	hideMenu: () => void;
}

const HamburgerMenu = ({ isMenuShown, handleMenuShow }: HamburgerMenuProps) => {
	return (
		<div className="flex flex-col gap-y-1 lg:hidden cursor-pointer relative group" onClick={handleMenuShow}>
			<div
				className={`w-7 h-[2px] bg-black dark:bg-gray-200 rounded-full duration-300 group-hover:bg-gray-400 dark:group-hover:bg-gray-500 ${
					isMenuShown ? "rotate-45 translate-y-[6px] duration-300" : ""
				}`}></div>
			<div
				className={`w-10 h-[2px] bg-black dark:bg-gray-200 rounded-full duration-300 group-hover:bg-gray-400 dark:group-hover:bg-gray-500 ${
					isMenuShown ? "hidden" : ""
				}`}></div>
			<div
				className={`w-7 h-[2px] bg-black dark:bg-gray-200 rounded-full self-end duration-300 group-hover:bg-gray-400 dark:group-hover:bg-gray-500 ${
					isMenuShown ? "-rotate-45 duration-300" : ""
				}`}></div>
		</div>
	);
};

export default HamburgerMenu;
