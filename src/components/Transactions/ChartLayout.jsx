import React, { useEffect, useRef, useState } from "react";
import { Chart } from "react-google-charts";
import useParentDimension from "../../hooks/useParentDimension";

const ChartLayout = ({ data, chartOptions, chartType, chartTitle }) => {
  const ref = useRef();
	const [height, width] = useParentDimension(ref);
	const [options, setOptions] = useState(chartOptions);

	useEffect(() => {
		setOptions((prevOptions) => ({ ...prevOptions, height, width }));
	}, [height, width]);

	return (
		<div className="h-full w-full mb-0 sm:mb-5 md:mb-0">
			<div className="text-sm">{chartTitle}</div>
			<div ref={ref} className="flex h-full items-center justify-left relative first:absolute first:top-0 first:left-0 min-h-[290px]">
				<Chart chartType={chartType} data={data} options={options} />
			</div>
		</div>
	);
}

export default ChartLayout;