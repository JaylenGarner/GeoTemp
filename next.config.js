/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        REACT_APP_GOOGLE_MAPS_API_KEY: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        REACT_APP_OPEN_WEATHER_API_KEY: process.env.REACT_APP_OPEN_WEATHER_API_KEY
      }
}

module.exports = nextConfig
