import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='bg-blue-200 md:bg-white relative'>
            <div onClick={() => setOpen(!open)} className=' md:hidden ml-auto'>
                { open ? <FontAwesomeIcon icon={faClose}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>}
            </div>
            <div className={` bg-blue-200 md:bg-white flex flex-col md:flex-row md:justify-center md:static absolute ${open ? 'top-10':'top-[-250px]'}`}>
            <NavLink to='/home' className={({ isActive }) => isActive ? 'active-link' : 'link'}>Home</NavLink>
            <NavLink to='/reviews' className={({ isActive }) => isActive ? 'active-link' : 'link'}>Reviews</NavLink>
            <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'active-link' : 'link'}>Dashboard</NavLink>
            <NavLink to='/blogs' className={({ isActive }) => isActive ? 'active-link' : 'link'}>Blogs</NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'active-link' : 'link'}>About</NavLink>
            </div>
        </nav>
    );
};

export default Header;