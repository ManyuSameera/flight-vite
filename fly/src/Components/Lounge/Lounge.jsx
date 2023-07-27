import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Lounge = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='lounge container section'>
      <div className='sectionContainer grid'>
        <div data-aos='fade-left' data-aos-duration='2500' className='imgDiv'>
          <img src='https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG91bmdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60' alt=''/>
        </div>

        <div data-aos='fade-down' data-aos-duration='2500' className='textDiv'>
          <h2>Unaccompied Minor Lounge</h2>
        

        <div className='grids grid'>
          <div data-aos='fade-down' data-aos-duration='2500' className='singleGrid'>
            <span className='gridTitle'>
            Help through the airport
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket to one of your favourite destinations
            </p>
          </div>

          <div data-aos='fade-down' data-aos-duration='2500' className='singleGrid'>
            <span className='gridTitle'>
            Care on the flight
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket to one of your favourite destinations
            </p>
          </div>

          <div data-aos='fade-down' data-aos-duration='2500' className='singleGrid'>
            <span className='gridTitle'>
            Priority Boarding
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket to one of your favourite destinations
            </p>
          </div>


          <div  data-aos='fade-down' data-aos-duration='2500'className='singleGrid'>
            <span className='gridTitle'>
            Chafeur-drive service
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket to one of your favourite destinations
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Lounge