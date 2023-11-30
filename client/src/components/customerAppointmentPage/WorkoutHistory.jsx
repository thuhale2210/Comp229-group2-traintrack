import React from 'react';

const WorkoutHistory = ({ workoutHistory }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Workout History</h2>
    {workoutHistory.map((workout, index) => (
      <div key={index} className="mb-4">
        <p>Date: {workout.date}</p>
        <p>Time: {workout.time}</p>
        <p>Focus Area: {workout.focusArea}</p>
        <p>Trainer: {workout.trainer}</p>
        <p>Duration: {workout.duration}</p>
        <p>Special Request: {workout.specialRequest}</p>
        <hr className="my-2" />
      </div>
    ))}
  </div>
);

export default WorkoutHistory;
