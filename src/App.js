import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';

import Form2 from './pages/form2';
import Nav from './compo/nav';
import Home from './pages/home';
import Form1 from './pages/form1';

function App() {
  

  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route path="/form2" element={<Form2 />} />
          <Route path="/" element={<Home />} />
          <Route path='/form1' element={<Form1/>}/>       
        </Routes>
      </Router>
    </div>
  );

}

export default App;