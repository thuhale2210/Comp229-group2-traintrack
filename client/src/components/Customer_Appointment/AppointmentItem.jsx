// components/AppointmentItem.js
import React from 'react';

const AppointmentItem = ({ date, time, focusArea, trainer, duration, specialRequest }) => (
  <div className="border p-4 my-4">
    <div>Date: {date}</div>
    <div>Time: {time}</div>
    <div>Focus Area: {focusArea}</div>
    <div>Trainer: {trainer}</div>
    <div>Duration: {duration}</div>
    <div>Special Request: {specialRequest || 'N/A'}</div>
  </div>
);

export default AppointmentItem;
