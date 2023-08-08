import React from 'react'

const Footer = () => {
  return (
    <div className='w-screen bg-black flex flex-col justify-center gap-4 py-8 items-center md:flex-row md:gap-16'>
      <p className='font-jannaRegular text-white'>للتواصل والاستفسار :</p>
      
      <div className='flex justify-center items-center gap-6'>
      
      <a href="https://www.instagram.com/raniamimoune.official" target="_blank" rel="noreferrer" className='flex justify-center items-center gap-2 cursor-pointer'>
        <p className='font-jannaBold text-white'>Instagram</p>
        <img src={require('../assets/icons/ig.png')} width={20} alt=''></img>
      </a>

      <p className='text-white font-jannaBold'>-</p>

      <a href="https://wa.link/s5zgd0" target="_blank" rel="noreferrer" className='flex justify-center items-center gap-2 cursor-pointer'>
        <p className='font-jannaBold text-white'>Whatsapp</p>
        <img src={require('../assets/icons/wa.png')} width={22} alt=''></img>
      </a>
      
      </div>

    </div>
  )
}

export default Footer