import React from 'react';
import '../../styles/scheduleview.css';

export default function ScheduleViewer() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const times = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

  return (
    <div className="schedule">
      <div className="schedule-row">
        <div className="schedule-cell empty"></div>
        {times.map((time, index) => (
          <div key={index} className="schedule-cell time">{time}</div>
        ))}
      </div>
      {days.map((day, index) => (
        <div key={index} className="schedule-row">
          <div className="schedule-cell day-name">{day}</div>
          {times.map((time, tIndex) => (
            <div key={tIndex} className="schedule-cell" id='content'>{/* Your content for each cell goes here */}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
