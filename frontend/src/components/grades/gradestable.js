import React from 'react'
import '../../styles/gradestable.css';
export default function Gradestable() {
    const subjects = ['NMPT', 'DAA', 'OS', 'SE-GT', 'ITW-2'];
  const marksTypes = ['Sessional-1', 'Sessional-2', 'End Sem', 'Labs', 'Final Grade'];

  return (

    <div>
        <p id='quote'>"Some Random funny quote about grades"</p>
        <div className="grades">
      <div className="grades-row">
        <div className="grades-cell empty"></div>
        {marksTypes.map((type, index) => (
          <div key={index} className="grades-cell mark-type">{type}</div>
        ))}
      </div>
      {subjects.map((subject, index) => (
        <div key={index} className="grades-row">
          <div className="grades-cell subject-name">{subject}</div>
          {marksTypes.map((type, tIndex) => (
            <div key={tIndex} className="grades-cell" id='marks'>{/* Your content for each cell goes here */}</div>
          ))}
        </div>
      ))}
    </div>
    </div>
  )
}
