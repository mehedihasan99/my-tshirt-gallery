import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='navBar'>
                <Link to='/home'>Home</Link>
                <Link to='/orderReview'>Order Review</Link>
                <Link to='/grandPa'>GrandPa</Link>
            </nav>
        </div>
    );
};

export default Header;