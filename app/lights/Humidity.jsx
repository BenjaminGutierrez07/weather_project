import React from 'react'
import '@/app/lights/Humidity.css'

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


async function Humidity() {
    const ciudad = "cochabamba";
    const { list } = await getData(ciudad);
    const currentDate = new Date().getUTCDate();
    const humidity = new Date();
    humidity.setUTCHours(humidity.getHours() + humidity.getTimezoneOffset() / 60);
    humidity.setUTCDate(currentDate);
    const humidityDate = humidity.getUTCDate();
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
      daysOfWeek[humidity.getDay()]
    } , ${humidity} ${monthsOfYear[humidity.getMonth()]}`;

    const percent = 50;
  return (
    <div className='humidity'>
        {list.map((forecast, index) => {
          const forecastDate = new Date(forecast.dt_txt).getUTCDate();

          if (!hasShownForecast && humidityDate === forecastDate) {
            hasShownForecast = true;

            
            const humidid = forecast.main.humidity;
            

            return (
              <div className="centerHumidity" key={index}>
                <p className='hHum'>Humidity</p>
                <div className="hu">
                  <p className="huTwo">{humidid}</p>
                  <p className="por">%</p>
                </div>
                <div className='percent'>
                    <p>0</p>
                    <p>50</p>
                    <p>100</p>
                  </div>
                <div className="progress-bar">
                  <div className="progress" style={{width: humidid}}></div>
                </div>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}

export default Humidity