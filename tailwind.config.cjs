/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colourGen = require('./plugins/colour.gen.cjs');

module.exports = {
  content: ['./index.html', './app.html', './src/**/*.{js,ts,jsx,tsx,svelte}'],
  theme: {
    extend: {
      $: colourGen.buildColourTable({
        primary: "rgb(0, 50, 100)",
        secondary: "rgb(200, 10, 100)",
        link: "rgb(10, 100, 255)",
        text: "rgb(255, 255, 255)",
        warn: "rgb(255, 100, 0)",
        danger: "rgb(255, 0, 0)"
      }),
      fontFamily: {
        mono: ['Hack', 'Fira\\ Code', ...defaultTheme.fontFamily.mono],
      },
    },
  },
};
