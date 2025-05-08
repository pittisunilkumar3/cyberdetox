
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
			// Animation delay utilities
			animationDelay: {
				'100': '100ms',
				'200': '200ms',
				'300': '300ms',
				'400': '400ms',
				'500': '500ms',
				'600': '600ms',
				'700': '700ms',
				'800': '800ms',
				'900': '900ms',
				'1000': '1000ms',
				'1500': '1500ms',
				'2000': '2000ms',
			},
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
				// Cyberdetox brand colors - updated to match logo
				cyberpink: {
					light: '#FF69B4',
					DEFAULT: '#FF1493',
					dark: '#C71585',
				},
				cyberpurple: {
					light: '#DA70D6',
					DEFAULT: '#9932CC',
					dark: '#800080',
				},
				cyberorange: {
					light: '#FFBB84',
					DEFAULT: '#FFA54F',
					dark: '#FF8C00',
				},
				cybergradient: {
					start: '#FFA54F', // Orange/peach
					middle: '#FF1493', // Pink
					end: '#800080', // Purple
				},
				cyberdark: {
					DEFAULT: '#2C3E50',
					light: '#34495E',
				},
				cybergray: '#ECF0F1',
				// AI Platform specific colors
				aiblue: {
					light: '#4299E1',
					DEFAULT: '#3182CE',
					dark: '#2B6CB0'
				},
				aipurple: {
					light: '#9F7AEA',
					DEFAULT: '#805AD5',
					dark: '#6B46C1'
				},
				aigreen: {
					light: '#68D391',
					DEFAULT: '#48BB78',
					dark: '#38A169'
				},
				aiorange: {
					light: '#FBD38D',
					DEFAULT: '#ED8936',
					dark: '#DD6B20'
				},
				aicyan: {
					light: '#76E4F7',
					DEFAULT: '#0BC5EA',
					dark: '#0987A0'
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
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
				'gradient-flow': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '0.6' },
					'50%': { opacity: '0.3' },
				},
				'scale-slow': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' },
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'bounce-horizontal': {
					'0%, 100%': { transform: 'translateX(0)' },
					'50%': { transform: 'translateX(10px)' },
				},
				'fade': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'slide-down': {
					'0%': { transform: 'translateY(-20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'slide-left': {
					'0%': { transform: 'translateX(20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'slide-right': {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'rotate': {
					'0%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(3deg)' },
					'75%': { transform: 'rotate(-3deg)' },
					'100%': { transform: 'rotate(0deg)' },
				},
				'bounce-vertical': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-15px)' },
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gradient-flow': 'gradient-flow 3s ease infinite',
				'float': 'float 4s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'scale-slow': 'scale-slow 6s ease-in-out infinite',
				'spin-slow': 'spin-slow 12s linear infinite',
				'bounce-horizontal': 'bounce-horizontal 2s ease-in-out infinite',
				'fade': 'fade 0.5s ease-out',
				'slide-up': 'slide-up 0.5s ease-out',
				'slide-down': 'slide-down 0.5s ease-out',
				'slide-left': 'slide-left 0.5s ease-out',
				'slide-right': 'slide-right 0.5s ease-out',
				'rotate': 'rotate 6s ease-in-out infinite',
				'bounce-vertical': 'bounce-vertical 2s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities, theme }) {
			const animationDelayUtilities = Object.entries(theme('animationDelay')).map(([key, value]) => {
				return {
					[`.animation-delay-${key}`]: {
						'animation-delay': value
					}
				};
			});
			addUtilities(animationDelayUtilities);
		}
	],
} satisfies Config;
