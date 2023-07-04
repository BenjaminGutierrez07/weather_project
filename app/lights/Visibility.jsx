import React from 'react'
import '@/app/lights/Visibility.css'

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


async function Visibility() {
    const ciudad = "cochabamba";
    const { list } = await getData(ciudad);
    const currentDate = new Date().getUTCDate();
    const visibility = new Date();
    visibility.setHours(visibility.getHours() + visibility.getTimezoneOffset() / 60);
    visibility.setDate(currentDate + 5);
    const visibilityDate = visibility.getDate();
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
      daysOfWeek[visibility.getDay()]
    } , ${visibilityDate} ${monthsOfYear[visibility.getMonth()]}`;


  return (
    <div className='visibility'>
        {list.map((forecast, index) => {
          const forecastDate = new Date(forecast.dt_txt).getDate();

          if (!hasShownForecast && visibilityDate === forecastDate) {
            hasShownForecast = true;

            
            const visibili = forecast.visibility;
            const miles = (visibili / 1000).toLocaleString();
            

            return (
              <div className="centerVisibility" key={index}>
                <p className='nameV'>Visibility</p>
                <div className='center'>
                <p className='visi'>{miles}</p>
                <p className='mi'>miles</p>
                </div>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}

export default Visibility