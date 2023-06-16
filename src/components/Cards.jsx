import { useRecoilValue } from "recoil";
import { weatherState } from "../../atoms/weatherAtom";
import getDay from "../../lib/getDay";

const Cards = () => {
  const weather = useRecoilValue(weatherState)

  return <>
  {/* Desktop Navigation */}
    <div className="grid grid-rows-1 auto-cols-fr grid-flow-col gap-4 w-full bottom-0 text-center pt-6 max-lg:grid-rows-5 place-items-center max-lg:mt-6">
        {weather.daily.slice(1, 6).map((day) => {
            return (
              <div key={day.dt} className="border h-fit w-full flex flex-col bg-gray-800 rounded-xl text-2xl max-lg:w-9/12">
               <h3 className=" pr-2 pl-2 pt-3 font-bold ">{getDay(day.dt)}</h3>
              <div className="flex justify-center">
                <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}></img>
              </div>
               <p className=" font-semibold pb-2">{day.weather[0].main}</p>
              <p className=" font-bold pb-3">{day.temp.max.toFixed(0)} °F</p>
            </div>
        )})}
    </div>

    {/* Mobile Navigation */}
  </>
}

export default Cards
