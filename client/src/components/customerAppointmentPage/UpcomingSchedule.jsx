import React from 'react';

const UpcomingSchedule = ({ upcomingAppointments }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Upcoming Schedule</h2>
    <div className="table-container">
      <div className="table-row header">
        <div>Date</div>
        <div>Time</div>
        <div>Focus Area</div>
        <div>Trainer</div>
        <div>Duration</div>
        <div>Special Request</div>
      </div>
      {upcomingAppointments.map((appointment, index) => (
        <div key={index} className="table-row">
          <div>{appointment.date}</div>
          <div>{appointment.time}</div>
          <div>{appointment.focusArea}</div>
          <div>{appointment.trainer}</div>
          <div>{appointment.duration}</div>
          <div>{appointment.specialRequest}</div>
        </div>
      ))}
    </div>
  </div>
);

export default UpcomingSchedule;
