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
      </div>
    </div>
  );
}

export default Home;
