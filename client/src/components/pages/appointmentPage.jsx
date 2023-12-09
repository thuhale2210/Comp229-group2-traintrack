import React from 'react';
import NavBar from '../customerNavBar';
import UpcomingSchedule from '../customerAppointmentPage/UpcomingSchedule';
import WorkoutHistory from '../customerAppointmentPage/WorkoutHistory';

const AppointmentPage = () => {
  // Mock data for testing
  const upcomingAppointments = [
    {
      date: '11/13/2023',
      time: '8:00 AM',
      focusArea: 'Core',
      trainer: 'David',
      duration: 60,
      specialRequest: 'N/A',
    },
    {
      date: '11/11/2023',
      time: '8:00 AM',
      focusArea: 'Upper body',
      trainer: 'David',
      duration: 60,
      specialRequest: 'N/A',
    },
  ];

  const workoutHistory = [
    {
      date: '11/08/2023',
      time: '8:30 PM',
      focusArea: 'Lower body',
      trainer: 'Self-training',
      duration: 30,
      specialRequest: 'N/A',
    },
    {
      date: '11/04/2023',
      time: '8:00 AM',
      focusArea: 'Core',
      trainer: 'David',
      duration: 60,
      specialRequest: 'N/A',
    },
    {
      date: '11/01/2023',
      time: '8:30 PM',
      focusArea: 'Lower body',
      trainer: 'Self-training',
      duration: 30,
      specialRequest: 'N/A',
    },
    {
      date: '10/29/2023',
      time: '8:00 AM',
      focusArea: 'Upper body',
      trainer: 'David',
      duration: 60,
      specialRequest: 'N/A',
    },
  ];

  return (
    <>
      <NavBar />
      <div className='flex flex-col w-screen'>
        <div className="mt-5">
          <p className='text-base font-bold py-5 text-left ml-10'>Upcoming Schedule</p>
          <div className="mx-20 rounded-xl bg-white shadow-md">
            <UpcomingSchedule upcomingAppointments={upcomingAppointments} />
          </div>
        </div>
        <div className="mt-5">
          <p className='text-base font-bold py-5 text-left ml-10'>Workout History</p>
          <div className="mx-20 rounded-xl bg-white shadow-md">
            <WorkoutHistory workoutHistory={workoutHistory} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentPage;