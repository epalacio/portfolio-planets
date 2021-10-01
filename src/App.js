import Navbar from './components/Navbar';
import Planet from './components/PlanetPage';

const App = () => {

  return (
    <div className='App flex h-screen text-fontWhite relative'>
      <Navbar/>
      <div className='flex-grow m-auto md:max-w-screen-xl lg:max-w-screen-2xl pt-32 md:pt-0'>
        <Planet/>
      </div>
    </div>
  );
}

export default App;
