const getDay = (timestamp) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date(timestamp * 1000);
  const day = date.getDay();
  return days[day];
};

export default getDay;
