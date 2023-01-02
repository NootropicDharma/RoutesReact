import React from 'react'
import {Link, NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <ul>

            <NavLink to="/" className={({isActive})=> isActive? "selected": ""}>
                Home
            </NavLink>

            <hr/>

            <NavLink to="/about" className={({isActive})=> isActive? "selected": ""}>
                About
            </NavLink>

            <hr/>

            <NavLink to="/users" className={({isActive})=> isActive? "selected": ""}>
                Users
            </NavLink>

            <hr/>

        </ul>
    </nav>
  )
}

export default Navbar