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
import Student from './pages/landingpages/LandingPages';
import StudentService from './pages/student/Student';
import AddStudent from './pages/student/AddStudent.js';
import Form from './pages/student/testpage';


function App() {
  return(
    <div className="App">
    <Routes>
      
      <Route path="/portal" element={<LandingPages />} />
      <Route path="/student" element={<Student />} />
      <Route path="/student/:id" element={<StudentService />} />
      <Route path="/addstudents" element={<AddStudent />} />
      <Route path="/test" element={<Form />} />
    
    </Routes>

    </div>
  )
  
}

export default App;
