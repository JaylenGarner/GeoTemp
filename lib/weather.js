const apiKey = process.env.OPEN_WEATHER_KEY

const getGeocode = async (zipCode, country) => {
    try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${country}&appid=${apiKey}`)
        const data = await response.json()
        return data

    } catch (error) {
        console.log('Unable to fetch geocode:', error)
        return
    }
}

const fetchWeather = async (zipCode, country) => {

    try {

        const geocode = await getGeocode(zipCode, country)

        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${geocode.lat}&lon=${geocode.lon}&appid=${apiKey}`)
        const data = await response.json()
        console.log(data)
        // return data

    } catch (error) {
        console.log('Unable to fetch weather:', error)
        return
    }
}

// fetchWeather()
fetchWeather('06374', 'US')

export default getGeocode
