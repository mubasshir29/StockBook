import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar-container'>
        <div className='navbar'>
            <div className='nav-left'>
                <NavLink to='/'><span className='logo'>StockBook</span></NavLink>
            </div>
            <div className='nav-right'>
                <NavLink to='/new-item'><button className='nav-right-btn add-new'>Add Stock</button></NavLink>
                <button className='nav-right-btn'>Alerts</button>
                <button className='nav-right-btn'>Settings</button>
                <button className='nav-right-btn'>Profile</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar