import React from 'react'

const Failed = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center box-border'>
      <h1 className='w-1/4 flex justify-center pb-8 mb-8 text-violet-400 text-5xl md:text-8xl 2xl:text-9xl border-b-2 border-black'>
        404
      </h1>
      <h2 className='text-2xl my-4 md:text-3xl 2xl:text-5xl'>
        Cannot find that page
      </h2>
    </div>
  )
}

export default Failed