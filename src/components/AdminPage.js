import React, { useState } from 'react';
import api from '../api';

const AdminPage = ({ token }) => {
    const [trainName, setTrainName] = useState('');
    const [totalSeats, setTotalSeats] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('trains/', { name: trainName, total_seats: totalSeats }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'x-api-key': process.env.REACT_APP_ADMIN_API_KEY,
                },
            });
            setMessage('Train added successfully!');
        } catch (error) {
            console.error('Error adding train:', error);
            setMessage('Failed to add train.');
        }
    };

    return (
        <div className="container">
            <h2>Admin Page</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={trainName} onChange={(e) => setTrainName(e.target.value)} placeholder="Train Name" />
                <input type="number" value={totalSeats} onChange={(e) => setTotalSeats(e.target.value)} placeholder="Total Seats" />
                <button type="submit">Add Train</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AdminPage;
