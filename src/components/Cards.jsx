import getIcon from "../../lib/getIcon"
import Image from "next/image"

let test = [
    {day: 'Monday',
    weather: 'Sunny',
    temp: 85
    },
    {day: 'Tuesday',
    weather: 'Rain',
    temp: 67},
    {day: 'Wednesday',
    weather: 'Cloudy',
    temp: 72},
    {day: 'Thursday',
    weather: 'Snow',
    temp: 43},
    {day: 'Friday',
    weather: 'Sunny',
    temp: 82}
]

const Cards = () => {

  return <>
  {/* Desktop Navigation */}
    <div className="grid grid-rows-1 auto-cols-fr grid-flow-col gap-4 w-full bottom-0 text-center mt-14 p-4 ">
        {test.map((day) => {

            return (
              <div key={day.day} className="border h-fit w-full flex flex-col pb-6 bg-gray-800 rounded-xl text-2xl">
               <h3 className=" pr-2 pl-2 pb-5 pt-4 font-bold ">{day.day}</h3>
              <div className="flex justify-center pb-3">
                <Image
                  alt="Todays weather"
                  src={getIcon(day.weather)}
                  height={60}
                  width={60}
                />
              </div>
              <p className=" font-semibold p-2">{day.weather}</p>
              <p className=" font-bold">{day.temp}°F</p>
            </div>
        )})}
    </div>

    {/* Mobile Navigation */}
  </>
}

export default Cards
