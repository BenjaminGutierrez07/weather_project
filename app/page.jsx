import Image from 'next/image'
import styles from './page.module.css'


async function getData(city) {
  const response = await fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=67fe6a6f66b21320a216fea2c1e49ad5`)
  const data = await response.json();
  console.log(data);
}


function Home() {

  const ciudad = "cochabamba";
  getData(ciudad);

  return (
    <div className="time">
      <div className='botones'>
        <button>Search places</button>
        <button>center</button>
      </div>
    </div>
  );
}

export default Home