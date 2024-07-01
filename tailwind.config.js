/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			boxShadow: {
				"outline-input-blue": "0 0 0 0.2rem #9696ff",
			},
			keyframes: {
				shake: {
					"0%": { transform: "translateX(0)" },
					"25%": { transform: "translateX(-5px)" },
					"50%": { transform: "translateX(5px)" },
					"75%": { transform: "translateX(-5px)" },
					"100%": { transform: "translateX(0)" },
				},
			},
			animation: {
				shake: "shake 0.5s",
			},
		},
	},
	plugins: [],
};
