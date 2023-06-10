import React from 'react'

const Nav = () => {
  return <>
    <header className='flex justify-between border-b p-4'>
        <h1 className="text-3xl font-bold">GeoTemp</h1>

        <input
        type="text"
        className='rounded-lg bg-slate-700 text-center pl-2 pr-2 focus:outline-none'
        placeholder="What's the weather?"
        />
    </header>
  </>
}

export default Nav
