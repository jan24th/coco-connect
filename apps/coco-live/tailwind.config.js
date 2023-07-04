// tailwind config is required for editor support

const sharedConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  presets: [sharedConfig],
  content: [`src/**/*.{js,ts,jsx,tsx}`],
};
