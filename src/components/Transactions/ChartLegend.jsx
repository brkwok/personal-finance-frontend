import React from "react";
import { CATEGORY_COLOR_MAP } from "../../helpers/charts";

const ChartLegend = () => {
	return (
		<div className="flex flex-row w-full justify-center items-center space-x-5 pb-3">
			{Object.keys(CATEGORY_COLOR_MAP).map((category, i) => {
				return (
					<div key={`legend ${i}`} className="text-xs space-x-1">
						<i
							className="fa-solid fa-circle fa-2xs"
							style={{ color: CATEGORY_COLOR_MAP[category][0] }}
						></i>
						<span style={{ color: CATEGORY_COLOR_MAP[category][0] }}>
							{category}
						</span>
					</div>
				);
			})}
		</div>
	);
};

export default ChartLegend;
