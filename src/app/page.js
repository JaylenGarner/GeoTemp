"use client"

import { useRecoilValue } from "recoil";
import { addressState } from "../../atoms/addressAtom";

const Home = () => {
  const address = useRecoilValue(addressState)

  return (
    <div className='flex flex-grow flex-col align-center bg-sunny bg-center bg-cover p-6 '>
      {address ? <h1 className="text-center mt-14 text-5xl font-bold leading-[3.5rem]">{address}</h1> :
      <h1 className="text-center mt-14 text-5xl font-bold">Select a location to check the weather</h1>}
    </div>
  );
};

export default Home;
