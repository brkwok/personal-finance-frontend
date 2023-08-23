import React, { useState } from "react";

const SlideContainer = ({ children }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
	};

	const prevSlide = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + children.length) % children.length
		);
	};

	return (
		<div className="relative overflow-hidden h-fit">
			<div
				className="flex transition-transform duration-300 ease-in-out transform"
				style={{
					width: `${children.length * 100}%`,
					transform: `translateX(-${(currentIndex * 100) / children.length}%)`,
				}}
			>
				{children.map((child, index) => (
					<div key={`${index} slider-children`} className="w-full">
						{child}
					</div>
				))}
			</div>
			<div className="flex w-full justify-center items-center pt-3">
				<div className="flex items-center transform">
					{children.map((_, index) => (
						<div
							key={`${index} bubbleMap`}
							className={`mx-1 rounded-full hover:bg-bluegray-400 hover:cursor-pointer ${
								index === currentIndex
									? "bg-bluegray-400 w-[12px] h-[12px]"
									: "bg-gray-300 w-[10px] h-[10px]"
							}`}
							onClick={() => setCurrentIndex(index)}
						></div>
					))}
				</div>
			</div>
			<button
				className="absolute text-transparent hover:text-bluegray-400 hover:bg-opacity-40 hover:bg-bluegray-300 h-full w-4 top-1/2 left-0 z-50 transform -translate-y-1/2"
				onClick={prevSlide}
			>
				<div>{"<"}</div>
			</button>
			<button
				className="absolute text-transparent hover:text-bluegray-400 hover:bg-opacity-40 hover:bg-bluegray-300 top-1/2 h-full w-4 right-0 transform -translate-y-1/2"
				onClick={nextSlide}
			>
				<div>{">"}</div>
			</button>
		</div>
	);
};

export default SlideContainer;
