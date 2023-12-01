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
    // Add more upcoming appointments as needed
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
    // Add more workout history entries as needed
  ];

  return (
    <>
      <NavBar />
      <div className='flex flex-col'>
        <div className="mt-8">
          <div className="flex bg-gray-200 rounded-lg p-4 mb-4">
            <UpcomingSchedule upcomingAppointments={upcomingAppointments} />
          </div>
          <div className="flex bg-gray-200 rounded-lg p-4">
            <WorkoutHistory workoutHistory={workoutHistory} />
          </div>
        </div>
      </div>
    </>

  );
};

export default AppointmentPage;