import React from 'react'

function Presentation() {
  return (
    <div className='w-screen flex flex-col justify-evenly items-center my-12 md:flex-row lg:my-24'>
      <div className='flex justify-center items-center flex-col gap-4'>
        <p className='font-roboto text-5xl lg:text-7xl'>Boss Lady <br></br> Masterclass</p>
        <p className='font-jannaRegular text-2xl lg:text-3xl opacity-80 mb-2'>“هنا تخلقين واقع مادي مختلف”</p>
        <a href='#why' className='font-jannaBold lg:text-xl bg-gradient-to-r from-firstGold via-secondGold to-thirdGold shadow-lg px-6 py-4 rounded-xl hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer'>تفاصيل عن البرنامج</a>
      </div>
      <div className='my-12 lg:my-0'>
        <img src={require('../assets/01.webp')} className=' w-72 lg:w-96 rounded-3xl border-gold border-8 md:rounded-full' alt=''></img>
      </div>
    </div>
  )
}

export default Presentation
