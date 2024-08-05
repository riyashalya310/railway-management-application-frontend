import React, { useState, useEffect } from 'react';
import api from '../api';

const UserPage = ({ token }) => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await api.get('bookings/', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, [token]);

    return (
        <div className="container">
            <h2>Your Bookings</h2>
            {bookings.length > 0 ? (
                <ul>
                    {bookings.map(booking => (
                        <li key={booking.id}>
                            Train: {booking.train_name}, Seat: {booking.seat_number}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No bookings found.</p>
            )}
        </div>
    );
};

export default UserPage;
