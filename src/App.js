import React,{useState,useEffect} from 'react';

import Home from './pages/Home';

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
    <div className="App h-screen text-fontWhite">
      {planets.map(planet => {
        return <p key={planet.id}>{planet.name.toLowerCase()}</p>
      })}
      <Home planetsDB={planets}/>
    </div>
  );
}

export default App;
