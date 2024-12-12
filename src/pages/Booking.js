import React from 'react';
import BookingForm from '../components/BookingForm';

function Booking() {
  const handleBooking = (bookingData) => {
    console.log('Booking submitted:', bookingData);
    // Handle booking submission
  };

  return (
    <div className="booking-page">
      <h2>Book a Room</h2>
      <BookingForm onBook={handleBooking} />
    </div>
  );
}

export default Booking; 