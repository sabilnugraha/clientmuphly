import { useState } from 'react';
import '../../App.css'
import Home from '../../assets/home.png'
import Desk from '../../assets/desk.png'
import Permit from '../../assets/permit.png'
import Task from '../../assets/task.png'
import Archive from '../../assets/archive.png'
import Profile from '../../assets/profile.png'
import { Bar } from 'react-chartjs-2';

function Navbar() {
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => {
        setExpanded(!expanded);
      }
      const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };
  return (
    <div className='navbar mt-5'>
    <div className='menu'>
    <div className='mt-3' onClick={toggleExpanded}>
    <div className='homeMenu '>
        <img src={Home} className='menuIcon'/>
        
    </div>
    <div className='textMenu'>Home</div>
    </div>

    <div className='mt-3'>
    <div className='homeMenu mt-3'>
        <img src={Desk} className='menuIcon'/>
    </div>
    <div className='textMenu'>Job Desk</div>
    </div>

    <div className='mt-3'>
    <div className='homeMenu mt-3'>
        <img src={Permit} className={`${expanded ? 'menuIconActive' : 'menuIcon'}`}/>
    </div>
    <div className='textMenu'>Request</div>
    </div>
    
    <div className='mt-3'>
    <div className='homeMenu mt-3'>
        <img src={Task} className='menuIcon'/>
    </div>
    <div className='textMenu'>To Do</div>
    </div>

    <div onClick={toggleExpanded} className={`${expanded ? 'active mt-3' : 'nonActive mt-3'}`}>
    <div className='homeMenu mt-3'>
        <img src={Archive} className='menuIcon'/>
    </div>
    <div className='textMenu'>Archive</div>
    </div>

    <div className={`${expanded ? 'active mt-3' : 'nonActive mt-3'}`}>
    <div className='homeMenu mt-3'>
        <img src={Profile} className='menuIcon'/>
    </div>
    <div className='textMenu'>Profile</div>
    </div>
    </div>

    
    
    </div>
   
  );
}

export default Navbar
