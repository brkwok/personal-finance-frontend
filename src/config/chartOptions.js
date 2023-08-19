import { DEFAULT_CHART_HEIGHT } from "../config/constants";

export const DOUGHNUT_CHART_OPTIONS = {
	backgroundColor: "",
	chartArea: {width: "90%", height:"90%"},
	height: DEFAULT_CHART_HEIGHT,
	legend: "none",
	pieHole: 0.4,
	pieSliceBorderColor: "",
	pieSliceText: "percent",
	slices: [],
	title: "Distribution",
	titleTextStyle: {
		fontSize: 22,
		color: "",
	},
	tooltip: { isHtml: true }, // Use an HTML tooltip.
};

export const BARCHART_COL_OPTIONS = {
	animation: {
		startup: true,
		duration: 1000,
		easing: "out",
	},
	chartArea: {width: "90%", height:"90%"},
	backgroundColor: "#334155",
	height: DEFAULT_CHART_HEIGHT,
	seriesType: "bars",
	legend: "none",
};

export const BARCHART_OPTIONS = {
	animation: {
		startup: true,
		duration: 1000,
		easing: "out",
	},
	chartArea: {width: "90%", height:"90%"},
	annotations: {
		textStyle: {
			color: "",
			bold: true,
			auraColor: "",
		},
		alwaysOutside: true,
	},
	backgroundColor: "",
	bar: { groupWidth: "60%" },
	hAxis: {
		textStyle: {
			color: "",
		},
		format: "$###,##0",
		viewWindowMode: "maximized",
	},
	height: DEFAULT_CHART_HEIGHT,
	isStacked: true,
	legend: "none",
	series: [],
	title: "Monthly Total",
	titleTextStyle: {
		fontSize: 22,
		color: "",
	},
	tooltip: { isHtml: true }, // Use an HTML tooltip.
	vAxis: {
		textStyle: {
			color: "",
		},
	},
};
