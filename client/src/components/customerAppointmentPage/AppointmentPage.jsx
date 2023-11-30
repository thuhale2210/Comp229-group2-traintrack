import React from 'react';
import UpcomingSchedule from './UpcomingSchedule'; // Make sure to use the correct path
import WorkoutHistory from './WorkoutHistory'; // Make sure to use the correct path

const AppointmentPage = () => {
  // Mock data for testing
  const upcomingAppointments = [
    {
      date: '2023-12-01',
      time: '10:00 AM',
      focusArea: 'Cardio',
      trainer: 'John Doe',
      duration: 60,
      specialRequest: 'Bring water bottle',
    },
    // Add more upcoming appointments as needed
  ];

  const workoutHistory = [
    {
      date: '2023-11-15',
      time: '02:00 PM',
      focusArea: 'Strength Training',
      trainer: 'Jane Smith',
      duration: 45,
      specialRequest: 'None',
    },
    // Add more workout history entries as needed
  ];

  return (
    <div className="flex justify-center mt-8">
      <div className="mr-8">
        <UpcomingSchedule upcomingAppointments={upcomingAppointments} />
      </div>
      <div>
        <WorkoutHistory workoutHistory={workoutHistory} />
      </div>
    </div>
  );
};

export default AppointmentPage;
