import React from 'react'
import profile from '../../assets/images/about.png'

const About = () => {
  return (
    <div id='about' className="flex justify-center p-4 sm:px-6 lg:px-8 lg:h-[700px]">
        <div className="max-w-xlg w-full mx-auto flex flex-col lg:flex-row my-8 md:items-center md:justify-center md:space-y-8">
            <h2 className='text-2xl flex justify-center my-4 md:text-3xl md:hidden lg:text-5xl'>
                About Us
            </h2>
            <img 
            className='w-full flex md:flex-col mx-auto lg:w-80 lg:ml-24 lg:my-8 lg:z-20'
            src={profile} 
            alt="founder refer" />
            <span 
            style={{margin:0}}
            className='hidden md:block lg:z-10 lg:w-[100px] lg:h-[600px] lg:py-8 lg:flex-col bg-violet-300'
            ></span>
            <div className='w-full md:ml-8 lg:w-4/6'>
                <h2 className='hidden text-xl md:block md:text-2xl lg:ml-12 md:mb-8 lg:text-3xl'>
                    About Us
                </h2>
                <p className='text-sm ml-0 w-full my-4 md:text-lg md:w-3/4 lg:w-4/6 lg:ml-12 lg:text-xl '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dicta, at possimus consectetur, neque sint tenetur incidunt dolorem nihil, aspernatur vero ipsam veritatis quibusdam laborum dolore earum autem perspiciatis molestias.
                </p>
            </div>
        </div>
    </div>
  )
}

//

export default About