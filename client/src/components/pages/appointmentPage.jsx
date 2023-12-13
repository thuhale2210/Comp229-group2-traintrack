import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../customerNavBar';
import UpcomingSchedule from '../customerAppointmentPage/UpcomingSchedule';
import WorkoutHistory from '../customerAppointmentPage/WorkoutHistory';

const AppointmentPage = () => {
  const customerId = sessionStorage.getItem('userId');
  
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [workoutHistory, setWorkoutHistory] = useState([]);

  const fetchAppointments = () => {
    // Fetch upcoming appointments
    axios.get(`http://localhost:4000/customer/${customerId}/upcomingSchedule`)
      .then(response => {
        console.log('Upcoming Schedule:', response.data);
        setUpcomingAppointments(response.data);
      })
      .catch(error => {
        console.error('Error fetching upcoming appointments:', error);
      });
  }

  useEffect(() => {
    
    fetchAppointments();

    // Fetch workout history
    axios.get(`http://localhost:4000/customer/${customerId}/workoutHistory`)
      .then(response => {
        console.log('Workout History:', response.data);
        setWorkoutHistory(response.data);
      })
      .catch(error => {
        console.error('Error fetching workout history:', error);
      });
  }, []); // Fetch data when customerId changes
  
  return (
    <>
      <NavBar />
      <div className='flex flex-col w-screen'>
        <div className="mt-5">
          <p className='text-lg font-bold py-5 text-left ml-10'>Upcoming Schedule</p>
          <div className="mx-20 rounded-xl bg-white shadow-md">
            <UpcomingSchedule upcomingAppointments={upcomingAppointments} setUpcomingAppointments={fetchAppointments} />
          </div>
        </div>
        <div className="mt-5">
          <p className='text-lg font-bold py-5 text-left ml-10'>Workout History</p>
          <div className="mx-20 rounded-xl bg-white shadow-md">
            <WorkoutHistory workoutHistory={workoutHistory} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentPage;