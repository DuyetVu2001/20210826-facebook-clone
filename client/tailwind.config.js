module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'dark-main': '#18191A',
				'dark-second': '#242526',
				'dark-third': '#3A3B3C',
				'dark-text': '#E4E6EB',
				'main-color': '#1876f2',
			},
			width: {
				'1/7': '14.2857143%',
				'2/7': '28.5714286%',
				'3/7': '42.8571429%',
				'4/7': '57.1428571%',
				'5/7': '71.4285714%',
				'6/7': '85.7142857%',
			},
			screens: {
				xs: '562px',
				'2md': '900px',
				'2lg': '1100px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

// sm: 562px
// 674
// 700

// 900
// 1100

// 540 - 280 -280
// max 360 min 280
