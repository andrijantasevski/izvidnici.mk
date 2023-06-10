/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /**
         * Primary color
         */
        primary: "#213C33",
        /**
         * Primary color when focused
         */
        "primary-focus": "#1B312A",
        /**
         * Foreground content color to use on primary color
         */
        "primary-content": "#FFF",
        /**
         * Secondary color
         */
        secondary: "#EF767A",
        /**
         * Secondary color when focused
         */
        "secondary-focus": "#E8363C",
        /**
         * Foreground content color to use on secondary color
         */
        "secondary-content": "#FDF1F2",
        /**
         * Base color of page, used for blank backgrounds
         */
        "base-100": "#FFF",
        /**
         * Base color, a little darker
         */
        "base-200": "#EAEAEA",
        /**
         * Base color, even darker
         */
        "base-300": "#999",
        /**
         * Foreground content color to use on base color
         */
        "base-content": "#000",
      },
    },
  },
  plugins: [],
};
