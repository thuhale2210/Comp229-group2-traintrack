import React from 'react';

const UpcomingSchedule = ({ upcomingAppointments }) => {
  return (
    <div className="mb-4 text-base">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-5 px-4 text-center">Date</th>
            <th className="py-5 px-4 text-center">Time</th>
            <th className="py-5 px-4 text-center">Focus Area</th>
            <th className="py-5 px-4 text-center">Trainer</th>
            <th className="py-5 px-4 text-center">Duration</th>
            <th className="py-5 px-4 text-center">Special Request</th>
          </tr>
        </thead>
        <tbody>
          {upcomingAppointments.map((appointment, index) => (
            <tr key={index} className="border-b">
              <td className="py-5 px-4">{appointment.date}</td>
              <td className="py-5 px-4">{`${appointment.time} `}</td>
              <td className="py-5 px-4">{appointment.focusArea}</td>
              <td className="py-5 px-4">{appointment.trainer}</td>
              <td className="py-5 px-4">{`${appointment.duration} hour${appointment.duration > 1 ? 's' : ''}`}</td>
              <td className="py-5 px-4">{appointment.specialRequest}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingSchedule;
