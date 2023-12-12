import React from 'react';
import axios from 'axios';

const UpcomingSchedule = ({ upcomingAppointments, setUpcomingAppointments }) => {

  async function cancelAppointment(customerId, appointmentId) {
    try {
      const response = await axios.delete(`http://localhost:4000/customer/${customerId}/cancel/${appointmentId}`);
      
      if (response.status === 200) {
        console.log('Appointment canceled successfully');
        // Handle success (e.g., update UI or fetch updated data)
      } else {
        console.error('Failed to cancel appointment');
        // Handle error scenarios
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  }
  
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
              <td className="py-4 px-2">{`${appointment.duration} Minute${appointment.duration > 1 ? 's' : ''}`}</td>
              <td className="py-4 px-2">{appointment.specialRequest}</td>
              <td className="py-4">
                <button
                  className="rounded-full border-2 border-orange-500 text-orange-500 font-bold text-xs uppercase px-5 py-2 
                  transition duration-300 ease-in hover:bg-orange-500 hover:text-white transform hover:scale-105 focus:outline-none"
                  //onClick={() => cancelAppointment(sessionStorage.getItem('userId'), appointment.id)}
                  onClick={() => {
                    console.log('it is working');
                    cancelAppointment(sessionStorage.getItem('userId'), appointment.id);
                    setUpcomingAppointments();
                  }}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingSchedule;
