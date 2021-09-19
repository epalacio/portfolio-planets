import React,{useState,useEffect} from 'react';

const App = () => {

  const [planets,setPlanets]=useState([]);

  const getPlanets=()=>{
    fetch('data.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setPlanets(myJson)
      });
  }
  useEffect(()=>{
    getPlanets()
  },[])

  return (
    <div className="App h-screen text-fontWhite">
      {planets.map(planet =>{
        return <p key={planet.id}>{planet.name.toLowerCase()}</p>
      })}
    </div>
  );
}

export default App;
