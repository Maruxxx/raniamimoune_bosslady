import React, { useState } from 'react'


const Header = () => {
 
  const [activeMenu, setActiveMenu] = useState(false)
 
  return (
    <div className='w-screen py-4 flex flex-col justify-center items-center bg-black rounded-bl-3xl rounded-br-3xl'>
      <div className='flex justify-center items-center flex-col w-9/12 md:hidden'>
        
        <div className='flex justify-between items-center w-full md:hidden'>
          <a href='/'>
            <img src={require('../assets/logo_text.png')} width={75} className='my-4 block md:hidden' alt=''></img>
          </a>
          <svg onClick={() => {setActiveMenu(!activeMenu)}} xmlns="http://www.w3.org/2000/svg" color="#DDB464" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d={ activeMenu ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
          </svg>

          
        </div>

        {
          activeMenu ? (
            <div className='w-5/6'>
              <div className='my-6 w-full h-px bg-white opacity-75 block md:hidden'></div>
              <ul className='flex justify-center items-center flex-col gap-4 my-8 md:hidden'>
                <li>
                  <a href='#program' className='font-jannaRegular text-white opacity-75 cursor-pointer hover:opacity-100 transition-all ease-in-out duration-250'>ما هي BossLady MasterClass ؟</a>
                </li>
                <li>
                  <a href='#target' className='font-jannaRegular text-white opacity-75 cursor-pointer hover:opacity-100 transition-all ease-in-out duration-250'>لماذا BossLady MasterClass ؟</a>
                </li>
                <li>
                  <a href='#about' className='font-jannaRegular text-white opacity-75 cursor-pointer hover:opacity-100 transition-all ease-in-out duration-250'>نبذة عني</a>
                </li>
                <li>
                  <a href='#contact' className='font-jannaRegular text-white opacity-75 cursor-pointer hover:opacity-100 transition-all ease-in-out duration-250'>تواصل معي</a>
                </li>
              </ul>
            </div>
          ) : (
            null
          )
        }
      </div>
      <a href='/'>
        <img src={require('../assets/logo.png')} width={150} className='my-4 hidden md:block' alt=''></img>
      </a>
      <div className='my-4 w-4/6 h-px bg-white opacity-75 hidden md:block'></div>
      <ul className='hidden justify-center items-center gap-16 my-4 md:flex'>
        
        <li>
          <a href='#program' className='font-jannaRegular text-white opacity-75 cursor-pointer hover:opacity-100 transition-all ease-in-out duration-250'>ما هي BossLady MasterClass ؟</a>
        </li>

        <li>
          <a href='#target' className='font-jannaRegular text-white opacity-75 cursor-pointer hover:opacity-100 transition-all ease-in-out duration-250'>لماذا BossLady MasterClass ؟</a>
        </li>

        <li>
          <a href='#about' className='font-jannaRegular text-white opacity-75 cursor-pointer hover:opacity-100 transition-all ease-in-out duration-250'>نبذة عني</a>
        </li>

        <li>
          <a href='#contact' className='font-jannaRegular text-white opacity-75 cursor-pointer hover:opacity-100 transition-all ease-in-out duration-250'>تواصل معي</a>
        </li>

      </ul>
    </div>
  )
}

export default Header