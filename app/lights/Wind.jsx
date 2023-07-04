import React from 'react'
import '@/app/lights/Wind.css'

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


async function Wind() {
    const ciudad = "cochabamba";
    const { list } = await getData(ciudad);
    const currentDate = new Date().getUTCDate();
    const wind = new Date();
    wind.setHours(wind.getHours() + wind.getTimezoneOffset() / 60);
    wind.setDate(currentDate + 5);
    const windDate = wind.getDate();
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
      daysOfWeek[wind.getDay()]
    } , ${wind} ${monthsOfYear[wind.getMonth()]}`;


  return (
    <div className='wind'>
        {list.map((forecast, index) => {
          const forecastDate = new Date(forecast.dt_txt).getDate();

          if (!hasShownForecast && windDate === forecastDate) {
            hasShownForecast = true;

            
            const velocidad_ms = forecast.wind.speed;
            const velocidad_mph = velocidad_ms * 2.237;

            return (
              <div className="centerWind" key={index}>
                <p>{velocidad_mph}</p>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}

export default Wind