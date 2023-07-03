import Image from "next/image";
import styles from "./page.module.css";

async function getData(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=67fe6a6f66b21320a216fea2c1e49ad5`
  );
  const data = await response.json();
  console.log(data);
}

function Home() {
  const ciudad = "cochabamba";
  getData(ciudad);

  return (
    <div className="container">
      <div className="time">
        <div className="botones">
          <button className="search">Search places</button>
          <button className="location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-record-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="info">
        <div className="change">
          <button>c</button>
          <button>f</button>
        </div>
        <div className="days">
          <a>5 days</a>
        </div>
        <div>
          <a>highlights</a>
          <div>
            <button>wind</button>
            <button>humidity</button>
          </div>
          <div>
            <button>visibility</button>
            <button>air</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
