import React from 'react';

const UpcomingSchedule = ({ upcomingAppointments }) => (
  <div className="mr-8">
    <h2 className="text-2xl font-bold mb-4">Upcoming Schedule</h2>
    {upcomingAppointments.map((appointment, index) => (
      <div key={index} className="mb-4">
        <p>Date: {appointment.date}</p>
        <p>Time: {appointment.time}</p>
        <p>Focus Area: {appointment.focusArea}</p>
        <p>Trainer: {appointment.trainer}</p>
        <p>Duration: {appointment.duration}</p>
        <p>Special Request: {appointment.specialRequest}</p>
        <hr className="my-2" />
      </div>
    ))}
  </div>
);

export default UpcomingSchedule;
