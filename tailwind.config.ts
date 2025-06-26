
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
					DEFAULT: '#390099',
					foreground: '#FFFFFF',
					100: '#EAD6FF',
					200: '#D4ADFF',
					300: '#BE85FF',
					400: '#A75CFF',
					500: '#390099',
					600: '#2E007A',
					700: '#22005C',
					800: '#17003D',
					900: '#0B001F',
				},
				secondary: {
					DEFAULT: '#9E0059',
					foreground: '#FFFFFF',
					100: '#FFD6E5',
					200: '#FFADCC',
					300: '#FF85B2',
					400: '#FF5C99',
					500: '#9E0059',
					600: '#7E0047',
					700: '#5F0035',
					800: '#3F0024',
					900: '#200012',
				},
				accent: {
					DEFAULT: '#FF0054',
					foreground: '#FFFFFF',
					100: '#FFD6E0',
					200: '#FFADC1',
					300: '#FF85A3',
					400: '#FF5C84',
					500: '#FF0054',
					600: '#CC0043',
					700: '#990032',
					800: '#660022',
					900: '#330011',
				},
				orange: {
					DEFAULT: '#FF5400',
					foreground: '#FFFFFF',
					100: '#FFE0D6',
					200: '#FFC1AD',
					300: '#FFA385',
					400: '#FF845C',
					500: '#FF5400',
					600: '#CC4300',
					700: '#993200',
					800: '#662200',
					900: '#331100',
				},
				yellow: {
					DEFAULT: '#FFBD00',
					foreground: '#121212',
					100: '#FFF2D6',
					200: '#FFE5AD',
					300: '#FFD985',
					400: '#FFCC5C',
					500: '#FFBD00',
					600: '#CC9700',
					700: '#997100',
					800: '#664C00',
					900: '#332600',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				text: '#121212',
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
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-up': 'fade-up 0.5s ease-out',
				'bounce-subtle': 'bounce-subtle 2s infinite',
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
				display: ['Poppins', 'sans-serif'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
