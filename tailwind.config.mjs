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
		},
	},
	plugins: [animations],
}
