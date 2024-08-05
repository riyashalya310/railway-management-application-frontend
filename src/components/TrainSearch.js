import React, { useState } from 'react';
import api from '../api';

const TrainSearch = () => {
    const [fromStation, setFromStation] = useState('');
    const [toStation, setToStation] = useState('');
    const [trains, setTrains] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.get(`trains/?from_station=${fromStation}&to_station=${toStation}`);
            setTrains(response.data);
        } catch (error) {
            console.error('Error fetching trains:', error);
        }
    };

    return (
        <div className="container">
            <h2>Search Trains</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={fromStation} onChange={(e) => setFromStation(e.target.value)} placeholder="From Station" />
                <input type="text" value={toStation} onChange={(e) => setToStation(e.target.value)} placeholder="To Station" />
                <button type="submit">Search</button>
            </form>
            {trains.length > 0 && (
                <ul>
                    {trains.map(train => (
                        <li key={train.id}>
                            {train.name} - Seats Available: {train.available_seats}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TrainSearch;
