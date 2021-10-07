import { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar';
import Planet from './components/PlanetPage';

import Mercury from './pages/Mercury';
import Venus from './pages/Venus';
import Earth from './pages/Earth';
import Mars from './pages/Mars';
import Jupiter from './pages/Jupiter';
import Saturn from './pages/Saturn';
import Uranus from './pages/Uranus';
import Neptune from './pages/Neptune';

const App = () => {

  const [planet, setPlanet] = useState(2)

  const chosenPlanet = (planetFromNav) => {
    console.log(planetFromNav)
    setPlanet(planetFromNav)
  }

  return (
    <Router>
    <div className='App flex h-screen text-fontWhite relative'>
      <Navbar
        navChosenPlanet={chosenPlanet}
      />
      <div className='flex-grow m-auto md:max-w-screen-xl lg:max-w-screen-2xl pt-32 md:pt-0'>
        {/* <Planet
          planet={planet}
          planetImg={`${chosenPlanet}Img`}
        /> */}
        <Switch>
          <Route path='/mercury'>
            <Mercury />
          </Route>
          <Route path='/venus'>
            <Venus />
          </Route>
          <Route path='/earth'>
            <Earth />
          </Route>
          <Route exact path='/'>
            <Earth />
          </Route>
          <Route path='/mars'>
            <Mars />
          </Route>
          <Route path='/jupiter'>
            <Jupiter />
          </Route>
          <Route path='/saturn'>
            <Saturn />
          </Route>
          <Route path='/uranus'>
            <Uranus />
          </Route>
          <Route path='/neptune'>
            <Neptune />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
