import React, { useState } from 'react'

function Offer() {
  
  const [dzdActive, setDzdActive] = useState(false)
  
  const date = new Date(Date.now() + 20 * 24 * 60 * 60 * 1000)
  const converted = (date - Date.now()) / 3600000
  const newDate = converted / 24
  
  
  return (
    <div className='w-screen flex flex-col gap-8 justify-center items-center my-8'>
      
      
      <div className='flex flex-col justify-center items-center gap-8 lg:hidden'>
            <p className='font-jannaBold px-8 text-center text-2xl sm:text-3xl sm:px-8'> هذه <span className='text-gold font-roboto'> Boss Lady MasterClass </span> ليست للجميع</p>
            <svg width="250" height="10" viewBox="0 0 694 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.333403 13L13 25.6666L25.6666 13L13 0.333403L0.333403 13ZM693.667 13L681 0.333403L668.333 13L681 25.6666L693.667 13ZM13 15.1939H681V10.8061H13V15.1939Z" fill="black"/>
            </svg>
            <p className='font-jannaRegular px-4 text-center text-xl sm:text-2xl sm:px-8'>تخضع الراغبة بالإنضمام لإختبار قبول <br></br>( مكالمة هاتفية )</p>
      </div>


      <div className='w-5/6 gap-8 flex flex-col justify-between items-center bg-gradient-to-r rounded-2xl from-firstGold via-secondGold to-thirdGold shadow-lg pb-8'>

        {/* BELOW IS FOR MOBILE DEVICE */}

          <div className='flex flex-col gap-8 justify-center items-center md:hidden'>
                    <div className='flex  gap-2 -mb-4'>

                      {
                        dzdActive ? (
                          <div className='flex gap-2'>
                            <img src={require('../assets/icons/cuttedPriceDZD.png')} alt=''  className='object-contain w-16 sm:w-20 right-10 self-start'></img>
                            <img src={require('../assets/icons/promoPriceDZD.png')} alt=''  className='object-contain w-32 sm:w-56 right-28'></img>
                          </div>
                        ) : (
                          <div className='flex gap-2'>
                            <img src={require('../assets/icons/cuttedPrice.png')} alt=''  className='object-contain w-16 sm:w-20 right-10 self-start'></img>
                            <img src={require('../assets/icons/promoPrice.png')} alt=''  className='object-contain w-32 sm:w-56 right-28'></img>
                          </div>
                        )
                      }

                        <img src={require('../assets/icons/logo_black.png')} alt='' className='object-contain max-sm:w-9 sm:mr-8 opacity-70 mr-4'></img>
                    
                    
                    </div>
                
                    <div className='flex gap-2 flex-col justify-center items-center'>
                      <p className='font-jannaRegular text-center text-md sm:text-xl'>الوقت المتبقي للعرض</p>
                      <p className='text-center font-jannaBold text-5xl sm:text-7xl'>{Math.round(newDate)} {newDate < 11 && newDate > 1 ? "أيام" : "يوم"}</p>
                    </div>

                    <div className='gap-1'>
                      <div className='flex justify-start gap-2 items-center'>
                        <img src={require('../assets/icons/check.png')} width={15} alt=''></img>
                        <p className='font-jannaBold opacity-60 text-sm sm:text-xl'>مكالمة فيديو خاصة مع رانيا ميمون</p>
                      </div>
                      <div className='flex justify-start gap-2 items-center'>
                        <img src={require('../assets/icons/check.png')} width={15} alt=''></img>
                        <p className='font-jannaBold opacity-60 text-sm sm:text-xl'>الفوز بدورة "فن الحياة"</p>
                      </div>
                    </div>


                    <a href='https://docs.google.com/forms/d/1TzAi_Sx2WfTlxA5_c_lT6cBNclydDqb9Ki_Ce3UEpNg' target="_blank" rel="noreferrer" className='w-4/6 mb-5 flex justify-center items-center bg-black px-4 py-4 rounded-lg'>
                      <p className='font-jannaBold text-center text-white text-xl'>
                      سجّل الآن !
                      </p>
                    </a>

          </div>

          {/* BELOW IS FOR WEB */}

        <div className='hidden md:flex justify-evenly items-center w-full pb-4'>
                
                <div className='w-2/3 flex flex-col justify-center items-center   gap-4'>

                      {
                        dzdActive ? (
                          <div className='flex justify-center items-center  gap-2'>
                            <img src={require('../assets/icons/cuttedPriceDZD.png')} alt=''  className='object-contain w-20  right-10 self-start'></img>
                            <img src={require('../assets/icons/promoPriceDZD.png')} alt=''  className='object-contain w-44 right-28 self-start'></img>
                          </div>
                        ) : (
                          <div className='flex justify-center items-center  gap-2'>
                            <img src={require('../assets/icons/cuttedPrice.png')} alt=''  className='object-contain w-20  right-10 self-start'></img>
                            <img src={require('../assets/icons/promoPrice.png')} alt=''  className='object-contain w-44 right-28 self-start'></img>
                          </div>
                        )
                      }

                        

                        

                    
                        <div className='flex gap-2 flex-col justify-center items-center'>
                          <p className='font-jannaBold text-center text-lg'>الوقت المتبقي للعرض</p>
                          <p className='text-center font-jannaBold text-5xl'>{Math.round(newDate)} {newDate < 11 && newDate > 1 ? "أيام" : "يوم"}</p>
                        </div>
                
                </div>
            

                  <div className=' w-2/3 flex justify-between items-center flex-col gap-12 pt-8'>
                  
                          <img src={require('../assets/icons/logo_text_black.png')} alt='' className='w-44 opacity-70'></img>

                          <div className='gap-1'>

                              

                              <div className='flex justify-start gap-2 items-center px-8'>
                                <img src={require('../assets/icons/check.png')} width={15} alt=''></img>
                                <p className='font-jannaBold opacity-60 text-xl '>مكالمة فيديو خاصة مع رانيا ميمون</p>
                              </div>
                              <div className='flex justify-start gap-2 items-center px-8'>
                                <img src={require('../assets/icons/check.png')} width={15} alt=''></img>
                                <p className='font-jannaBold opacity-60 text-xl '>الفوز بدورة "فن الحياة"</p>
                              </div>
                            
                            
                            </div>


                            <a href='https://docs.google.com/forms/d/1TzAi_Sx2WfTlxA5_c_lT6cBNclydDqb9Ki_Ce3UEpNg' target="_blank" rel="noreferrer" className='w-4/6 mb-5 text-white flex justify-center items-center bg-black px-4 py-4 rounded-lg hover:scale-110 hover:bg-white hover:text-black transition-all ease-in-out duration-200 cursor-pointer'>
                              <p className='font-jannaBold text-center text-xl'>
                              سجّل الآن !
                              </p>
                            </a>
                  
                  </div>

              </div>
          
          
          
          
          
          </div>
          
          <a onClick={() => {setDzdActive(!dzdActive)}} className='flex justify-center items-center gap-3 hover:scale-110 transition-all duration-200 ease-in-out'>
            <img src={require('../assets/icons/switch.png')} width={27}></img>
            <p   className='font-jannaBold text-center text-lg cursor-pointer text-switchBlue'>
              {
                !dzdActive ? 'السعر بالدينار الجزائري' : 'السعر بالدولار الأمريكي' 
              }
            </p>
          </a>


      <div className='w-5/6 h-80 lg:h-60 relative flex flex-col justify-end items-center'>
        <div className='w-full h-5/6  flex justify-center items-center bg-gradient-to-r rounded-2xl from-firstSilver via-secondSilver to-thirdSilver shadow-lg'>
          <p className='font-jannaBold text-center px-12 md:text-xl xl:text-2xl xl:px-20 mt-4'>في نهاية البرنامج صاحبة احد المشاريع المشاركة تفوز بباقة الاشهارات VIP
مع وكالتنا ( سعرها الاصلي 600$ )
خطة تسويقية حصرية للمشروع + اعلان في حساب رانيا ميمون الرسمي</p>

        </div>


        <img src={require('../assets/icons/Giftbox.png')} className='absolute top-0 w-20' alt=''></img>
      </div>

    </div>
  )
}

export default Offer