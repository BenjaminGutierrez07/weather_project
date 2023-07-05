
import React from 'react'

async function getData(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=67fe6a6f66b21320a216fea2c1e49ad5`
  );
  const data = await response.json();


  return {
    list: data.list,
    location: data.city.name,
    date: data.list[0].dt_txt,
  };
}


async function Today() {
    const ciudad = "cochabamba";
    const { list, location, date } = await getData(ciudad);
    const currentDate = new Date().getUTCDate();
    const today = new Date(date);
    today.setUTCHours(today.getUTCHours() + today.getTimezoneOffset() / 60);
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

    const formattedDate = `Today . ${
      daysOfWeek[today.getDay()]
    } ${today.getDate()} ${monthsOfYear[today.getMonth()]}`;
    console.log(formattedDate)

    const isDaytime = (forecastDayTime) => {
      const forecastTime = new Date(forecastDayTime).getUTCHours();
      return forecastTime >= 6 && forecastTime < 20;
    };

  

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
          const forecastDate = new Date(forecast.dt_txt).getUTCDate();
          console.log(forecastDate);

          if (!hasShownForecast && currentDate === forecastDate) {
            hasShownForecast = true;

            const weatherIcon = isDaytime(forecast.dt_txt) ? forecast.weather[0].icon : '01n';
            const temperatureKelvin = forecast.main.temp;
            const temperatureCelsius = (temperatureKelvin - 273.15).toFixed(1);
            const weatherDescription = forecast.weather[0].description;

            return (
              <div className="infos" key={index}>
                <img
                  className="icon"
                  src={`https://openweathermap.org/img/w/${weatherIcon}.png`}
                  alt={forecast.weather[0].description}
                />
                <div className="tempBox">
                  <p className="temp">{temperatureCelsius}</p>
                  <p className="cel">°C</p>
                </div>
                <p className="description">{weatherDescription}</p>
                <p className="date">{formattedDate}</p>
                <div className='flecha'>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-geo-alt-fill"
                      viewBox="0 0 16 16"
                      style={{color:'hsl(240, 8%, 54%)'}}
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                  </p>
                  <p className="locations">{location}</p>
                </div>
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
