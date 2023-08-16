import React, { useEffect, useState } from "react";

import { fetchDateRange } from "../../api/transaction";

const DatePicker = ({ setSelectedYear, setSelectedMonth }) => {
	const [yearRange, setYearRange] = useState([new Date().getFullYear()]);
	const months = Array.from({ length: 12 }, (_, idx) => idx + 1);

	useEffect(() => {
		const getOldestDate = async () => {
			const res = await fetchDateRange();
      const data = res.data

			const addedRange = [];

			if (data.year) {
				for (let i = yearRange[0] - 1; i >= data.year; i--) {
					addedRange.push(i);
				}

				setYearRange((oldArray) => [...oldArray, ...addedRange]);
			}
		};

    getOldestDate();
	}, []);

  console.log(yearRange);

	return <div>Date Picker</div>;
};

export default DatePicker;
