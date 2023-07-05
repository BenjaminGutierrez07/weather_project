import React from 'react'
import '@/app/lights/Air.css'

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


async function Air() {
    const ciudad = "cochabamba";
    const { list } = await getData(ciudad);
    const currentDate = new Date().getUTCDate();
    const air = new Date();
    air.setUTCHours(air.getHours() + air.getTimezoneOffset() / 60);
    air.setUTCDate(currentDate + 5);
    const airDate = air.getUTCDate();
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
      daysOfWeek[air.getDay()]
    } , ${air} ${monthsOfYear[air.getMonth()]}`;


  return (
    <div className='air'>
        {list.map((forecast, index) => {
          const forecastDate = new Date(forecast.dt_txt).getUTCDate();

          if (!hasShownForecast && airDate === forecastDate) {
            hasShownForecast = true;

            
            const airs = forecast.main.pressure;
            

            return (
              <div className="centerAir" key={index}>
                <p className='nameA'>Air Pressure</p>
                <div className='airC'>
                <p className='numA'>{airs}</p>
                <p className='mb'>mb</p>
                </div>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}

export default Air