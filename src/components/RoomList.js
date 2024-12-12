import React from 'react';
import Room from './Room';

function RoomList({ rooms }) {
  return (
    <div>
      <h2>Available Rooms</h2>
      <ul>
        {rooms.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </ul>
    </div>
  );
}

export default RoomList; 