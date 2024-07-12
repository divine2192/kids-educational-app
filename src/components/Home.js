import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to KidsEduLearn</h1>
            <nav>
                <ul>
                    <li><Link to="/english">Learn English</Link></li>
                    <li><Link to="/maths">Learn Maths</Link></li>
                    <li><Link to="/science">Learn Science</Link></li>
                    <li><Link to="/parent">Parent Section</Link></li>
                    <li><Link to="/login">Parent Login</Link></li> {/* Add this line */}
                </ul>
            </nav>
        </div>
    );
};

export default Home;