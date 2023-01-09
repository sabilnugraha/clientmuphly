import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap';
import { API } from './config/api';
import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'bootstrap';
import { Route, Routes, Link } from "react-router-dom";
import LandingPages from './pages/service/Service';
import Client from './pages/client/Client';

function App() {
  return(
    <div className="App">
    <Routes>
      
      <Route path="/portal" element={<LandingPages />} />
      <Route path="/student" element={<Client />} />
      
    
    </Routes>

    </div>
  )
  
}

export default App;
