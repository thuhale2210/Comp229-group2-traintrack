import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../customerNavBar';
import UpcomingSchedule from '../customerAppointmentPage/UpcomingSchedule';
import WorkoutHistory from '../customerAppointmentPage/WorkoutHistory';

const AppointmentPage = () => {
  const customerId = sessionStorage.getItem('userId');
  
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [workoutHistory, setWorkoutHistory] = useState([]);

  useEffect(() => {
    // Fetch upcoming appointments
    axios.get(`http://localhost:4000/customer/${customerId}/upcomingSchedule`)
      .then(response => {
        console.log('Upcoming Schedule:', response.data);
        setUpcomingAppointments(response.data);
      })
      .catch(error => {
        console.error('Error fetching upcoming appointments:', error);
      });

    // Fetch workout history
    axios.get(`http://localhost:4000/customer/${customerId}/workoutHistory`)
      .then(response => {
        console.log('Workout History:', response.data);
        setWorkoutHistory(response.data);
      })
      .catch(error => {
        console.error('Error fetching workout history:', error);
      });
  }, [customerId]); // Fetch data when customerId changes
  // Mock data for testing
  /*const upcomingAppointments = [
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
  ];*/

  return (
    <>
      <NavBar />
      <div className='flex flex-col w-screen'>
        <div className="mt-5">
          <p className='text-base font-bold py-3 text-left ml-5'>Upcoming Schedule</p>
          <UpcomingSchedule upcomingAppointments={upcomingAppointments} />
        </div>
        <div className="mt-5">
          <p className='text-base font-bold  py-3 text-left ml-5'>Workout History</p>
          <WorkoutHistory workoutHistory={workoutHistory} />
        </div>
      </div>
    </>

  );
};

export default AppointmentPage;