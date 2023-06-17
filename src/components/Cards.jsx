import { useRecoilValue } from "recoil";
import { weatherState } from "../../atoms/weatherAtom";
import getDay from "../../lib/getDay";

const Cards = () => {
  const weather = useRecoilValue(weatherState);

  return (
    <>
      <div className="cards_grid">
        {weather.daily.slice(1, 6).map((day) => {
          return (
            <div key={day.dt} className="weather_card">
              <h3 className="pr-2 pl-2 pt-3 font-bold">{getDay(day.dt)}</h3>
              <div className="flex justify-center">
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                ></img>
              </div>
              <p className="font-semibold pb-2">{day.weather[0].main}</p>
              <p className="font-bold pb-3">{day.temp.max.toFixed(0)} °F</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
