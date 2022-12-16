import React from 'react'
import './Sidebar.css'
import {useContext} from 'react'
import {SidebarContext} from './../../sidebarContext'
import {NavLink} from 'react-router-dom'

function Sidebar() {
    const sidebar = useContext(SidebarContext)
  return (
    <div className='sidebar-container'>
        <ul className='sidebar'>
            <li><NavLink to='/list-all'>List All</NavLink></li>
            <li><NavLink to='/in-stock'>In Stock</NavLink></li>
            <li><NavLink to='/checked-out'>Checked Out</NavLink></li>
            <li><NavLink to='/low-stock'>Low in Stock</NavLink></li>
            <li><NavLink to='/all-invoices'>Invoices</NavLink></li>
            <li><NavLink to='/all-orders'>Purchase Orders</NavLink></li>
            <li><NavLink to='/all-requests'>Purchase requests</NavLink></li>
            <li><NavLink to='/reports'>Reports</NavLink></li>
            <li><NavLink to='/settings'>Settings</NavLink></li>
        </ul>
    </div>
  )
}

export default Sidebar