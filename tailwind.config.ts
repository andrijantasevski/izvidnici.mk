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
        "secondary-content": "#200405",
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
        /**
         * Error color
         */
        error: "#ef4444",
        /**
         * Error color when focused
         */
        "error-focus": "#dc2626",
        /**
         * Foreground content color to use on error color
         */
        "error-content": "#450a0a",
      },
      backgroundImage: {
        "landing-first-section":
          "url('/img/background-images/background-landing-page-first-section.jpg')",
        footer: "url('/img/background-images/background-footer.svg')",
        "razvigorci-hero": "url('/img/background-images/background-razvigorci-hero.png')",
        "group-left": "url('/img/razvigorci/Group-left.png')",
        "group-right": "url('/img/razvigorci/Group-right.png')",
        
      },
      height: {
        '120': '120px'
      }, 

    },
  },
  plugins: [],
};
