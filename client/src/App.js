import Footer from './Components/Footer';
import { About, Header, Presentation, Program, Why , Target, Offer, Rania} from './Containers'

function App() {


  return (
    <div className='w-screen flex flex-col justify-center items-center'>
      <Header />
      <Presentation />
      <div>
        <About />
      </div>
      <div id='program'>
        <Program />
      </div>
      <div id='why'>
        <Why />
      </div>
      <div id='target'>
        <Target />
      </div>
      
      
      
      <div className='w-5/6 flex flex-col justify-evenly items-center mt-12 lg:flex-row'>

        <div className='flex flex-col justify-center items-center gap-8 lg:hidden'>
            <p className='font-jannaBold px-4 text-center text-2xl sm:text-3xl sm:px-8'>انضم الآن لأكثر من <span className='text-gold'> 100 مشارك </span> من كل أنحاء العالم</p>
            <svg width="250" height="10" viewBox="0 0 694 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.333403 13L13 25.6666L25.6666 13L13 0.333403L0.333403 13ZM693.667 13L681 0.333403L668.333 13L681 25.6666L693.667 13ZM13 15.1939H681V10.8061H13V15.1939Z" fill="black"/>
            </svg>

          </div>
            
            <div className="w-full sm:w-5/6 md:w-4/6 carousel my-12 lg:w-1/3 2xl:w-1/4">

                <div id="slide1" className="carousel-item relative w-full">
                  <img src={require('./assets/testimonials/05.webp')} className="w-full" alt=''/>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                    <a href="#slide5" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                  </div>
                </div> 

                <div id="slide2" className="carousel-item relative w-full">
                  <img src={require('./assets/testimonials/04.webp')} className="w-full" alt=''/>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                  </div>
                </div> 
                
                <div id="slide3" className="carousel-item relative w-full">
                  <img src={require('./assets/testimonials/03.webp')} className="w-full" alt=''/>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                  </div>
                </div> 
                
                <div id="slide4" className="carousel-item relative w-full">
                  <img src={require('./assets/testimonials/02.webp')} className="w-full" alt=''/>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide5" className="btn btn-circle">❯</a>
                  </div>
                </div> 
                
                <div id="slide5" className="carousel-item relative w-full">
                  <img src={require('./assets/testimonials/01.webp')} className="w-full" alt=''/>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide6" className="btn btn-circle">❯</a>
                  </div>
            
            </div> 
          
          
           
          
          </div>


          
      
      
          <div className='hidden gap-4 justify-center items-center flex-col lg:flex'>
              <img src={require('./assets/icons/testimonials.png')} width={100} alt=''></img>
              <p className='font-jannaBold text-center text-2xl md:text-3xl'>انضم الآن لأكثر من <span className='text-gold'> 100 مشارك </span>  <br></br>من كل أنحاء العالم</p>
          </div>
    
    
    </div>
      <Offer />
      <div className='w-screen flex flex-col justify-center items-center' id='about'>
        <Rania /> 
      </div>
      <div id='contact'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
