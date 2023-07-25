import React from 'react'
import Icon from '../Components/Icon'

function Program() {
  return (
    <div className='w-screen flex flex-col justify-center items-center my-16 px-4 md:px-16'>

      <p className='font-jannaBold text-black text-2xl text-center md:text-4xl'>ماهي <span className='text-gold font-roboto'> Boss Lady MasterClass ؟</span></p>
      <svg className='h-14 w-full my-3 md:w-4/6 px-4 ' viewBox="0 0 2005 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.124674 29L28.9922 57.8675L57.8597 29L28.9922 0.132486L0.124674 29ZM2004.88 29L1976.01 0.132486L1947.14 29L1976.01 57.8675L2004.88 29ZM28.9922 34H1976.01V24H28.9922V34Z" fill="black"/>
      </svg>

      <p className='font-jannaRegular mb-12 px-4 text-black text-lg text-center md:text-2xl'>ماستركلاس أونلاين مع رانيا ميمون شخصيا تقدم فيها استراتيجيات الوفرة المالية</p>
      
      <div className='flex justify-center items-center flex-wrap gap-2 sm:gap-16'>
        <Icon image={require('../assets/icons/1.png')} title='محاضرات مباشرة و مسجلة'/>
        <Icon image={require('../assets/icons/2.png')} title='تحديات و تطبيقات'/>
        <Icon image={require('../assets/icons/3.png')} title='دعم افكار المشاريع'/>
        <Icon image={require('../assets/icons/4.png')} title='تأملات و تنظيفات مباشرة'/>
        <Icon image={require('../assets/icons/5.png')} title='كتب للدعم'/>
        <Icon image={require('../assets/icons/6.png')} title='مداخلات احترافية رجال و نساء اعمال'/>
      </div>

      <p className='w-5/6 flex justify-center items-center text-center font-jannaBold leading-loose my-12 lg:text-xl bg-gradient-to-r from-firstGold via-secondGold to-thirdGold shadow-lg  px-8 py-8 rounded-xl'>هذا Masterclass بدعم رائدات أعمال متخصصات في مجالات مختلفة E-commerce - Forex - Brands - Beauty</p>
    </div>
  )
}

export default Program