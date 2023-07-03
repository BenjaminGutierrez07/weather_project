import React from 'react'

async function getData(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=67fe6a6f66b21320a216fea2c1e49ad5`
  );
  const data = await response.json();
  console.log(data);

  return {
    list: data.list,
    location: data.city.name,
    date: data.list[0].dt_txt,
  };
}


async function Today() {
    const ciudad = "cochabamba";
    const { list, location, date } = await getData(ciudad);
    const currentDate = new Date().getDate();
    const today = new Date(date);
    let hasShownForecast = false;

    const daysOfWeek = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];
    const monthsOfYear = [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sep",
      "oct",
      "nov",
      "dic",
    ];

    const formattedDate = `Today - ${
      daysOfWeek[today.getDay()]
    } ${today.getDate()} ${monthsOfYear[today.getMonth()]}`;


  return (
    <div className="time">
      <div className="botones">
        <button className="search">Search places</button>
        <button className="location">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-record-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          </svg>
        </button>
      </div>
      <div className="today">
        {list.map((forecast, index) => {
          const forecastDate = new Date(forecast.dt_txt).getDate();

          if (!hasShownForecast && currentDate === forecastDate) {
            hasShownForecast = true;

            const temperatureKelvin = forecast.main.temp;
            const temperatureCelsius = (temperatureKelvin - 273.15).toFixed(1);
            const weatherDescription = forecast.weather[0].description;

            return (
              <div key={index}>
                <img
                  className="icon"
                  src={`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                  alt={forecast.weather[0].description}
                />
                <p>{temperatureCelsius} °C</p>
                <p>{weatherDescription}</p>
                <p>{formattedDate}</p>
                <p>{location}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Today