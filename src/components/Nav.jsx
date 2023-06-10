"use client";
import { useState } from "react";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import getWeather from "../../lib/weather";

const libraries = ['places'];

const Nav = () => {
  const [location, setLocation] = useState('');
  const [locationName, setLocationName] = useState();


  const [weather, setWeather] = useState({})

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const handlePlaceChanged = async () => {
    const selectedPlace = window.autocomplete.getPlace();
    const selectedValue = selectedPlace.formatted_address;

    setLocation(selectedValue);
    setLocationName(selectedPlace.formatted_address);

    let lat = selectedPlace.geometry.location.lat()
    let lng = selectedPlace.geometry.location.lng()

    const weatherData = await getWeather(lat, lng)
    console.log(weatherData)

    setLocation('');
  };

  return (
    <>
      <header className='flex justify-between border-b p-4 align-middle'>
        <h1 className="text-3xl font-bold">GeoTemp</h1>

        {locationName &&
        <div className="flex flex-col justify-center text-center">
          <span className="pt-2 text-xl font-bold">{locationName}</span>
        </div>
        }

        {isLoaded && (
          <Autocomplete onLoad={(autocomplete) => { window.autocomplete = autocomplete; }} onPlaceChanged={handlePlaceChanged}>
            <input
              type="text"
              className='rounded-lg bg-slate-700 text-center pl-2 pr-2 focus:outline-none h-10'
              placeholder="What's the weather?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </Autocomplete>
        )}
      </header>
    </>
  );
};

export default Nav;
