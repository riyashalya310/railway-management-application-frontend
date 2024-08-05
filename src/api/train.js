import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const addTrain = async (apiKey, train) => {
    return await axios.post(`${API_URL}add_train/`, train, {
        headers: { 'Api-Key': apiKey }
    });
};

export const getSeatAvailability = async (token, trainId) => {
    return await axios.get(`${API_URL}trains/${trainId}/seats/`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export const bookSeat = async (token, booking) => {
    return await axios.post(`${API_URL}book_seat/`, booking, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export const getBookingDetails = async (token, bookingId) => {
    return await axios.get(`${API_URL}booking/${bookingId}/`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};
