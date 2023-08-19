/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				"bluegray-900": "#0F172A",
				"bluegray-800": "#1E293B",
				"bluegray-700": "#334155",
				"bluegray-600": "#475569",
				"bluegray-500": "#64748B",
				"bluegray-400": "#94A3B8",
				"bluegray-300": "#CBD5E1",
				"bluegray-200": "#E2E8F0",
				"bluegray-100": "#F1F5F9",
				"bluegray-50": "#F8FAFC",
			},
			screens: {
				sm: "640px",
				// => @media (min-width: 640px) { ... }

				md: "768px",
				// => @media (min-width: 768px) { ... }

				lg: "1024px",
				// => @media (min-width: 1024px) { ... }

				xl: "1280px",
				// => @media (min-width: 1280px) { ... }

				"2xl": "1536px",
				// => @media (min-width: 1536px) { ... }
			},
		},
	},
	plugins: [],
};
