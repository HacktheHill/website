module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"square-svg": 'url("/src/assets/SVGs/square_bg.svg")',
				"2024-bg": 'url("/src/assets/SVGs/2024.svg")',
			},
		},
		colors: {
			primary: "#FF3535",
			light_accent: "#ff7979",
			dark_accent: "#551a1a",
			"shade-1": "#ebebeb",
			"shade-2": "#e0e0e0",
			"shade-3": "#bdbdbd",
			"shade-4": "#9e9e9e",
			"shade-5": "#757575",
			"shade-6": "#616161",
			"shade-7": "#424242",
			"shade-8": "#212121",
			"shade-9": "#171717",
			"shade-10": "#090909",
			navbar: "#212121a9",
			"bg-2024": "#84010b",
		},
		screens: {
			xs: { max: "480px" },
			sm: { max: "640px" },
			md: { max: "768px" },
			lg: { max: "1024px" },
			xl: { max: "1280px" },
			"2xl": { max: "1536px" },
		},
	},
	plugins: [],
};
