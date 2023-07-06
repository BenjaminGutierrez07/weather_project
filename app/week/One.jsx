import React from 'react'
import '@/app/week/One.css'

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


async function One() {
    const ciudad = "cochabamba";
    const { list} = await getData(ciudad);
    const currentDate = new Date().getUTCDate();
    const oneDay = new Date();
    oneDay.setUTCHours(oneDay.getUTCHours() + oneDay.getTimezoneOffset() / 60);
    oneDay.setUTCDate(currentDate + 1);
    const oneDate = oneDay.getUTCDate();
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

    const formattedDate = `${
      daysOfWeek[oneDay.getDay()]
    } , ${oneDate} ${monthsOfYear[oneDay.getMonth()]}`;


  return (
    <div className='one'>
      <div>
        {list.map((forecast, index) => {
          const forecastDate = new Date(forecast.dt_txt).getUTCDate();
          console.log(forecastDate);

          if (!hasShownForecast && oneDate === forecastDate) {
            hasShownForecast = true;

            
            const temperatureMin = forecast.main.temp_min;
            const temperatureMax = forecast.main.temp_max;
            const temperatureCelsiusMin = (temperatureMin - 273.15).toFixed(1);
            const temperatureCelsiusMax = (temperatureMax - 273.15).toFixed(1);

            return (
              <div className='centerOne' key={index}>
                <p>{formattedDate}</p>
                <img className='iconOne'
                  src={`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                  alt={forecast.weather[0].description}
                />
                <div className='cantOne'>
                <div className='minOne'>
                <p>{temperatureCelsiusMin}</p>
                <p>°C</p>    
                </div>
                <div className='maxOne'>
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

export default One