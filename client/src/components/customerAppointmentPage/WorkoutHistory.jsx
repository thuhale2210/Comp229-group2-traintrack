import React from 'react';

const WorkoutHistory = ({ workoutHistory }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Workout History</h2>
    <div className="table-container">
      <div className="table-row header">
        <div>Date</div>
        <div>Time</div>
        <div>Focus Area</div>
        <div>Trainer</div>
        <div>Duration</div>
        <div>Special Request</div>
      </div>
      {workoutHistory.map((workout, index) => (
        <div key={index} className="table-row">
          <div>{workout.date}</div>
          <div>{workout.time}</div>
          <div>{workout.focusArea}</div>
          <div>{workout.trainer}</div>
          <div>{workout.duration}</div>
          <div>{workout.specialRequest}</div>
        </div>
      ))}
    </div>
  </div>
);

export default WorkoutHistory;
