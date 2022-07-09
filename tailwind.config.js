const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.html', './src/**/*.vue'],
  // purge: {
  //   enabled: true,
  //   content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.svg', './src/**/*.ts']
  // },
  theme: {
    extend: {}
  },
  colors: {
    primaryColor: colors.indigo['400']
  },
  plugins: []
}
