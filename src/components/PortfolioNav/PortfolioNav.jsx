import React from 'react';
import './portfolionav.scss'

export default function PortfolioNav({id, title, active, setSelected}) {
  return (
  
  <li className={active ? "portfolioNav active" : "portfolioNav"}
   onClick={() => setSelected(id)}
   >
      {title}
  </li>
  )
}

