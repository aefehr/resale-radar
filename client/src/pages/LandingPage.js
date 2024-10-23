import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing">
            <h1>Resale Radar</h1>
            <h3>An e-commerce guide for second-hand fashion buyers and sellers</h3>
            <h2>I'm a...</h2>
            <div className='button-container'> 
                <Link to="/buyer">
                    <button>Buyer</button>
                </Link>
                <Link to="/seller">
                    <button>Seller</button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;