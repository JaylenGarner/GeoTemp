"use client";

import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { addressState } from "../../atoms/addressAtom";
import { weatherState } from "../../atoms/weatherAtom";
import Image from "next/image";
import Search from "./Search";
import geolocation from "../../lib/geolocation";
import getWeather from '../../lib/weather';
import reverseGeolocation from '../../lib/reverseGeolocation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot as faLocationDotHover } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [address, setAddress] = useRecoilState(addressState);
  const [weather, setWeather] = useRecoilState(weatherState);
  const [isHovered, setIsHovered] = useState(false);

  const handleMyWeather = async () => {
    try {
      const myLocation = await geolocation();
      console.log(myLocation);
      const weather = await getWeather(myLocation[0], myLocation[1]);
      const geolocate = await reverseGeolocation(myLocation[0], myLocation[1]);
      setWeather(weather);
      setAddress(`${geolocate[0].name}, ${geolocate[0].state}, ${geolocate[0].country}`);
      console.log(geolocate);
    } catch (error) {
      console.error("Error retrieving weather information:", error);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <header className='flex justify-between border-b p-4 align-middle'>
        <div className="flex">
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
            <img src='/socials/linkedin.png' className="w-10 h-10 mr-3 hover:brightness-50"></img>
          </a>
          <a href="https://github.com/JaylenGarner/GeoTemp">
            <img src='/socials/github.png' className="w-10 h-10 hover:brightness-50 transition duration-150"></img>
          </a>
        </div>

        <div className="flex">
          <button
            onClick={() => handleMyWeather()}
            className="pr-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
           {isHovered ? (
             <FontAwesomeIcon icon={faLocationDotHover} size="xl" fade/>
           ) : (
             <FontAwesomeIcon icon={faLocationDot} size="xl" />
           )}
         </button>
         <Search />
        </div>
      </header>
    </>
  );
};

export default Nav;
