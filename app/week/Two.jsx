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


async function Two() {
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
    <div>
      <div>
        {list.map((forecast, index) => {
          const forecastDate = new Date(forecast.dt_txt).getDate();
          console.log(forecastDate);

          if (!hasShownForecast && currentDate === forecastDate) {
            hasShownForecast = true;

            
            const temperatureKelvin = forecast.main.temp;
            const temperatureCelsius = (temperatureKelvin - 273.15).toFixed(1);

            return (
              <div key={index}>
                <p>{formattedDate}</p>
                <img
                  src={`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                  alt={forecast.weather[0].description}
                />
                <div>
                <p>{temperatureCelsius}</p>
                <p>°C</p>    
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

export default Two