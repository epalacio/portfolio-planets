import earthImg from '../assets/planet-earth.svg'

const Planet = () => {

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

    return ( 
        <section className='pb-12 pt-0 sm:pt-12'>
            <div className='block md:hidden flex justify-around border-t-2 border-b-2 border-cloudBurst'>
                {contentTitles.mobileButtons.map((button, i) => {
                    return (
                        <div className='py-4 '>
                            <a href='/'className='text-mobileButtons py-4 border-b-4 border-earth'>{button}</a>
                        </div>
                    )
                })}
            </div>
            <div>
                {/* Main section with planet and description */}
                <div>
                    <img className='my-16 mx-auto max-w-mobileEarth sm:max-w-tabletEarth lg:max-w-desktopEarth' src={earthImg} alt="Planet earth illustration" />
                    {/* Description and buttons */}
                    <div>
                        {/* Description */}
                        <div className='text-center sm:text-left'>
                            <h2 className='font-antonio text-planetNameMobile md:planetNameTablet lg:planetNameDesktop'>EARTH</h2>
                            <p className='p-6'>Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.</p>
                            <p className='text-cloudBurst pb-6'>Source <a href="https://en.wikipedia.org/wiki/Earth" target='_blank' rel='noreferrer' className='underline font-bold'>Wikipedia</a> </p>
                        </div>
                        {/* Buttons */}
                        <div className='hidden md:block'>
                            {contentTitles.buttons.map((button, i) => {
                                return (
                                <div>{`0${i + 1}`} <span>{button}</span></div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                {/* Footer facts section */}
                <div className='px-6'>
                    {/* Footer boxes */}
                    {contentTitles.footerBoxes.map((box) => {
                        return (
                            <div className='border-2 border-cloudBurst flex justify-between items-center p-4 my-2 '>
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