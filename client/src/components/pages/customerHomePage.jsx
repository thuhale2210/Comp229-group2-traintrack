import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../customerNavBar'
import { BookButton } from '../components'
import HomeHeroBannerImage from '../../images/home-banner.jpeg';

const CustomerHomePage = () => {
  return (
    <>
      <NavBar />
      <div className='h-screen relative'>
        <img src={HomeHeroBannerImage} alt="hero-banner" className="w-screen h-full object-cover" />
        <div className='flex flex-col items-start text-left absolute top-1/2 left-0 ml-10'>
          <p className="font-bold text-primary-white text-[70px] my-3 leading-snug">
            READY TO GET FIT?
          </p>
          <p className="text-lg my-3 text-primary-white">
            Book an appointment with us<br />and achieve your fitness goals today!
          </p>
          <div className="my-3 text-base">
            <Link to='/home/book-appointment'>
              <BookButton label='Book Appointment'>Book Appointment</BookButton>
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default CustomerHomePage