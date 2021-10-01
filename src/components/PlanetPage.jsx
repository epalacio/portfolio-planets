import { planetsData } from '../data'

import earthImg from '../assets/planet-earth.svg'
import iconSource from '../assets/icon-source.svg'

const Planet = () => {

    const [chosenPlanet, setChosenPlanet] = ('');

    const contentTitles = {
        'mobileButtons': ['OVERVIEW', 'STRUCTURE', 'SURFACE'],
        'buttons': ['OVERVIEW', 'INTERNAL STRUCTURE', 'SURFACE GEOLOGY'],
        'footerBoxes': [
            ['ROTATION TIME', '0.99 DAYS'], 
            ['REVOLUTION TIME', '365.26 DAYS'], 
            ['RADIUS', '6,371 KM'], 
            ['AVERAGE TEMP', '16°C']
        ]
    }

    console.log(planetsData)

    return ( 
        <section className='pb-12 pt-0 sm:pt-12' key={planetsData[0]}>
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
                {/* Main section with planet and description */}
                <div className='mx-auto px-2 md:px-20 lg:flex lg:px-0 lg:items-center'>
                    <img className='my-16 mx-auto max-w-mobileEarth sm:max-w-tabletEarth lg:max-w-desktopEarth lg:max-h-desktopEarth' src={earthImg} alt='Planet earth illustration' />
                    {/* Description */}
                    <div className='mx-auto flex flex-col md:flex-row lg:flex-col justify-between items-center'>
                        <div className='text-center sm:text-left w-planetDescription'>
                            <h2 className='font-antonio text-planetNameMobile md:text-planetNameTablet lg:text-planetNameDesktop py-6'>{planetsData[0].revolution}</h2>
                            <p className='py-6'>Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.</p>
                            <div className='flex flex-row pb-6 item-scenter justify-center md:justify-start md:pl-6 text-cloudBurst'>
                                <p className='mr-2'>Source : </p>
                                <a href='https://en.wikipedia.org/wiki/Earth' target='_blank' rel='noreferrer' className='underline font-bold ml-2'>Wikipedia</a>
                                <a href='https://en.wikipedia.org/wiki/Earth' target='_blank' rel='noreferrer' className='underline font-bold ml-2 flex items-center'><img src={iconSource} alt='icon source'/></a>
                            </div>
                        </div>
                        {/* Buttons */}
                        <div className='hidden md:block w-planetDescription'>
                            {contentTitles.buttons.map((button, i) => {
                                return (
                                <div className='border-cloudBurst border-2 p-3 flex items-center my-4 text-mobileButtons'>{`0${i + 1}`} <span className='ml-6'>{button}</span></div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                {/* Footer facts section */}
                <div className='md:flex md:flex-row md:justify-between px-2 md:px-20 lg:px-14 md:mx-auto md:mt-20'>
                    {/* Footer boxes */}
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