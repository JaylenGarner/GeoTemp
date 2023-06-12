const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY

const getWeather = async (lat, lon) => {

    try {
        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
        const data = await response.json()
        return data

    } catch (error) {
        console.log('Unable to fetch weather:', error)
    }
}

export default getWeather
