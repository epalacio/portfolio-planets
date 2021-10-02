import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (planetIndex) => {
    props.navChosenPlanet(planetIndex)
  }

  return (
      <nav className='absolute top-0 left-0 right-0'>
        <div className='max-w-screen-2xl mx-auto p-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex md:flex-col lg:flex-row items-center w-full justify-between'>
              <div className='flex-shrink-0'>
                <h2 className='font-antonio text-planetsTitle'>THE PLANETS</h2>
              </div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  <p onClick={() => {handleClick('0')}}className='cursor-pointer px-3 py-2 text-mobileButtons text-titles hover:text-white'>MERCURY</p>
                  <p onClick={() => {handleClick('1')}}className='cursor-pointer px-3 py-2 text-mobileButtons text-titles hover:text-white'>VENUS</p>
                  <p onClick={() => {handleClick('2')}}className='cursor-pointer px-3 py-2 text-mobileButtons text-titles hover:text-white'>EARTH</p>
                  <p onClick={() => {handleClick('3')}}className='cursor-pointer px-3 py-2 text-mobileButtons text-titles hover:text-white'>MARS</p>
                  <p onClick={() => {handleClick('4')}}className='cursor-pointer px-3 py-2 text-mobileButtons text-titles hover:text-white'>JUPITER</p>
                  <p onClick={() => {handleClick('5')}}className='cursor-pointer px-3 py-2 text-mobileButtons text-titles hover:text-white'>SATURN</p>
                  <p onClick={() => {handleClick('6')}}className='cursor-pointer px-3 py-2 text-mobileButtons text-titles hover:text-white'>URANUS</p>
                  <p onClick={() => {handleClick('7')}}className='cursor-pointer px-3 py-2 text-mobileButtons text-titles hover:text-white'>NEPTUNE</p>
                </div>
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='inline-flex items-center justify-center p-2 rounded-md text-valhalla hover:text-carnation'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
          className='absolute z-10 w-full bg-background h-screen'
        >
          {(ref) => (
            <div className='md:hidden flex flex-col justify-between divide-y-2 divide-opacity-50 divide-titles' id='mobile-menu'>
                <a href='/' className='p-3 text-mobileMenu text-white'><span className='mx-4 inline-block rounded-full h-planetCircle w-planetCircle bg-mercury'></span>MERCURY</a>
                <a href='/' className='p-3 text-mobileMenu text-white'><span className='mx-4 inline-block rounded-full h-planetCircle w-planetCircle bg-venus'></span>VENUS</a>
                <a href='/' className='p-3 text-mobileMenu text-white'><span className='mx-4 inline-block rounded-full h-planetCircle w-planetCircle bg-earth'></span>EARTH</a>
                <a href='/' className='p-3 text-mobileMenu text-white'><span className='mx-4 inline-block rounded-full h-planetCircle w-planetCircle bg-mars'></span>MARS</a>
                <a href='/' className='p-3 text-mobileMenu text-white'><span className='mx-4 inline-block rounded-full h-planetCircle w-planetCircle bg-jupiter'></span>JUPITER</a>
                <a href='/' className='p-3 text-mobileMenu text-white'><span className='mx-4 inline-block rounded-full h-planetCircle w-planetCircle bg-saturn'></span>SATURN</a>
                <a href='/' className='p-3 text-mobileMenu text-white'><span className='mx-4 inline-block rounded-full h-planetCircle w-planetCircle bg-uranus'></span>URANUS</a>
                <a href='/' className='p-3 text-mobileMenu text-white'><span className='mx-4 inline-block rounded-full h-planetCircle w-planetCircle bg-neptune'></span>NEPTUNE</a>
            </div>
            
          )}
        </Transition>
      </nav>
  );
}

export default Navbar;