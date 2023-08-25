export const DOUGHNUT_CHART_OPTIONS = {
	backgroundColor: "",
	chartArea: { width: "90%", height: "90%" },
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
	colors: [],
};

export const BARCHART_COL_OPTIONS = {
	animation: {
		startup: true,
		duration: 1000,
		easing: "out",
	},
	annotations: {
		textStyle: {
			bold: true,
			auraColor: "#ffffff",
		},
		alwaysOutside: true,
	},
	backgroundColor: "",
	chartArea: {
		width: "75%",
		height: "90%",
	},
	hAxis: {
		textPosition: "none",
		textStyle: {
			color: "",
		},
	},
	tooltip: { isHtml: true },
	legend: "none",
	title: "Spendings",
	titleTextStyle: {
		fontSize: 22,
		color: "",
	},
	vAxis: {
		textStyle: {
			color: "#CBD5E1",
		},
		format: "$###,##0",
	},
};

export const BARCHART_OPTIONS = {
	animation: {
		startup: true,
		duration: 1000,
		easing: "out",
	},
	chartArea: { width: "65%", height: "90%" },
	annotations: {
		textStyle: {
			bold: true,
			color: "#CBD5E1",
			auraColor: "#CBD5E1",
		},
		alwaysOutside: true,
	},
	backgroundColor: "",
	bar: { groupWidth: "60%" },
	hAxis: {
		textStyle: {
			color: "#CBD5E1",
		},
		format: "$###,##0",
		viewWindowMode: "maximized",
	},
	isStacked: true,
	tooltip: { isHtml: true }, // Use an HTML tooltip.
	vAxis: {
		textStyle: {
			color: "#94A3B8",
			fontSize: 10,
		},
		format: "currency",
	},
	legend: "none",
};
