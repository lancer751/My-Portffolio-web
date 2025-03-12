/** @type {import('tailwindcss').Config} */
// Supports weights 400-800
import animations from '@midudev/tailwind-animations'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode:['class', '[data-theme="dark"]'],
	theme: {
		extend: {
			keyframes: {
				"vertical-floating": {
					'0%, 100%': {
						transform:' translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				},
				"sway-rigth": {
					"0% ":{
						transform: 'rotate(0deg)'
					},
					"50%": {
						transform: 'rotate(8deg)'
					},
					"100%": {
						transform: 'rotate(0deg)'
					}
				}
			},
			animation:{
				'vertical-floating': 'vertical-floating 1.5s ease-in-out infinite',
				'sway-rigth': "sway-rigth 1.6s ease-out infinite"
			},
			colors: {
				'midnight-eclipse': '#140f07',
				'twilight-navy': '#0e2548',
				'horizon-blue': '#3363b0',
				'celestial-azure': '#69a9fe',
				'glacial-mist': '#b0fcfa',
				'coral-pulse': '#FF6B6B',
				'cyber-steel': '#4A5568',
				'neon-violet': '#7C3AED',
				'cloud-white': '#F7FAFC',
				'matrix-green': '#48BB78',
				'night': "#010519"
			}
		},
	},
	plugins: [animations],
}
