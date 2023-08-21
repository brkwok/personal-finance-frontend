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

export const CATEGORY_COLOR_MAP = {
	"Food and Drink": ["#3366CC", "#85a3e0"],
	Payment: ["#0BBBD4", "#6ee7f7"],
	Transfer: ["#DC3912", "#f48b71"],
	Travel: ["#FF9900", "#ffc266"],
	Other: ["#109618", "#75f07d"],
};

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
		const prevToolTip = constructTooltipStringBarCol(
			category,
			prevTotal,
			prevMonth
		);
		const currToolTip = constructTooltipStringBarCol(
			category,
			currTotal,
			currMonth
		);

		return [
			category,
			prevTotal,
			`color: ${CATEGORY_COLOR_MAP[category][1]}`,
			prevToolTip,
			currTotal,
			`color: ${CATEGORY_COLOR_MAP[category][0]}`,
			currToolTip,
			"$" + currTotal.toFixed(2),
		];
	});

	return body;
};

export const getBarChartRow = (aggregation, month, categories) => {
	const sumTotal = aggregation.reduce((acc, curr) => acc + curr.totalAmount, 0);

	const row = [month];

	categories.forEach((category) => {
		const field = aggregation.find((agg) => agg.category === category);
		row.push(field?.totalAmount || 0);
		row.push(`color: ${CATEGORY_COLOR_MAP[category][0]}`)
		row.push(constructTooltipstringBarChart(category, field?.totalAmount || 0, month));
	});

	row.push(sumTotal.toFixed(2));

	return row;
};

const findTotalAmountByCategory = (arr, category) => {
	const data = arr.find((agg) => agg.category === category);

	const totalAmount = data?.totalAmount || 0;

	return Math.abs(totalAmount);
};

const constructTooltipStringBarCol = (category, amount, month) => {
	const amountStr = amount.toFixed(2);

	return `
  <div style="color: black; margin: 7px; font-size: 13px; font-family: Arial, Helvetica, sans-serif;">
    <b>${category}</b><br style="line-height: 18px;" />
    ${month}:&nbsp;<b>$${amountStr}</b>
  </div>
  `;
};

const constructTooltipstringBarChart = (category, amount, month) => {
	const amountStr = amount.toFixed(2);

	return `
	<div style="color: black; margin: 7px; font-size: 13px; font-family: Arial, Helvetica, sans-serif;">
		<b>${month}</b><br style="line-height: 18px;" />${category}:&nbsp;<b>$${amountStr}</b>
	</div>
	`;
};
