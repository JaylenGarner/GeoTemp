"use client";
import { useState } from "react";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";

// Declare the libraries array as a constant variable outside the component
const libraries = ['places'];

const Nav = () => {
  const [location, setLocation] = useState('');
  const [locationName, setLocationName] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries, // Use the constant variable here
  });


  const handlePlaceChanged = () => {
    const selectedPlace = window.autocomplete.getPlace(); // Access the autocomplete instance using the window object
    const selectedValue = selectedPlace.formatted_address;

    setLocation(selectedValue);
    setLocationName(selectedPlace.formatted_address);
    setLatitude(selectedPlace.geometry.location.lat());
    setLongitude(selectedPlace.geometry.location.lng());
    setLocation('');
  };

  console.log(locationName)

  return (
    <>
      <header className='flex justify-between border-b p-4 align-middle'>
        <h1 className="text-3xl font-bold">GeoTemp</h1>

        {locationName &&
        <div className="flex flex-col justify-center text-center">
          <span className="pt-2 text-xl font-bold">{locationName}</span>
        </div>
        }

        {isLoaded && (
          <Autocomplete onLoad={(autocomplete) => { window.autocomplete = autocomplete; }} onPlaceChanged={handlePlaceChanged}>
            <input
              type="text"
              className='rounded-lg bg-slate-700 text-center pl-2 pr-2 focus:outline-none h-10'
              placeholder="What's the weather?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </Autocomplete>
        )}
      </header>
    </>
  );
};

export default Nav;
