import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../customerNavBar'
import { Button } from '../components'

const CustomerHomePage = () => {
  return (
    <>
      <NavBar />
      {/* These divs are temporary. Gonna be replaced with the actual components. */}
      <div className='h-screen'>
        <div className='bg-secondary-gray w-screen h-1/2 mt-20 text-base'>
          Hero Banner
        </div>
        <div className='w-screen h-1/3 flex mt-5'>
          <div className='w-5/6 bg-secondary-gray text-base'>
            Upcoming Appointments
          </div>
          <div className='w-1/6'>
            <Link to='/home/book-appointment'>
              <Button label='Book Appointment' className='rounded-full'>Book Appointment</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerHomePage