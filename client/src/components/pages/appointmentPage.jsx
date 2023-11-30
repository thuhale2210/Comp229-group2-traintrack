// pages/AppointmentPage.js
import React from 'react';
import NavBar from '../customerNavBar';
import UpcomingSchedule from '../customerAppointmentPage/UpcomingSchedule';
import WorkoutHistory from '../customerAppointmentPage/WorkoutHistory';

const upcomingAppointments = [
  {
    date: '2023-12-01',
    time: '10:00 AM',
    focusArea: 'Upper Body',
    trainer: 'John Doe',
    duration: '1 hour',
    specialRequest: 'Bring water bottle',
  },
  // Add more appointment data as needed
];

const workoutHistory = [
  {
    date: '2023-11-15',
    time: '2:00 PM',
    focusArea: 'Lower Body',
    trainer: 'Jane Smith',
    duration: '45 minutes',
    specialRequest: 'N/A',
  },
  // Add more workout history data as needed
];

const AppointmentPage = () => (
  <div>
    <NavBar />
    <div className="flex justify-center mt-16">
      <UpcomingSchedule upcomingAppointments={upcomingAppointments} />
      <WorkoutHistory workoutHistory={workoutHistory} />
    </div>
  </div>
);

export default AppointmentPage;
