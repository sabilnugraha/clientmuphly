import React, { useState } from 'react';
import '../../App.css'

function NavbarGeneral() {
    const [expanded, setExpanded] = useState(false);
  return (
    <div className="side-navbar">
      <div
        className="expand-button"
        onClick={() => setExpanded(!expanded)}
      >
        <i className="fas fa-bars"></i>
      </div>
      <div
        className={`menu${expanded ? ' expanded' : ''}`}
      >
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
}

export default NavbarGeneral
