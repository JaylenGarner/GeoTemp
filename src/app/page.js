"use client"

import { useRecoilValue } from "recoil";
import { addressState } from "../../atoms/addressAtom";
import { weatherState } from "../../atoms/weatherAtom";
import { useEffect, useState } from "react";
import Cards from "@/components/Cards";

const Home = () => {
  const address = useRecoilValue(addressState)
  const weather = useRecoilValue(weatherState)
  const [background, setBackground] = useState(null)

  useEffect(() => {
  }, [address, weather])

  return (
    <div
    className={`flex flex-grow flex-col bg-cover bg-center p-6 text-center justify-between`}
    style={{backgroundImage: `url(/weather/${weather?.current.weather[0].main.toLowerCase()}.jpg)`}}
     >

      {/* For spacing elements with flex */}
      {address && weather && <span> </span>}

       <div>
      {address ? <h1 className="text-center text-6xl font-extrabold leading-[4.5rem]">{address}</h1> : (
        <h1 className="mt-8 text-6xl font-bold leading-[3.5rem]">What's the weather?</h1>
      )}

      {address && weather && (
        <>
        <h2 className="mt-6 text-5xl font-semibold leading-[3.5rem]">{weather.current.weather[0].description.charAt(0).toUpperCase() + weather.current.weather[0].description.slice(1)}</h2>
        <h2 className="mt-5 text-5xl font-semibold leading-[3.5rem]">{weather.current.temp.toFixed(0)} °F</h2>
        <h2 className="mt-5 text-5xl font-semibold leading-[3.5rem]">Humidity: {weather.current.humidity}%</h2>
        <h2 className="mt-5 text-5xl font-semibold leading-[3.5rem]">Wind: {weather.current.wind_speed} mph</h2>
        </>
      )}
      </div>

      {address && weather && <Cards />}
    </div>
  );
};

export default Home;
