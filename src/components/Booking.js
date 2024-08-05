import React from "react";
import axios from "axios";

const Booking = ({ token, train }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `https://railway-management-application-backend.onrender.com/api/trains/${train.id}/book/`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Book Seat</button>
    </form>
  );
};

export default Booking;
