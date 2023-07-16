const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    // app content
    'src/**/*.{js,ts,jsx,tsx}',
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[500],
      },
      transitionTimingFunction: {
        toggle: 'cubic-bezier(.22,.68,0,1.71)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
