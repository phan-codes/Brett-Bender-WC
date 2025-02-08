import React from "react";

const ScrollToTopBtn = ({ scrollToTop, isVisible }) => {
	return (
		<>
			{isVisible && (
				<button
					onClick={scrollToTop}
					className="fixed right-10 bottom-20 rounded-[100%] py-[3px] px-[6px] bg-[#e8bc37] text-xl text-[#052DB9] shadow-lg shadow-black cursor-pointer animate-bounce md:py-2 md:px-4 md:text-2xl">
					&#8593;
				</button>
			)}
		</>
	);
};

export default ScrollToTopBtn;
