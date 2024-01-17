import React from 'react'
import Attendancecard from '../components/attendance/attendancecard'
import Hero from '../components/hero/hero'
import CircularImage from '../components/circularimage'
import '../styles/dashboard.css'
import Scheduletable from '../components/schedule/scheduletable'
import Gradestable from '../components/grades/gradestable'
import Navbar from '../components/navbar'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
export default function Dashboard() {

 const navigate = useNavigate();
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          // User is signed in, do nothing or perform necessary actions
        } else {
          // User is not signed in, navigate to the default app page
          navigate('/');
        }
      });
  
      // Clean up the listener when the component unmounts
      return () => unsubscribe();
    }, [navigate]);

  return (
  <div>
    <Navbar />
    <Hero />
    <CircularImage />
    <section className='sec'>
         <h1 className='Heading'>ATTENDANCE TRACKER</h1>
         <p className='quote'>"Complete your Goals not your Attendance"</p>
         <h6 className='by'>-said no facculty ever</h6>
         <div className='attendance-sec'>
          <div className='att-in'>
            <h2 id='overview'>OVERVIEW</h2>
             <hr id='line'></hr>
            <div className='view'>
             <Attendancecard/>
            </div>
            </div>
            
         </div>
    </section>
    <section className='sec'>
          <h1 className='Heading'>SCHEDULE</h1>
          
          <div className='attendance-sec'>
             <div className='att-in'>
                 <Scheduletable />
              </div>          
          </div>
    </section>
    <section className='sec'>
          <h1>GRADES TABLE</h1>
          <div className='attendance-sec'>
             <div className='att-in'>
                 <Gradestable />
              </div>          
          </div>
    </section>
    
  </div>
  )
}
