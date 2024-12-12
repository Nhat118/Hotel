import React, { useState } from 'react';
import RoomList from '../components/RoomList';

function Rooms() {
  const [rooms] = useState([
    { id: 1, name: 'Deluxe Room', price: 100, isAvailable: true },
    { id: 2, name: 'Suite', price: 200, isAvailable: true },
    { id: 3, name: 'Family Room', price: 150, isAvailable: true },
    { id: 4, name: 'Presidential Suite', price: 500, isAvailable: true },
  ]);

  return (
    <div className="rooms-page">
      <h2>Our Rooms</h2>
      <RoomList rooms={rooms} />
    </div>
  );
}

export default Rooms; 