import React, { useState } from 'react';
import { registerUser, loginUser, getCurrentUser, logoutUser } from '../services/loginServices';
import './login.css';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [currentUser, setCurrentUser] = useState(getCurrentUser());

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        try {
            if (isLogin) {
                loginUser(email, password);
                setCurrentUser(getCurrentUser());
                alert('Login successful!');
                // Redirect to parent dashboard or another page
            } else {
                if (password !== confirmPassword) {
                    throw new Error('Passwords do not match');
                }
                registerUser(email, password);
                alert('Sign up successful! Please log in.');
                setIsLogin(true);
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const handleLogout = () => {
        logoutUser();
        setCurrentUser(null);
    };

    if (currentUser) {
        return (
            <div className="auth-container">
                <h2>Welcome, {currentUser.email}</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    }

    return (
        <div className="auth-container">
            <h2>{isLogin ? 'Parent Login' : 'Parent Sign Up'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {!isLogin && (
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                )}
                {error && <p className="error">{error}</p>}
                <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
                <p>
                    {isLogin ? 'New user?' : 'Already have an account?'}{' '}
                    <button type="button" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Sign Up' : 'Login'}
                    </button>
                </p>
            </form>
        </div>
    );
};

export default Login;
