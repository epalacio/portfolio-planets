import { useState } from 'react';

import { planetsData } from '../data'

import mercuryImg from '../assets/planet-mercury.svg'
import venusImg from '../assets/planet-venus.svg'
import EarthImg from '../assets/planet-earth.svg'
import marsImg from '../assets/planet-mars.svg'
import jupiterImg from '../assets/planet-jupiter.svg'
import saturnImg from '../assets/planet-saturn.svg'
import uranusImg from '../assets/planet-uranus.svg'
import neptuneImg from '../assets/planet-neptune.svg'
import iconSource from '../assets/icon-source.svg'


const Planet = ({planet}) => {

    const [contentTitles, setContentTitles] = useState({
        'mobileButtons': ['OVERVIEW', 'STRUCTURE', 'SURFACE'],
        'buttons': ['OVERVIEW', 'INTERNAL STRUCTURE', 'SURFACE GEOLOGY'],
        'footerBoxes': [
            ['ROTATION TIME', planetsData[planet].rotation], 
            ['REVOLUTION TIME', planetsData[planet].revolution], 
            ['RADIUS', planetsData[planet].radius], 
            ['AVERAGE TEMP', planetsData[planet].temperature]
        ]
    })

    const imageClasses = `my-16 mx-auto max-w-mobile${planetsData[planet].name} sm:max-w-tablet${planetsData[planet].name} lg:max-w-desktop${planetsData[planet].name} lg:max-h-desktop${planetsData[planet].name}`
    const planetImg = `${planetsData[planet].images.planet}`

    const handleClick = () => {

    }


    return ( 
        <section className='pb-12 pt-0 sm:pt-12'  key={planetsData[planet].id}>
            <div className='block md:hidden flex justify-around border-t-2 border-b-2 border-cloudBurst'>
                {contentTitles.mobileButtons.map((button, i) => {
                    return (
                        <div className='py-4 '>
                            <a href='/'className='text-mobileButtons py-4 border-b-4 border-earth'>{button}</a>
                        </div>
                    )
                })}
            </div>
            <div className='mx-auto max-w-screen-lg lg:max-w-screen-2xl'>
                <div className='mx-auto px-2 md:px-20 lg:flex lg:px-0 lg:items-center'>
                    <img className={imageClasses} src={planetImg} alt={planetsData[planet].overview.name} />
                    <div className='mx-auto flex flex-col md:flex-row lg:flex-col justify-between items-center'>
                        <div className='text-center sm:text-left w-planetDescription'>
                            <h2 className='font-antonio text-planetNameMobile md:text-planetNameTablet lg:text-planetNameDesktop py-6'>{planetsData[planet].name}</h2>
                            <p className='py-6'>{planetsData[planet].overview.content}</p>
                            <div className='flex flex-row pb-6 item-scenter justify-center md:justify-start md:pl-6 text-cloudBurst'>
                                <p className='mr-2'>Source : </p>
                                <a href={planetsData[planet].overview.source} target='_blank' rel='noreferrer' className='underline font-bold ml-2'>Wikipedia</a>
                                <a href={planetsData[planet].overview.source} target='_blank' rel='noreferrer' className='underline font-bold ml-2 flex items-center'><img src={iconSource} alt='icon source'/></a>
                            </div>
                        </div>
                        <div className='hidden md:block w-planetDescription'>
                            {contentTitles.buttons.map((button, i) => {
                                return (
                                <div className='border-cloudBurst border-2 p-3 flex items-center my-4 text-mobileButtons hover:bg-cloudBurst cursor-pointer'>{`0${i + 1}`} <span className='ml-6'>{button}</span></div>
                                )
                            })}
                        </div>
                    </div>
                </div>
               
                <div className='md:flex md:flex-row md:justify-between px-2 md:px-20 lg:px-14 md:mx-auto md:mt-20'>
                    {contentTitles.footerBoxes.map((box) => {
                        return (
                            <div className='border-2 border-cloudBurst flex justify-between items-center px-4 py-6 my-2  md:max-w-footerBox md:min-w-footerBox md:flex md:flex-col md:items-start max-w-planetDescription mx-auto'>
                                <p className='text-titles text-mobileButtons text-spartan'>{box[0]}</p>
                                <h3 className='font-antonio text-boxContent'>{box[1]}</h3>
                            </div>
                        )
                    })}
                </div>
            </div> 
        </section>
    );
}
 
export default Planet;