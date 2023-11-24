import React from 'react'
import NavBar from '../customerNavBar'
import BookAppointment from '../customerHomePage/bookAppointment'

const CustomerHome = () => {
  return (
    <>
      <NavBar />
      {/* These divs are temporary. Gonna be replaced with the actual components. */}
      <div className='h-screen'>
        <div className='bg-slate-200 w-screen h-1/2 mt-20'>
          Charts from Fitness Tracker
        </div>
        <div className='w-screen h-1/3 flex mt-5'>
          <div className='w-3/4 bg-slate-200'>
            Upcoming Appointments
          </div>
          <div className='w-1/4'>
            <BookAppointment className='fixed bottom-0'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerHome