import React from 'react';
import "./navbar.scss"
import Person from '@material-ui/icons/Person';
import Mail from '@material-ui/icons/Mail';

export default function Navbar() {
  return (
  <div className="navbar active" id="navbar">
      <div className="wrapper">
        <div className="left">
            <a href="#intro" className="logo">nabil.</a>
            <div className="itemContainer">
            <Person className="icon"/>
            <span>516.304.012</span>
            </div>
            <div className="itemContainer">
            <Mail className="icon"/>
            <span>khan.nabiln11@gmail.com</span>
            </div>
        </div>
            
        
        <div className="right">
        <div className="navMenu">
          <span className="lineOne"></span>
          <span className="lineTwo"></span>
          <span className="lineThree"></span>
        </div>
        </div>



      </div>

  </div>
  )
}