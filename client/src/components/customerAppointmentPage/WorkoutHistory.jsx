import React from 'react';

const WorkoutHistory = ({ workoutHistory }) => {
  return (
    <div className="mb-4 text-base p-5">
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
          {workoutHistory.map((workout, index) => (
            <tr key={index} className="border-b">
              <td className="py-4 px-2">{workout.date}</td>
              <td className="py-4 px-2">{`${workout.time} `}</td>
              <td className="py-4 px-2">{workout.focusArea}</td>
              <td className="py-4 px-2">{workout.trainer}</td>
              <td className="py-4 px-2">{`${workout.duration} minute${workout.duration > 1 ? 's' : ''}`}</td>
              <td className="py-4 px-2">{workout.specialRequest}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkoutHistory;
