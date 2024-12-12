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
    },
  },
  plugins: [],
};
export default config;
