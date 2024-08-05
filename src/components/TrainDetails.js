import React, { useState, useEffect } from "react";
import axios from "axios";

const TrainDetails = ({ token, train }) => {
  const [seats, setSeats] = useState(0);

  const fetchSeats = async () => {
    const response = await axios.get(
      `https://railway-management-application-backend.onrender.com/api/trains/${train.id}/seats/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setSeats(response.data.available_seats);
  };

  useEffect(() => {
    fetchSeats();
  }, [train.id]);

  return (
    <div>
      <h2>{train.train_number}</h2>
      <p>Origin: {train.origin}</p>
      <p>Destination: {train.destination}</p>
      <p>Seats Available: {seats}</p>
    </div>
  );
};

export default TrainDetails;
