import React from 'react';
import "./portfolio.scss"
import PortfolioNav from '../PortfolioNav/PortfolioNav'
import { useState } from 'react';

export default function Portfolio() {

  //active state for portfolioNav
  const [selected, setSelected] = useState("featured")
// portfolio nav list items array
const list = [
  {
      id: "featured",
      title: "Featured",
  },
  {
      id: "web",
      title: "Web App",
  },
  {
      id: "fullstack",
      title: "Full Stack",
  },
  {
      id: "design",
      title: "Design",
  },
  {
      id: "branding",
      title: "Branding",
  },
  
];

  return (
  <div className="portfolio" id="portfolio">
    <h1>Portfolio</h1>
    <ul>
      {list.map(item => {
       return <PortfolioNav title={item.title} 
       active={selected === item.id}
       setSelected={setSelected}
       id={item.id}
       />
      })}
    </ul>
    <div className="container">
      <div className="item">
        <img src="assets/LFG_Screenshot.png" alt="" />
        <h3>CRUD Rest App</h3>
      </div>
      <div className="item">
        <img src="assets/LFG_Screenshot.png" alt="" />
        <h3>CRUD Rest App</h3>
      </div>
      <div className="item">
        <img src="assets/LFG_Screenshot.png" alt="" />
        <h3>CRUD Rest App</h3>
      </div>
      <div className="item">
        <img src="assets/LFG_Screenshot.png" alt="" />
        <h3>CRUD Rest App</h3>
      </div>
      <div className="item">
        <img src="assets/LFG_Screenshot.png" alt="" />
        <h3>CRUD Rest App</h3>
      </div>
      <div className="item">
        <img src="assets/LFG_Screenshot.png" alt="" />
        <h3>CRUD Rest App</h3>
      </div>
    </div>
    

  </div>
  )
}