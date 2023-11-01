import type {Config} from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: {
			monospace: 'Courier New',
		},
		extend: {
			colors: {
				bottomBar: '#2B3E42',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			keyframes: {
				draw: {
					'100%': {strokeDashoffset: '0'},
				},
				opacity: {
					'0%': {opacity: '0'},
					'100%': {opacity: '1'},
				},
			},
			animation: {
				'draw-graph': 'draw 4s linear forwards',
				appear: 'opacity 1s linear forwards',
			},
		},
	},
	plugins: [],
};
export default config;
