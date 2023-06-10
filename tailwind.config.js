/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sunny': "url('/sunny.jpg')",
        'rain': "url('/rain.jpg')",
        'snow': "url('/snow.jpg')",
        'cloudy': "url('/cloudy.jpg')",
        'windy': "url('/windy.jpg')",
        'view': "url('/view.jpg')",

      },
    },
  },
  plugins: [],
}
