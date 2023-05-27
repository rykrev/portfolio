/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'nunito': ['Nunito Sans'],
      'mont': ['Montserrat', 'var(--font-mont)', 'var(--font-sans)'],
    },
    extend: {
      gridTemplateRows: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      gridRow: {
        'span-11': 'span 11 / span 11',
      },
      backgroundImage: {
        'hero': "url('../public/shahadat-rahman-BfrQnKBulYQ-unsplash.jpg')",
      }


    },

  },
  plugins: [],
}
