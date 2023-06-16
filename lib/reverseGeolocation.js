const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

const reverseGeolocation = async (lat, lon) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Unable to fetch location:", error);
  }
};

export default reverseGeolocation;
