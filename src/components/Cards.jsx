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

    <div className="grid grid-rows-1 auto-cols-fr grid-flow-col gap-4 w-full absolute bottom-0 p-4 h-2/6 text-center">
        {test.map((day) => {
            return (
            <div className="border h-fit w-full flex flex-col pb-20 bg-gray-900">
               <h3 className="text-2xl p-2 font-bold">{day.day}</h3>
                <p className="text-xl font-semibold p-2">{day.weather}</p>
                <p className="text-xl font-bold">{day.temp} °F</p>
            </div>
        )
        })}
    </div>

    {/* Mobile Navigation */}
  </>
}

export default Cards
