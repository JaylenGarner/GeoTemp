"use client"
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api"


const Nav = () => {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places']
  })

  return <>
    <header className='flex justify-between border-b p-4 align-middle'>
      <h1 className="text-3xl font-bold">GeoTemp</h1>

      {isLoaded && (
        <Autocomplete>
          <input
            type="text"
            className='rounded-lg bg-slate-700 text-center pl-2 pr-2 focus:outline-none h-10'
            placeholder="What's the weather?"
          />
        </Autocomplete>
      )}
    </header>
  </>
}

export default Nav
