import React from 'react'
import '../../styles/schedule.css'
import ScheduleViewer from './scheduleviewer';
export default function Scheduletable() {
  const Branch_name='HCI-GT';
  const Sem='3rd';
  return (
    <div>
      <h2 id='overview'>{Branch_name}</h2>
      <h4 id='sem'>{Sem} Semester</h4>
      <hr id='line'></hr>
      <div className='Week'>
        <ScheduleViewer/>
      </div>

    </div>
  )
}
