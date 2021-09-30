import React,{useState,useEffect} from 'react';

import Home from './pages/Home';
import Planet from './pages/PlanetPage';

const App = () => {

  const [planets,setPlanets]=useState([]);

  const getPlanets= () =>{
    fetch('data.json')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setPlanets(myJson)
      });
  }
  useEffect(()=>{
    getPlanets()
  },[])

  return (
    <div className="App h-full text-fontWhite">
      <Planet/>
      {/* {planets.map(planet => {
        return <p key={planet.id}>{planet.name.toLowerCase()}</p>
      })}
      <Home planetsDB={planets}/> */}
    </div>
  );
}

export default App;
