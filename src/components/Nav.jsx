"use client";

import { useState } from "react";
import { useRecoilState } from 'recoil';
import { addressState } from "../../atoms/addressAtom";
import { weatherState } from "../../atoms/weatherAtom";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import getWeather from "../../lib/weather";
import Image from "next/image";

const libraries = ['places'];

const Nav = () => {
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

  return (
    <>
      <header className='flex justify-between border-b p-4 align-middle'>

        <div className="flex ">
        <h1 className="text-3xl font-bold pr-2 max-sm:hidden">GeoTemp</h1>
        <Image
          src='/logo.png'
          width={35}
          height={15}
          alt="Site logo"
        />
        </div>

        <div className="flex">
          <a href="https://www.linkedin.com/in/jaylen-garner-00a252205/">
          <img src='/socials/linkedin.png' className="w-10 h-10 mr-3  hover:brightness-50 "></img>
          </a>
          <a href="https://github.com/JaylenGarner/GeoTemp">
          <img src='/socials/github.png' className="w-10 h-10  hover:brightness-50 transition duration-150"></img>
          </a>
        </div>

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
      </header>
    </>
  );
};

export default Nav;
