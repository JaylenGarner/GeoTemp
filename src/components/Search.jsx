"use client"

import { useState } from "react";
import { useRecoilState } from 'recoil';
import { addressState } from "../../atoms/addressAtom";
import { weatherState } from "../../atoms/weatherAtom";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import getWeather from "../../lib/weather";

const libraries = ['places'];

const Search = () => {
    const [location, setLocation] = useState('');
    const [address, setAddress] = useRecoilState(addressState)
    const [weather, setWeather] = useRecoilState(weatherState)

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    const handlePlaceChanged = async () => {
        const selectedPlace = window.autocomplete.getPlace();
        const selectedValue = selectedPlace.formatted_address;

        setLocation(selectedValue);
        setAddress(selectedPlace.formatted_address)

        let lat = selectedPlace.geometry.location.lat().toFixed(4)
        let lon = selectedPlace.geometry.location.lng().toFixed(4)

        const weatherData = await getWeather(lat, lon)
        setWeather(weatherData)
        setLocation('');
      };

    return <>
    {isLoaded && (
        <Autocomplete onLoad={(autocomplete) => { window.autocomplete = autocomplete }} onPlaceChanged={handlePlaceChanged}>
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
    </>
}

export default Search
