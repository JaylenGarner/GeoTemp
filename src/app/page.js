"use client";

import { useRecoilValue } from "recoil";
import { addressState } from "../../atoms/addressAtom";
import { weatherState } from "../../atoms/weatherAtom";
import { useEffect, useState } from "react";
import Cards from "@/components/Cards";

import BarLoader from "react-spinners/BarLoader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const address = useRecoilValue(addressState);
  const weather = useRecoilValue(weatherState);
  const [background, setBackground] = useState("url(/splash.js");

  useEffect(() => {
    if (weather && address) {
      setBackground(
        `url(/weather/${weather?.current.weather[0].main.toLowerCase()}.jpg)`
      );
      setLoading(false);
    } else {
      setBackground("url(/splash.jpg");
      setLoading(false);
    }
  }, [address, weather]);

  if (loading) {
    return (
      <div className="flex justify-center items-center flex-grow">
        <BarLoader color={"#ffffff"} loading={loading} size={50} />
      </div>
    );
  }

  return (
    <div
      className={`flex flex-grow flex-col bg-cover bg-center p-6 text-center justify-between`}
      style={{ backgroundImage: background }}
    >
      {/* For spacing elements with flex */}
      <span> </span>

      <div>
        {!address && (
          <>
            {/* Mobile Heading */}
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-bold leading-[4.5rem] md:hidden mb-10">
                GeoTemp
              </h1>
              <img src="/logo.png" className="h-28 w-28"></img>
            </div>

            {/* Desktop and Tablet Heading */}
            <h1 className="text-6xl font-bold leading-[4.5rem] max-md:hidden">
              Explore the World's Weather with Ease
            </h1>

            <h2 className="text-5xl font-bold leading-[3.5rem] mt-10 text-white mb-20">
              Search for a location to get started
            </h2>
          </>
        )}

        {address && weather && (
          <h2 className="text-center text-6xl font-extrabold leading-[4.5rem]">
            {address}
          </h2>
        )}

        {address && weather && (
          <>
            <h2 className="mt-6 text-5xl font-semibold leading-[3.5rem]">
              {weather.current.weather[0].description.charAt(0).toUpperCase() +
                weather.current.weather[0].description.slice(1)}
            </h2>
            <h2 className="mt-5 text-5xl font-semibold leading-[3.5rem]">
              {weather.current.temp.toFixed(0)} °F
            </h2>
            <h2 className="mt-5 text-5xl font-semibold leading-[3.5rem]">
              Humidity: {weather.current.humidity}%
            </h2>
            <h2 className="mt-5 text-5xl font-semibold leading-[3.5rem]">
              Wind: {weather.current.wind_speed} mph
            </h2>
          </>
        )}
      </div>

      {/* For spacing tagline with flex */}
      {!address && !weather && <span> </span>}

      {address && weather && <Cards />}
    </div>
  );
};

export default Home;
