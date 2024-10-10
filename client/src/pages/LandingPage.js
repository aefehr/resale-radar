import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="landing">
            <h1>I'm a...</h1>
            <Link to="/buyer">
                <button>Buyer</button>
            </Link>
            <Link to="/seller">
                <button>Seller</button>
            </Link>
        </div>
    );
};

export default LandingPage;