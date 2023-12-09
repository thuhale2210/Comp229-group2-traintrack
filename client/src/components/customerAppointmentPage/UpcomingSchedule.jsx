import React from 'react';
import { CancelButton } from '../components'

const UpcomingSchedule = ({ upcomingAppointments }) => {
  return (
    <div className="mb-5 text-base p-5">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-4 px-2 text-center">Date</th>
            <th className="py-4 px-2 text-center">Time</th>
            <th className="py-4 px-2 text-center">Focus Area</th>
            <th className="py-4 px-2 text-center">Trainer</th>
            <th className="py-4 px-2 text-center">Duration</th>
            <th className="py-4 px-2 text-center">Special Request</th>
          </tr>
        </thead>
        <tbody>
          {upcomingAppointments.map((appointment, index) => (
            <tr key={index} className="border-b">
              <td className="py-4 px-2">{appointment.date}</td>
              <td className="py-4 px-2">{`${appointment.time} `}</td>
              <td className="py-4 px-2">{appointment.focusArea}</td>
              <td className="py-4 px-2">{appointment.trainer}</td>
              <td className="py-4 px-2">{`${appointment.duration} hour${appointment.duration > 1 ? 's' : ''}`}</td>
              <td className="py-4 px-2">{appointment.specialRequest}</td>
              <td className="py-4"><CancelButton>Cancel</CancelButton></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingSchedule;
