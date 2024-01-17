import React, { useState } from 'react';
import '../../styles/attendanceviewer.css';
const Calendar = ({subject}) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return new Date(year, month, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const prevMonth = () => {
    setCurrentDate((prevDate) => {
      const prevMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
      return prevMonthDate;
    });
  };

  const nextMonth = () => {
    setCurrentDate((prevDate) => {
      const nextMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1);
      return nextMonthDate;
    });
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const blanks = Array.from({ length: firstDay }, (_, index) => <div key={`blank-${index}`} className="calendar-day empty"></div>);
    const days = Array.from({ length: daysInMonth }, (_, index) => (
      <div key={`day-${index}`} className="calendar-day">{index + 1}</div>
    ));

    return [...blanks, ...days];
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={prevMonth}>Previous</button>
        <h2>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={nextMonth}>Next</button>
      </div>
      <div className="calendar-grid">
        {renderCalendar()}
      </div>
      {/* Space for 5 lines of text */}
      <div className="text-space">
        {subject}
      </div>
    </div>
  );
};

export default Calendar;
