module.exports = {
	mode: "jit",
	content: ["./src/**/*.{html,js,htm}"],
	theme: {
		content: {},
		container: {
			center: true,
			padding: "4rem",
		},
		/*===================================<Breakpoints>===================================*/
		screens: {
			md4: "479.98px",
			// => @media (min-width: 479.98px) { ... }
			md3: "767.98px",
			// => @media (min-width: 767.98px) { ... }
			md2: "991.98px",
			// => @media (min-width: 991.98px) { ... }
			lg: "1199.98px",
			// => @media (min-width: 1199.98px) { ... }
			xl: "1439.98px",
			// => @media (min-width: 1439.98px) { ... }
		},
		/*===================================<Colors>===================================*/
		colors: {
			inherit: "inherit",

			primary: {
				main: "#4F31E4",
				surface: "#F7F5FF",
				border: "#BDB1F6",
				hovered: "#3A1BD1",
				pressed: "#23117F",
				focused: "#4F31E433",
			},

			media: {
				main: "#0D86FF",
				surface: "#E3F3FF",
				border: "#AED7FF",
				hovered: "#0B70D5",
				pressed: "#074380",
				focused: "#0B70D533",
			},

			additional: {
				main: "#F7E474",
				surface: "#FFFDE5",
				border: "#FCF6D1",
				hovered: "#CEBE61",
				pressed: "#7C723A",
				focused: "#F7E47433",
			},

			danger: {
				main: "#E00000",
				surface: "#FFEDED",
				border: "#FFD6D6",
				hovered: "#A30000",
				pressed: "#630000",
			},

			warning: {
				main: "#EA780E",
				surface: "#FFF2E7",
				border: "#FFCA99",
				hovered: "#D16603",
				pressed: "#653508",
			},

			success: {
				main: "#008243",
				surface: "#EBF5F0",
				border: "#B3DAC7",
				hovered: "#006836",
				pressed: "#005029",
			},

			info: {
				main: "#0B5CD7",
				surface: "#ECF2FC",
				border: "#B6CFF3",
				hovered: "#044DBA",
				pressed: "#043C8F",
			},

			neutral: {
				10: "#FFFFFF",
				20: "#F5F5F5",
				30: "#EDEDED",
				40: "#E0E0E0",
				50: "#C2C2C2",
				60: "#9E9E9E",
				70: "#757575",
				80: "#616161",
				90: "#424242",
				100: "#0A0A0A",
			},
		},
		/*===================================<Extend>===================================*/
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				montserrat: ["Montserrat", "sans-serif"],
			},
			spacing: {},
			borderRadius: {},
			borderWidth: {},
			gap: {},
			outlineWidth: {},
			maxWidth: {},
			minWidth: {},
			minHeight: {},
			fontSize: {},
			letterSpacing: {},
			dropShadow: {},
			backgroundImage: {},
		},
		/*===================================<Plugins>===================================*/
	},
	plugins: [],
};
