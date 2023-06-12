"use client"

import { useRecoilValue } from "recoil";
import { addressState } from "../../atoms/addressAtom";
import { useEffect, useState } from "react";
import Cards from "@/components/Cards";

const Home = () => {
  const address = useRecoilValue(addressState)
  let [background, setBackground] = useState('bg-view')

  useEffect(() => {
    if (address) setBackground('bg-sunny')
  }, [address])

  return (
    <div className={`flex flex-grow flex-col align-center ${background} bg-center bg-cover p-6 text-center`}>
      {address ? <h1 className="text-center mt-14 text-5xl font-extrabold leading-[3.5rem]">{address}</h1> :
      <h1 className="mt-14 text-5xl font-bold leading-[3.5rem]">Choose a location to check the weather</h1>}

      {address && (
        <>
        <h2 className="mt-20 text-5xl font-semibold ">Sunny</h2>
        <h2 className="mt-6 text-5xl font-semibold">72°F</h2>
        <h2 className="mt-6 text-5xl font-semibold leading-[4rem]">Precipitation: 3%</h2>
        <h2 className="mt-6 text-5xl font-semibold leading-[3.5rem]">Humidity: 84%</h2>
        <h2 className="mt-6 text-5xl font-semibold leading-[3.5rem]">Wind: 2 mph</h2>
        <h2 className="mt-6 mb-10 text-5xl font-semibold leading-[4rem]">Air Quality: 51</h2>
        <Cards />
      </>
      )}
    </div>
  );
};

export default Home;
