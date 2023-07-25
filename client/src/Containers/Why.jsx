import React from 'react'

function Why() {
  return (
    <div className='w-screen  bg-black flex flex-col justify-center items-center py-12 px-8'>
      <p className='font-jannaBold text-white text-3xl text-center lg:text-4xl'>لماذا <span className='text-gold font-roboto'>Boss Lady MasterClass ؟</span></p> 
      
      
      <div className='hidden justify-center items-center flex-col lg:flex'>
        <svg className='hidden h-14 w-full my-3 lg:w-4/6 lg:flex' viewBox="0 0 1828 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.132486 28.9961L29 57.8636L57.8675 28.9961L29 0.12858L0.132486 28.9961ZM1827.87 28.9961L1799 0.12858L1770.13 28.9961L1799 57.8636L1827.87 28.9961ZM29 33.9961H1799V23.9961H29V33.9961Z" fill="white"/>
        </svg>
      

        <p className='font-jannaRegular px-4 text-white text-lg text-center md:text-2xl'>البرنامج الوحيد في السوق الذي يعلمك كيف تخلقين التوازن بين 
( المادة و الروح )</p>
        
        
        <div className='w-full hidden justify-evenly items-center my-12 lg:flex'>
          <div className='flex flex-col justify-center items-center gap-8'>
            <img src={require('../assets/05.webp')} width={400} alt='' className='rounded-2xl'></img> 
            <p className='text-white font-jannaBold text-3xl'><span className='text-white'>مادياً</span> </p>
          </div>

          
          <div className='flex flex-col justify-center items-center gap-8'>
            <img src={require('../assets/04.webp')} width={400} alt='' className='rounded-2xl'></img>
            <p className='text-white font-jannaBold text-3xl'><span className='text-gold'>روحياً</span> </p>
          </div>
        </div>
      </div>


      
      
      <div className='w-full flex flex-col justify-center items-center my-8 py-2 lg:hidden'>
        
        <p className='font-jannaRegular mb-12 px-12 text-white text-md text-center md:text-2xl'>البرنامج الوحيد في السوق الذي يعلمك كيف تخلقين التوازن بين 
( المادة و الروح )</p>

        <div className='w-full flex flex-col justify-evenly items-center gap-16'>
            

          <div className='flex flex-col justify-center items-center gap-8'>
            <img src={require('../assets/04.webp')} width={350} alt='' className='rounded-2xl'></img>
            <p className='text-white font-jannaBold text-3xl'><span className='text-gold'>روحياً</span> </p>
          </div>

          <div className='flex flex-col justify-center items-center gap-8'>
            <img src={require('../assets/05.webp')} width={350} alt='' className='rounded-2xl'></img> 
            <p className='text-white font-jannaBold text-3xl'><span className='text-white'>مادياً</span> </p>
          </div>
        
        </div>


      </div>
      
      
    </div>
  )
}

export default Why