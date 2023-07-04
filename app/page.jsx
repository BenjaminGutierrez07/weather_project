import Today from "./weathertoday/Today";
import Semana from "./infoWeek/Semana";
import Hight from "./hight/Hight";

function Home() {
  
  return (
    <div className="container">
      <Today />
      <div className="info">
      <Semana />
      <a className="subtitle">Today's Highlights</a>
      <Hight />
        {/*<div className="lights">
          
            <a>highlights</a>
          <div>
            <button>wind</button>
            <button>humidity</button>
          </div>
          <div>
            <button>visibility</button>
            <button>air</button>
          </div>
          </div>*/}
      </div>
    </div>
  );
}

export default Home;
