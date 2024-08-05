import React, { useState } from 'react';
import api from '../api';

const Login = ({ setToken, setRole }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('token/', { username, password });
            const token = response.data.access;
            localStorage.setItem('token', token);
            setToken(token);

            const userResponse = await api.get('user/', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            const role = userResponse.data.role;
            localStorage.setItem('role', role);
            setRole(role);
        } catch (error) {
            console.error('Error during login:', error);
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Login</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default Login;
