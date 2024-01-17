import React, { useState } from 'react'
import Dashboard from './pages/dashboard';
import Form from './components/auth/form';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
//import { Router, Route } from 'react-router-dom';

function App() {
  const [user, setUser] =useState(null);
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path ="/"  element={<Form setUser={setUser}/>}/>
      <Route path= "/pages/dashboard" element={<Dashboard user={user}/>} />
    </Routes>
    
    </BrowserRouter>

  );
}

export default App;
