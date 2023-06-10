"use client"

import { useRecoilValue } from "recoil";
import { addressState } from "../../atoms/addressAtom";
import { useEffect, useState } from "react";

const Home = () => {
  const address = useRecoilValue(addressState)
  let [background, setBackground] = useState('bg-view')

  useEffect(() => {
    if (address) setBackground('bg-sunny')
  }, [address])


  return (
    <div className={`flex flex-grow flex-col align-center ${background} bg-center bg-cover p-6`}>
      {address ? <h1 className="text-center mt-14 text-5xl font-bold leading-[3.5rem]">{address}</h1> :
      <h1 className="text-center mt-14 text-5xl font-bold">Choose a location to check the weather</h1>}
    </div>
  );
};

export default Home;
