import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <NavLink to='/home' className={({ isActive }) => isActive ? 'active-link' : 'link'}>Home</NavLink>
            <NavLink to='/reviews' className={({ isActive }) => isActive ? 'active-link' : 'link'}>Reviews</NavLink>
            <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'active-link' : 'link'}>Dashboard</NavLink>
            <NavLink to='/blogs' className={({ isActive }) => isActive ? 'active-link' : 'link'}>Blogs</NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'active-link' : 'link'}>About</NavLink>
        </nav>
    );
};

export default Header;