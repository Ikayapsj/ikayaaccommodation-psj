
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Brand colors
				'ikaya': {
					50: '#f8f6f2',
					100: '#efe9dc', /* #efe9dc */
					200: '#e0d5c0',
					300: '#d0c1a4',
					400: '#c0ad88',
					500: '#a47c48', /* #a47c48 */
					600: '#8c6a3e',
					700: '#745834',
					800: '#5c462a',
					900: '#443420',
					950: '#2c2216',
				},
				'ikaya-blue': {
					50: '#f1f4f7',
					100: '#e3e9ef',
					200: '#c7d3df',
					300: '#9bb4c9',
					400: '#6b8faa',
					500: '#506d84', /* #506d84 */
					600: '#445a6e',
					700: '#384a5a',
					800: '#2c3a46',
					900: '#202a32',
					950: '#141a1e',
				},
				'ikaya-green': {
					50: '#f4f7f4',
					100: '#e9efe9',
					200: '#d3dfd3',
					300: '#bdcfbd',
					400: '#a7bfa7',
					500: '#7ea07d', /* #7ea07d */
					600: '#6b8a6a',
					700: '#587457',
					800: '#455e44',
					900: '#324831',
					950: '#1f321e',
				},
				'ikaya-aqua': {
					50: '#f6f9f9',
					100: '#edf3f3',
					200: '#dbe7e7',
					300: '#c9dbdb',
					400: '#b7cfcf',
					500: '#a7c8c7', /* #a7c8c7 */
					600: '#8fa6a5',
					700: '#778483',
					800: '#5f6261',
					900: '#47403f',
					950: '#2f1e1d',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'logoFadeIn': {
					'0%': { opacity: '0', transform: 'translateY(-20px)' },
					'100%': { opacity: '0.8', transform: 'translateY(0)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.4s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'logo-fade-in': 'logoFadeIn 2s ease-in-out',
			},
			fontFamily: {
				'heading': ['Josefin Sans', 'sans-serif'],
				'subheading': ['Lora', 'serif'],
				'body': ['Quattrocento', 'serif'],
				'sans': ['Josefin Sans', 'sans-serif'],
				'serif': ['Lora', 'serif'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
