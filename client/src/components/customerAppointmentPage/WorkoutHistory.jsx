// WorkoutHistory.js
import React from 'react';

const WorkoutHistory = ({ workoutHistory }) => {
  return (
    <div className="mb-4"> {/* Apply Tailwind classes for spacing */}
      <h2 className="text-lg font-semibold mb-2">Workout History</h2> {/* Apply Tailwind classes for styling */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-4 text-center">Date</th>
            <th className="py-2 px-4 text-center">Time</th>
            <th className="py-2 px-4 text-center">Focus Area</th>
            <th className="py-2 px-4 text-center">Trainer</th>
            <th className="py-2 px-4 text-center">Duration</th>
            <th className="py-2 px-4 text-center">Special Request</th>
          </tr>
        </thead>
        <tbody>
          {workoutHistory.map((workout, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4">{workout.date}</td>
              <td className="py-2 px-4">{`${workout.time} `}</td>
              <td className="py-2 px-4">{workout.focusArea}</td>
              <td className="py-2 px-4">{workout.trainer}</td>
              <td className="py-2 px-4">{`${workout.duration} minute${workout.duration > 1 ? 's' : ''}`}</td>
              <td className="py-2 px-4">{workout.specialRequest}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkoutHistory;
