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
		<div className="h-full w-full">
			<div className="text-sm">{chartTitle}</div>
			<div ref={ref} className="flex h-full items-center justify-left relative first:absolute first:top-0 first:left-0">
				<Chart chartType={chartType} data={data} options={options} />
			</div>
		</div>
	);
}

export default ChartLayout;