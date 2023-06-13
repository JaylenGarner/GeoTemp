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
        'clear': "url('/weather/clear.jpg')",
        'clouds': "url('/weather/clouds.jpg')",
        'rain': "url('/weather/rain.jpg')",
        'snow': "url('/weather/snow.jpg')",
        'thunderstorm': "url('/weather/thunderstorm.jpg')",
        'tornado': "url('/weather/tornado.jpg')",
        'squall': "url('/weather/squall.jpg')",
        'ash': "url('/weather/ash.jpg')",
        'dust': "url('/weather/dust.jpg')",
        'sand': "url('/weather/sand.jpg')",
        'fog': "url('/weather/fog.jpg')",
        'haze': "url('/weather/haze.jpg')",
        'smoke': "url('/weather/smoke.jpg')",
        'mist': "url('/weather/mist.jpg')",
        'drizzle': "url('/weather/drizzle.jpg')",

        // temporary
        'view': "url('/view.jpg')",
      },
    },
  },
  plugins: [],
}
