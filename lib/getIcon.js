const weatherIcons = {
    sunny: '/icons/sun_icon.png',
    cloudy: '/icons/cloudy_icon.png',
    rain: '/icons/rain_icon.png',
    windy: '/icons/windy_icon.png',
    snow: '/icons/snow_icon.png'
}

const getIcon = (weather) => {
    weather = weather.toLowerCase();
    if (weatherIcons[weather]) return weatherIcons[weather]
    return null
}

export default getIcon
