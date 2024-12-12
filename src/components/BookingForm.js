import React, { useState } from 'react';

function BookingForm({ onBook }) {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onBook({ name, room });
    setName('');
    setRoom('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a Room</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Room Name"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        required
      />
      <button type="submit">Book</button>
    </form>
  );
}

export default BookingForm;     