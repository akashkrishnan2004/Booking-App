import React from "react";
import toast from "react-hot-toast";

export default function BookingDetails({ selectedSeats }) {
  const totalCost = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

  return (
    <div className="w-full bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
      <h2 className="text-lg sm:text-xl font-semibold mb-3 text-center">
        Booking Details
      </h2>
      <ul className="text-sm sm:text-base">
        {selectedSeats.map((seat) => (
          <li key={seat.id} className="text-center">
            {seat.id} - ₹{seat.price}
          </li>
        ))}
      </ul>
      <h3 className="mt-4 font-bold text-lg sm:text-xl text-center">
        Total: ₹{totalCost}
      </h3>
      <button
        className="mt-4 bg-green-500 px-4 py-2 sm:px-6 sm:py-3 w-full rounded-md font-semibold hover:bg-green-600 transition"
        onClick={() =>
          toast.success(
            `🎉 Booking Confirmed! Seats: ${selectedSeats
              .map((s) => s.id)
              .join(", ")}`
          )
        }
        
        disabled={selectedSeats.length === 0}
      >
        Book Now
      </button>


      <div className="flex flex-wrap justify-center gap-3 p-5">
        <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-lg shadow-md">
          <div className="w-[35px] h-[35px] bg-gray-400"></div>
          <h1 className="text-lg text-black font-semibold">₹100 (Silver)</h1>
        </div>

        <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-lg shadow-md">
          <div className="w-[35px] h-[35px] bg-yellow-500"></div>
          <h1 className="text-lg text-black font-semibold">₹150 (Gold)</h1>
        </div>

        <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-lg shadow-md">
          <div className="w-[35px] h-[35px] bg-red-500"></div>
          <h1 className="text-lg text-black font-semibold">₹200 (Platinum)</h1>
        </div>
      </div>
    </div>
  );
}
