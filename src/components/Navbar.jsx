import { NavLink } from "react-router-dom";
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav>    
        <NavLink to="/page2">page2</NavLink>  {" | "}
                <NavLink to="/page3">page3</NavLink>
      </nav>
    </div>
  )
}

export default Navbar

