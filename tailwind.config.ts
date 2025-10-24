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
        primary: {
          DEFAULT: '#3490dc',
          dark: '#2779bd',
          light: '#6cb2eb',
        },
        secondary: {
          DEFAULT: '#f9f9f9',
          dark: '#e3e3e3',
        },
        accent: {
          DEFAULT: '#f6993f',
          dark: '#de751f',
        },
        success: '#38c172',
        warning: '#ffed4e',
        danger: '#e3342f',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
