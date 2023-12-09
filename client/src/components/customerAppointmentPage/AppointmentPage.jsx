import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpcomingSchedule from './UpcomingSchedule';
import WorkoutHistory from './WorkoutHistory';

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

  return (
    <div className="mt-8 flex flex-col items-center">
      <div className="bg-gray-200 rounded-lg p-4 mb-4">
        <UpcomingSchedule upcomingAppointments={upcomingAppointments} />
      </div>
      <div className="bg-gray-200 rounded-lg p-4">
        <WorkoutHistory workoutHistory={workoutHistory} />
      </div>
    </div>
  );
};

export default AppointmentPage;
