import React from 'react';
import "./intro.scss"

export default function Intro() {
  return (
  <div className="intro" id="intro"> 
  <div className="left">
    <div className="imgContainer">
      <img src="assets/lebron_lal_trans.png" alt="" />
    </div>
  </div>
  <div className="right">
    <div className="wrapper">
      <h2>Hello! I'm</h2>
      <h1>Nabil Khan!</h1>
      <h3>Full Stack Software Engineer | Leader | Introvert<span></span></h3>
    </div>
    <a href="#portfolio">
      <img src="assets/downarrow.jpg" alt="" />
    </a>
  </div>
  </div>
  )
}
