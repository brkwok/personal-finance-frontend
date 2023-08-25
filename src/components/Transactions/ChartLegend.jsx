import React from "react";

const ChartLegend = ({ colorMap }) => {
	return (
		<div className="flex flex-row w-full justify-center items-center space-x-5 pb-3">
			{Object.keys(colorMap).map((category, i) => {
				return (
					<div key={`legend ${i}`} className="text-xs space-x-1">
						<i
							className="fa-solid fa-circle fa-2xs"
							style={{ color: colorMap[category][0] }}
						></i>
						<span style={{ color: colorMap[category][0] }}>
							{category}
						</span>
					</div>
				);
			})}
		</div>
	);
};

export default ChartLegend;
