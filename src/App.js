import Planet from './pages/PlanetPage';

const App = () => {

  return (
    <div className='App flex h-screen text-fontWhite'>
      <div className='flex-grow m-auto md:max-w-screen-xl lg:max-w-screen-2xl'>
        <Planet/>
      </div>
    </div>
  );
}

export default App;
