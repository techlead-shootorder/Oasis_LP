import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#874487',
          50: '#672658',
        },
        'secondary': '#7E3E7E',
        'accent': '#FF8100',
        'neutral': '#525252',
        'bglight': '#e1d6ec',
        'bgtransparent': '#672658f2'
      },
      fontFamily: {
        questrial: ['var(--font-questrial)'],
        lato: ['var(--font-lato)'],
        lato_light: ['var(--font-lato_light)'],
        cormorant_garamond: ['var(--font-cormorant_garamond)'],
        pattaya: ['var(--font-pattaya)'],
        helvetica: ['Helvetica', 'Arial', 'sans-serif'] // for femia design
      },
      screens: {
        'xs': { 'max': '370px' },
        '3xl': '1920px',
      },
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(0deg, rgb(0 0 0 / 91%) 8%, rgb(80 76 76 / 35%) 36%, rgb(56 57 59 / 34%) 100%)',
      'custom-gradient2': 'linear-gradient(101deg, rgba(0,0,0,0.865983893557423) 5%, rgba(242,242,242,0.006039915966386533) 30%, rgba(231,234,240,0) 100%)',
      'infertility-bg-img': "url('https://images.oasisindia.in/website/Treatment/background-img.png')",
      'announcement-bar-gradient': 'linear-gradient(90deg, #fbc2eb 18%, #f6c2eb 0, #a6c1ee 78%)',
    },
    animation: {
      marquee: 'marquee 10s linear infinite',
      slide: 'slide 12s infinite ease-in-out',
      'spin-slow': 'spin 5s linear infinite',
      'spin-reverse': 'spin-reverse 5s linear infinite',
      ripple: 'ripple 2s infinite',
      pulseHighlight: 'pulseHighlight 1.5s infinite',
    },
    // borderRadius: {
    //   'custom': '1.25rem 1.25rem 0 0',
    // },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      pulseHighlight: {
        '0%, 100%': { backgroundColor: '#D7052B' },
        '50%': { backgroundColor: '#ff4b4b' }, // lighter red
      },
      slide: {
        '0%, 20%': { transform: 'translateY(0%)' },
        '25%, 45%': { transform: 'translateY(-100%)' },
        '50%, 70%': { transform: 'translateY(-200%)' },
        '75%, 100%': { transform: 'translateY(-0%)' },
      },
      'spin-reverse': {
        from: { transform: 'rotate(360deg)' },
        to: { transform: 'rotate(0deg)' },
      },
      ripple: {
        '0%': { transform: 'scale(0.9)', opacity: '1' },
        '100%': { transform: 'scale(1.5)', opacity: '0' },
      },
    }
    
  },
  plugins: [],
};
export default config;
