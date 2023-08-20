const months = [
	"month",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

const CATEGORY_COLOR = [
	["#3366CC", "#85a3e0"],
	["#0BBBD4", "#6ee7f7"],
	["#DC3912", "#f48b71"],
	["#FF9900", "#ffc266"],
	["#109618", "#75f07d"],
	["#990099", "#ff66ff"],
	["#ffe600", "#fff066"],
	// add more colors if needed
];

export const extractMonth = (month) => {
	return months[month];
};

export const mapColors = (categories) => {
	const map = {};
	categories.forEach((category, i) => {
		map[category] = [...CATEGORY_COLOR[i]];
	});

	return map;
};

export const constructBarChartColBody = (
	aggregation,
	categories,
	colorMap,
	currMonth,
	prevMonth
) => {
	const { currentMonthAggregation, previousMonthAggregation } = aggregation;

	const body = categories.map((category) => {
		const prevTotal = findTotalAmountByCategory(
			previousMonthAggregation,
			category
		);
		const currTotal = findTotalAmountByCategory(
			currentMonthAggregation,
			category
		);
    const prevToolTip = constructTooltipString(category, prevTotal, prevMonth);
    const currToolTip = constructTooltipString(category, currTotal, currMonth);

		return [
			category,
			prevTotal,
			`color: ${colorMap[category][1]}`,
      prevToolTip,
			currTotal,
			`color: ${colorMap[category][0]}`,
      currToolTip,
      '$' + currTotal.toFixed(2)
		];
	});

	function customSort(a, b) {
		if (a[0] === "Other") return 1; // Move "Other" to the end
		if (b[0] === "Other") return -1; // Keep "Other" in place
		return 0; // No change for other categories
	}

	body.sort(customSort);
	return body;
};

const findTotalAmountByCategory = (arr, category) => {
	const data = arr.find((agg) => agg.category === category);

	const totalAmount = data?.totalAmount || 0;

	return Math.abs(totalAmount);
};

const constructTooltipString = (category, amount, month) => {
	const amountStr = amount.toFixed(2);

	return `
  <div style="color: black; margin: 7px; font-size: 13px; font-family: Arial, Helvetica, sans-serif;">
    <b>${category}</b><br style="line-height: 18px;" />
    ${month}:&nbsp;<b>$${amountStr}</b>
  </div>
  `;
};
