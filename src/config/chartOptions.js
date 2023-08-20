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
	format: "currency",
	tooltip: { isHtml: true }, // Use an HTML tooltip.
};

export const BARCHART_COL_OPTIONS = {
	animation: {
		startup: true,
		duration: 1000,
		easing: 'out',
	},
	annotations: {
		textStyle: {
			bold: true,
			auraColor: '#ffffff',
		},
		alwaysOutside: true,
	},
	backgroundColor: '',
	chartArea: {
		width: '75%',
		height: '90%',
	},
	hAxis: {
		textPosition: 'none',
		textStyle: {
			color: '',
		},
	},
	tooltip: { isHtml: true },
	legend: 'none',
	title: 'Spendings',
	titleTextStyle: {
		fontSize: 22,
		color: '',
	},
	vAxis: {
		textStyle: {
			color: '#CBD5E1',
		},
		format: '$###,##0',
	},
};

export const BARCHART_OPTIONS = {
	animation: {
		startup: true,
		duration: 1000,
		easing: "out",
	},
	chartArea: { width: "70%", height: "90%" },
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
	// height: DEFAULT_CHART_HEIGHT,
	isStacked: true,
	// series: [],
	// title: "Monthly Total",
	// titleTextStyle: {
	// 	fontSize: 22,
	// 	color: "",
	// },
	// tooltip: { isHtml: true }, // Use an HTML tooltip.
	vAxis: {
		textStyle: {
			color: "#94A3B8",
			fontSize: 10,
		},
		format: "currency",
	},
	legend: "none",
};
