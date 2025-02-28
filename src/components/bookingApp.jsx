import React, { useState } from "react";
import toast from "react-hot-toast";
import SeatGrid from "./seatGrid";
import BookingDetails from "./bookingDetails";

export default function BookingApp() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatId, price) => {
    if (selectedSeats.some((seat) => seat.id === seatId)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat.id !== seatId));
    } else {
      if (selectedSeats.length < 8) {
        setSelectedSeats([...selectedSeats, { id: seatId, price }]);
      } else {
        toast.error("You can only select up to 8 seats.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 bg-gray-900 text-white">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
        🎟 Seat Booking System
      </h1>
      <h2 className="mb-1 mt-5">All eyes this way please!</h2>

      <div className="w-[300px] h-[10px] bg-white border-2 border-black mb-15"></div>

      {/* Seat Grid */}
      <div className="w-full max-w-2xl">
        <SeatGrid selectedSeats={selectedSeats} onSeatClick={handleSeatClick} />
      </div>

      {/* Booking Details */}
      <div className="w-full max-w-md mt-6">
        <BookingDetails selectedSeats={selectedSeats} />
      </div>
    </div>
  );
}
