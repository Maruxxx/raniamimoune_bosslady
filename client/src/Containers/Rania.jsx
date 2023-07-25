import React from 'react'

function Rania() {
  return (
    <>
    
    <div className='w-5/6 rounded-2xl py-12 gap-8 bg-black flex flex-col justify-center items-center my-12 lg:hidden'>
      <img src={require('../assets/06.webp')} className='rounded-2xl w-4/6' alt=''></img>
      <div>
        <p className='font-signature text-gold text-6xl'>رانيا ميمون</p>
      </div>
      <div className='px-8 md:px-16'>
        <p className='text-white font-jannaRegular text-start'>● سيدة أعمال بدأت من تحت الصفر</p>
        <p className='text-white font-jannaRegular text-start'>● معلّمة وعي وتطوير ذات</p>
        <p className='text-white font-jannaRegular text-start'>● معالجة بالطاقة الحيوية ومختصة بالتشافي الذاتي</p>
        <p className='text-white font-jannaRegular text-start'>● مؤثرة على مواقع التواصل الإجتماعي بأكثر من مليون متابع</p>
        <p className='text-white font-jannaRegular text-start'>● متحدثة تحفيزية جماهرية في العديد من الأحداث العالمية مثل حدث TEDx الأمريكي</p>
        <p className='text-white font-jannaRegular text-start'>● الفائزة بلقب أفضل شخص ملهم صانع للأمل في الجزائر 2019 في مسابقة صناع الأمل الجزائري بالإمارات العربية المتحدة</p>
        <p className='text-white font-jannaRegular text-start'>● تدرّب على يدها أكثر من 8000 شخص في آخر أربع سنوات</p>
      </div>
      
      <div className='px-8'>
        <p className='text-white font-jannaBold text-center'>رسالتي هي تحقيق التوازن بين الروح والمادة ✨</p>
      </div>
  </div>

  <div className='w-5/6 rounded-2xl py-12 gap-8 bg-black hidden justify-center items-center my-12 lg:flex'>
      
      <img src={require('../assets/06.webp')} className='rounded-2xl px-12 h-auto w-3/6 xl:w-5/12' alt=''></img>
      
      <div className='flex justify-center flex-col items-center gap-10 xl:mx-12'>
        <div>
          <p className='font-signature text-gold text-7xl text-center'>رانيا ميمون</p>
        </div>
        <div className='px-8'>
          <p className='text-white font-jannaRegular text-start'>● سيدة أعمال بدأت من تحت الصفر</p>
          <p className='text-white font-jannaRegular text-start'>● معلّمة وعي وتطوير ذات</p>
          <p className='text-white font-jannaRegular text-start'>● معالجة بالطاقة الحيوية ومختصة بالتشافي الذاتي</p>
          <p className='text-white font-jannaRegular text-start'>● مؤثرة على مواقع التواصل الإجتماعي بأكثر من مليون متابع</p>
          <p className='text-white font-jannaRegular text-start'>● متحدثة تحفيزية جماهرية في العديد من الأحداث العالمية مثل حدث TEDx الأمريكي</p>
          <p className='text-white font-jannaRegular text-start'>● الفائزة بلقب أفضل شخص ملهم صانع للأمل في الجزائر 2019 في مسابقة صناع الأمل الجزائري بالإمارات العربية المتحدة</p>
          <p className='text-white font-jannaRegular text-start'>● تدرّب على يدها أكثر من 8000 شخص في آخر أربع سنوات</p>
        </div>
        
        <div className='px-8'>
          <p className='text-white font-jannaBold text-center'>رسالتي هي تحقيق التوازن بين الروح والمادة ✨</p>
        </div>
      </div>

  </div>
  </>
  )
}

export default Rania