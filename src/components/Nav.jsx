"use client";

import Image from "next/image";
import Search from "./Search";

const Nav = () => {

  return <>
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
      <Search />
    </header>
  </>
};

export default Nav;
