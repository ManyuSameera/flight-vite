import React, { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

const travelers = [
  {
    id: 1,
    destinationImage: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    travelerImage: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsbGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    travelerName: 'Manyu',
    socialLink: '@manyusameera18'
  },
  {
    id: 2,
    destinationImage: 'https://images.unsplash.com/photo-1555217851-6141535bd771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2luZ2Fwb3JlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    travelerImage: 'https://images.unsplash.com/photo-1515615791787-d8e0022e233f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    travelerName: '100',
    socialLink: '@100'
  },
  {
    id: 3,
    destinationImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXVzdHJhbGlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    travelerImage: 'https://images.unsplash.com/photo-1517400508447-f8dd518b86db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsbGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    travelerName: 'Virat',
    socialLink: '@18'
  },
  {
    id: 4,
    destinationImage: 'https://images.unsplash.com/photo-1603548746365-0c7a1583d826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW50YXJjdGljYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    travelerImage: 'https://images.unsplash.com/photo-1517475452665-4e6898befa13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhdmVsZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    travelerName: '100',
    socialLink: '@100'
  }
];

const Travellers = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='travellers container section'>
      <div data-aos='fade-down' data-aos-duration='2500' className='sectionContainer'>
        <h2>Top travellers of this month</h2>

        <div className='travelersContainer grid'>
          {travelers.map(({ id, destinationImage, travelerImage, travelerName, socialLink }) => {
            return (
              <div data-aos='fade-up' data-aos-duration='2500' key={id} className='singleTraveler'>
                <img src={destinationImage} alt='Destination' className='destinationImage' />
                <div className='travelerDetails'>
                  <div className='travelerPicture'>
                    <img src={travelerImage} alt='Traveler' className='travelerImage' />
                  </div>

                  <div className='travelerName'>
                    <span>{travelerName}</span>
                    <p>{socialLink}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Travellers;
