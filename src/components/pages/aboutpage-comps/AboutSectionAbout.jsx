import React from 'react'
import { Link as ScrollLink } from 'react-scroll';

const AboutSectionAbout = () => {
    return (
        <section name="About" className='relative w-full md:h-screen h-unset'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-24 lg:py-0 lg:flex-row lg:gap-8'>
                
                <div className='flex mx-auto mt-8 md:mt-0'>
                    <img src="/images/hazemphoto.jpg" alt="My profile" className='rounded-2xl mx-auto w-2/3 max-w-lg md:max-w-sm object-cover md:w-[70rem] shadow-2xl shadow-primary-color/20' style={{ filter: 'drop-shadow(0px -4px 4px rgba(0, 255, 0, 0.5))' }} />
                </div>

                <div className='flex flex-col justify-center items-center h-[85%] md:h-full'>
                    
                    <h1 className='text-4xl md:text-5xl font-bold text-white mb-2 md:mb-4'>Who I am?</h1>

                    <div className='flex items-center bg-primary-color/20 rounded-md py-2 px-4'>
                        <img className='h-[30px] w-auto mr-2' src="/icons/tunisia.png" alt="" />
                        <h2 className='text-lg sm:text-xl md:text-2xl md:py-1 font-semibold text-white'>Tunisian</h2>
                    </div>
                    
                    <p className='text-md md:text-lg text-gray-300 py-4 max-x-md text-justify'>Hey there! I'm a passionate engineering student at ISAMM in Tunisia, specializing in crafting awesome web and mobile apps, games and 3D simulation. My secret sauce? A blend of creativity, meticulous attention to detail, and an unyielding determination.</p>

                    <p className='text-md md:text-lg text-gray-300 py-4 max-x-md text-justify'>Let's team up to create incredible projects that transcend expectations. Ready to turn imagination into innovation?</p>

                </div>
            </div>

            <ScrollLink to="Memories" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color'>
                <i className='bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color'></i>
            </ScrollLink>
        </section>
    );
}

export default AboutSectionAbout
