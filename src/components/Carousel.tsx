import { CarouselProps } from "../../types";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export const Carousel = ({ children, autoSlide, autoSlideInterval }: CarouselProps) => {
	const [current, setCurrent] = useState<number>(0);

	const previous = () => {
		setCurrent((current) => (current === 0 ? children.length - 1 : current - 1));
	};

	const next = () => {
		setCurrent((current) => (current === children.length - 1 ? 0 : current + 1));
	};

	useEffect(() => {
		if (!autoSlide) return;

		const slideInterval = setInterval(next, autoSlideInterval);

		return () => clearInterval(slideInterval);
	}, []);
	return (
		<div className="overflow-hidden relative">
			<div
				className="flex transition-transform ease-out duration-1000 relative"
				style={{ transform: `translateX(-${current * 100}%)`, willChange: "transform" }}>
				{children}
			</div>
			<div className="absolute inset-0 flex justify-between  items-center p-4">
				<button
					onClick={previous}
					className="p-1 rounded-full shadow bg-gray-200  dark:bg-gray-950 text-[#e8bc37] hover:bg-gray-300 dark:hover:bg-gray-900">
					<ChevronLeft size={20} />
				</button>
				<button
					onClick={next}
					className="p-1 rounded-full shadow bg-gray-200  dark:bg-gray-950 text-[#e8bc37] hover:bg-gray-300 dark:hover:bg-gray-900">
					<ChevronRight size={20} />
				</button>
			</div>
			<div className="absolute bottom-6 right-0 left-0">
				<div className="flex items-center justify-center gap-2">
					{children.map((_, i) => (
						<div
							key={i}
							className={`transition-all w-1 h-1 bg-white rounded-full ${
								current === i ? "p-1" : "bg-opacity-40"
							}`}></div>
					))}
				</div>
			</div>
		</div>
	);
};
