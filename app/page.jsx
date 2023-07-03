import Today from "./weathertoday/Today";

function Home() {
  
  return (
    <div className="container">
      <Today />
      <div className="info">
        <div className="change">
          <button>c</button>
          <button>f</button>
        </div>
        <div className="days">
          {
            //data.map((forecast, index) => (
            //  <h2 key={index}>{forecast.dt}</h2>
            //))
          }
        </div>
        <div className="lights">
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
