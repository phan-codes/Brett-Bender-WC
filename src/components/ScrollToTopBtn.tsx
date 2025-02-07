import React from "react";

const ScrollToTopBtn = ({ scrollToTop, isVisible }) => {
	return (
		<>
			{isVisible && (
				<button
					onClick={scrollToTop}
					className="fixed right-10 bottom-20 rounded-[100%] py-2 px-5 bg-[#e8bc37] text-3xl text-[#052DB9] shadow-lg shadow-black cursor-pointer animate-bounce md:py-3 md:px-5">
					&#8593;
				</button>
			)}
		</>
	);
};

export default ScrollToTopBtn;
