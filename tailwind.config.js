/** @type {import('tailwindcss').Config} */
export default {
  content: [
    /** @type {import('tailwindcss').Config} */
    (
      module.exports = {
        darkMode: "class",
        content: ["./src/**/*.{html,jsx}", "./components/**/*.{html,jsx}"],
        theme: {
          extend: {
            transitionProperty: {
              'height': 'height',
              'spacing': 'margin, padding',
            }
          },
        },
        plugins: [],
      }
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

