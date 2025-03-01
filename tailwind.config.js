
// @type {import('tailwindcss').Config} 
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
	   extend: {
		  colors: {
			 background: "#fff",
			 primary: "#000",
			 secondary: "#FD853A",
			 footerBg: "#272727",
		  },
 
		  fontFamily: {
			 heading: "Urbanist",
			 bodyContent: "lufga",
			 montserrat: ["Montserrat", "sans-serif"],
			 georgia: ["Georgia", "serif"],
		  },
	   },
	},
	plugins: [],
 };
 