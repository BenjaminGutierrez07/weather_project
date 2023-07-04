import React from 'react'
import '@/app/week/Three.css'

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


async function Three() {
    const ciudad = "cochabamba";
    const { list, location, date } = await getData(ciudad);
    const currentDate = new Date().getDate();
    const twoDay = new Date();
    twoDay.setDate(currentDate + 4);
    const twoDate = twoDay.getDate();
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

    const formattedDate = ` ${
      daysOfWeek[twoDay.getDay()]
    } , ${twoDate} ${monthsOfYear[twoDay.getMonth()]}`;


  return (
    <div className='three'>
      <div>
        {list.map((forecast, index) => {
          const forecastDate = new Date(forecast.dt_txt).getDate();
          console.log(forecastDate);

          if (!hasShownForecast && twoDate === forecastDate) {
            hasShownForecast = true;

            
            const temperatureMin = forecast.main.temp_min;
            const temperatureMax = forecast.main.temp_max;
            const temperatureCelsiusMin = (temperatureMin - 273.15).toFixed(1);
            const temperatureCelsiusMax = (temperatureMax - 273.15).toFixed(1);

            return (
              <div className='centerThree' key={index}>
                <p>{formattedDate}</p>
                <img className='iconTwo'
                  src={`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                  alt={forecast.weather[0].description}
                />
                <div className='cantThree'>
                <div className='minThree'>
                <p>{temperatureCelsiusMin}</p>
                <p>°C</p>    
                </div>
                <div className='maxThree'>
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

export default Three