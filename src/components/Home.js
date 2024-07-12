import React from 'react';
import { Link } from 'react-router-dom';
import { getCurrentUser } from '../services/loginServices';

const Home = () => {
    const currentUser = getCurrentUser();

    return (
        <div>
            <h1>Welcome to KidsEduLearn</h1>
            {currentUser ? (
                <div>
                    <h2>Welcome, {currentUser.email}</h2>
                    <nav>
                        <ul>
                            <li><Link to="/english">Learn English</Link></li>
                            <li><Link to="/maths">Learn Maths</Link></li>
                            <li><Link to="/science">Learn Science</Link></li>
                            <li><Link to="/parent">Parent Section</Link></li>
                        </ul>
                    </nav>
                </div>
            ) : (
                <div>
                    <p>Please <Link to="/auth">Login or Sign Up</Link> to access the content.</p>
                </div>
            )}
        </div>
    );
};

export default Home;
