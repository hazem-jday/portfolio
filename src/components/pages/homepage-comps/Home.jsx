import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from "react-scroll"
import { Link as LincRRD } from 'react-router-dom';
import MobileSocialLinks from './MobileSocialLinks';

const Home = () => {
    return (
      <section name="Home" className='relative w-full md:h-screen h-unset'>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-0 md:flex-row md:gap-8'>

          <div className='flex flex-col justify-center items-center h-[85%] md:h-full order-2 md:order-1 md:items-start'>
            
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-2 mt-3 md:mt-0 md:mb-4'>Hazem JDAY ✨</h1>
            <h2 className='rounded-md bg-primary-color/20 max-w-max px-6 inline text-xl md:text-3xl lg:text-4xl font-semibold text-white'>Developer</h2>
            <p className='text-gray-300 py-4 max-x-md text-justify'>A versatile software engineering student experienced in web, mobile, and 3D simulation. Passionate about problem-solving and staying updated on new technologies, I'm ready to contribute my skills to innovative projects.</p>

            <div className=''>
            <LincRRD to='/about-me' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300'>
                        See more
                        <span className=''><MdOutlineKeyboardArrowRight size={25} className='ml-1' /></span>
                    </LincRRD>
            </div>

            <MobileSocialLinks />
          </div>

          <div className='flex order-1 md:order-2 mt-8 md:mt-0'>
              <img src="/images/hazemcartoon.png" alt="My profile" className='mb-2 rounded-2xl mx-auto w-2/3 max-w-lg md:max-w-sm object-cover md:w-[70rem] shadow-2xl shadow-primary-color/20' style={{ filter: 'drop-shadow(0px -4px 4px rgba(0, 255, 0, 0.5))', border: "solid green 2px" }} />
              {/* <img src="https://imgur.com/mebuqDk.png" alt="My profile" className='rounded-2xl mx-auto w-2/3 max-w-lg md:max-w-sm object-cover md:w-[70rem] shadow-2xl shadow-primary-color/20' style={{ filter: 'drop-shadow(0px -4px 4px rgba(0, 255, 0, 0.5))' }} /> */}
            </div>
        </div>

        <Link to="Experience" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color'>
                <i className='bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color'></i>
            </Link>
      </section>
    );
}

export default Home
