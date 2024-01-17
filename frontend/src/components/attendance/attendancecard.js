import React , { useState } from 'react';
import '../../styles/attendancecard.css';
import Calendar from './calendar';
 // Import your Calendar component

export default function Attendancecard() {
 
  const [showDetails, setShowDetails] = useState(false);
  const [clickedSubject, setclickecSubject] = useState('');

  const handleCardClick = (SubjectName) => {
    setShowDetails(true);
    setclickecSubject(SubjectName);
  };

  const handleCloseClick = (e) => {
    e.stopPropagation(); // Prevent the click from propagating to parent elements
    setShowDetails(false);
  };
  return (
    <div className='cardholder'>    
      <section className='attendancecard' onClick={() => handleCardClick('Operating Systems')}>
        <div className='content'>
          <p className='SubjectName'>Operating Systems</p>
          <div className='progress'>
            <p style={{ margin: 0 + '%' }}>33%</p>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: 33 + '%' }}></div>
            </div>
          </div>
          <p className='Reminder'>You need to attend 7 Lectures</p>
        </div>
      </section>
      <section className='attendancecard' onClick={()=>handleCardClick('Design and Analysis of Algorithms')}>
        <div className='content'>
          <p className='SubjectName'>Design and Analyisis of Algorithms</p>
          <div className='progress'>
            <p style={{ margin: 0 + '%' }}>88%</p>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: 88 + '%' }}></div>
            </div>
          </div>
          <p className='Reminder'>You can skip 3 Lectures</p>
        </div>
      </section>
      {showDetails && (
        <div className='dashboard-overlay' >
          <div className='dashboard-modal'>
            {/* Close button */}
            <button className='close-button' onClick={handleCloseClick}>
              Close
            </button>
            <div id='sub_name'>{clickedSubject}</div>
            <p></p>
            <Calendar subject={clickedSubject}/>
            
          </div>
        </div>
      )}
    
    </div>
  );
}
