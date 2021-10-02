import { useState } from 'react';
import Navbar from './components/Navbar';
import Planet from './components/PlanetPage';

import mercuryImg from './assets/planet-mercury.svg'
import venusImg from './assets/planet-venus.svg'
import EarthImg from './assets/planet-earth.svg'
import marsImg from './assets/planet-mars.svg'
import jupiterImg from './assets/planet-jupiter.svg'
import saturnImg from './assets/planet-saturn.svg'
import uranusImg from './assets/planet-uranus.svg'
import neptuneImg from './assets/planet-neptune.svg'

const App = () => {

  const [planet, setPlanet] = useState(2)

  const chosenPlanet = (planetFromNav) => {
    console.log(planetFromNav)
    setPlanet(planetFromNav)
  }

  return (
    <div className='App flex h-screen text-fontWhite relative'>
      <Navbar
        navChosenPlanet={chosenPlanet}
      />
      <div className='flex-grow m-auto md:max-w-screen-xl lg:max-w-screen-2xl pt-32 md:pt-0'>
        <Planet
          planet={planet}
          planetImg={marsImg}
        />
      </div>
    </div>
  );
}

export default App;
