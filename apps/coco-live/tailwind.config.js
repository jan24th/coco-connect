// tailwind config is required for editor support

const sharedConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  presets: [sharedConfig],
  content: [`src/**/*.{js,ts,jsx,tsx}`],
  theme: {
    container: {
      center: true,
      screens: {
        xl: "1200px",
      },
      padding: {
        sm: "2.5rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)"],
      },
      height: {
        15: "3.75rem",
      },
    },
  },
};
