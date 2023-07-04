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
            const velocidad_mph = (velocidad_ms * 2.237).toFixed(1);

            return (
              <div className="centerWind" key={index}>
                <p>Wind Status</p>
                <div className="line">
                  <p className="num">{velocidad_mph}</p>
                  <p className="numTwo">mph</p>
                </div>
                <div className='numThree'>
                  <p className='svg'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-cursor-fill"
                      viewBox="0 0 16 16"
                      style={{transform: 'scale(-1)'}}
                    >
                      <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                    </svg>
                  </p>
                  <p className='nameW'>WSW</p>
                </div>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}

export default Wind