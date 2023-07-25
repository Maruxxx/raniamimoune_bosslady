import React from 'react'

function Icon({image, title}) {
  return (
    <div className=' flex flex-col w-36 h-36 sm:w-48 sm:h-48 justify-center items-center bg-black gap-4 rounded-2xl'>
        <img src={image} className='w-14 sm:w-20' alt=''></img>
        <p className='text-gold font-jannaBold text-center px-4 text-xs sm:text-sm sm:px-8'>{title}</p>
    </div>
  )
}

export default Icon