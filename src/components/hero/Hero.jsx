/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import HeroImage from '../../assets/images/hero.jpg'

function Hero() {
  return (
    <div 
    style={{ backgroundImage: `url(${HeroImage})`  }}
    className='w-full h-[55vh] relative flex items-center justify-center max-w-screen-2xl lg:h-[65vh] bg-no-repeat bg-cover bg-center bg-gradient-to-r from-gray-200 to-slate-200'
    >
      <div className="w-full h-full max-w-screen-xl flex pl-4 flex-col item-center justify-center box-border">
        <h1 className="text-left sm:text-2xl md:text-3xl max-w-xl antialiased text-white font-extrabold box-border whitespace-normal z-10">
          Welcome to Najé Essentials
        </h1>
      </div>
      {/* <img className="w-full relative" src={HeroImage} /> */}
    </div>
  )
}
export default Hero