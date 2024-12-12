import React from 'react';

function Room({ room }) {
  return (
    <li>
      <h3>{room.name}</h3>
      <p>Price: ${room.price}</p>
      <p>Status: {room.isAvailable ? 'Available' : 'Booked'}</p>
    </li>
  );
}

export default Room; 