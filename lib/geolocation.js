const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY

const geolocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve([position.coords.latitude.toFixed(4), position.coords.longitude.toFixed(4)]);
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        reject(new Error("Geolocation is not supported by this browser."));
      }
    });
  };

  export default geolocation;
