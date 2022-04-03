import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <NavLink to='/home' className={({ isActive }) => isActive ? 'text-green-500' :   'text-black'}>Home</NavLink>
            <NavLink to='/reviews' className={({ isActive }) => isActive ? 'text-green-500' :   'text-black'}>Reviews</NavLink>
            <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'text-green-500' :   'text-black'}>Dashboard</NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'text-green-500' :   'text-black'}>About</NavLink>
        </nav>
    );
};

export default Header;