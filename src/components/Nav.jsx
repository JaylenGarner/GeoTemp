"use client";

import { useState } from "react";
import { useRecoilState } from "recoil";
import { addressState } from "../../atoms/addressAtom";
import { weatherState } from "../../atoms/weatherAtom";
import Image from "next/image";
import Search from "./Search";
import geolocation from "../../lib/geolocation";
import getWeather from "../../lib/weather";
import reverseGeolocation from "../../lib/reverseGeolocation";

import ClipLoader from "react-spinners/ClipLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [address, setAddress] = useRecoilState(addressState);
  const [weather, setWeather] = useRecoilState(weatherState);

  const handleReset = () => {
    setAddress(null);
    setWeather(null);
  };

  const handleMyWeather = async () => {
    try {
      setIsLoading(true);
      const myLocation = await geolocation();
      const weather = await getWeather(myLocation[0], myLocation[1]);
      const geolocate = await reverseGeolocation(myLocation[0], myLocation[1]);
      setWeather(weather);
      setAddress(
        `${geolocate[0].name}, ${geolocate[0].state}, ${geolocate[0].country}`
      );
      setIsLoading(false);
      setError(false);
    } catch (error) {
      setIsLoading(false);
      setError(true);
      alert(
        "Location permissions must be enabled to use the geolocation feature"
      );
      console.error("Error retrieving weather information:", error);
    }
  };

  return (
    <>
      <header className="nav">
        <div className="logo_container" onClick={() => handleReset()}>
          <h1 className="logo_text">GeoTemp</h1>
          <Image src="/logo.png" width={35} height={15} alt="Site logo" />
        </div>

        <div className="flex">
          <a href="https://www.linkedin.com/in/jaylen-garner-00a252205/">
            <img
              src="/socials/linkedin.png"
              className="social_icon mr-3 max-xs:hidden"
            ></img>
          </a>
          <a href="https://github.com/JaylenGarner/GeoTemp">
            <img
              src="/socials/github.png"
              className="social_icon max-xxs:hidden"
            ></img>
          </a>
        </div>

        <div className="flex">
          <button onClick={() => handleMyWeather()} className="pr-4">
            {isLoading ? (
              <ClipLoader
                color={"#ffffff"}
                loading={isLoading}
                size={20}
                className="mt-1"
              />
            ) : (
              <FontAwesomeIcon
                icon={faLocationDot}
                color={error ? "#FF0000" : "#FFFFFF"}
                size="xl"
                className="geolocation"
              />
            )}
          </button>
          <Search />
        </div>
      </header>
    </>
  );
};

export default Nav;
