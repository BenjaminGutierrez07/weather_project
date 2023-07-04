import React from 'react'
import '@/app/week/Tomorrow.css'

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


async function Tomorrow() {
    const ciudad = "cochabamba";
    const { list, location, date } = await getData(ciudad);
    const currentDate = new Date().getUTCDate();
    const tomorrow = new Date();
    tomorrow.setHours(tomorrow.getHours() + tomorrow.getTimezoneOffset() / 60);
    tomorrow.setDate(currentDate + 1);
    const tomorrowDate = tomorrow.getDate();
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

    const formattedDate = `Tomorrow`;


  return (
    <div className='tomorrow'>
      <div>
        {list.map((forecast, index) => {
          const forecastDate = new Date(forecast.dt_txt).getDate();
          console.log(forecastDate);

          if (!hasShownForecast && tomorrowDate === forecastDate) {
            hasShownForecast = true;

            
            const temperatureMin = forecast.main.temp_min;
            const temperatureMax = forecast.main.temp_max;
            const temperatureCelsiusMin = (temperatureMin - 273.15).toFixed(1);
            const temperatureCelsiusMax = (temperatureMax - 273.15).toFixed(1);

            return (
              <div className='centerTomorrow' key={index}>
                <p>{formattedDate}</p>
                <img className='iconTomo'
                  src={`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                  alt={forecast.weather[0].description}
                />
                <div className='cant'>
                <div className='min'>
                <p>{temperatureCelsiusMin}</p>
                <p>°C</p>    
                </div>
                <div className='max'>
                <p>{temperatureCelsiusMax}</p>
                <p>°C</p>    
                </div>
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

export default Tomorrow