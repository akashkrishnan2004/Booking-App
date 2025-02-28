import React from "react";

const seatPrices = {
  A: 100,
  B: 100, // Silver (Front)
  C: 150,
  D: 150, // Gold (Middle)
  E: 200,
  F: 200, // Platinum (Back)
};

export default function SeatGrid({ selectedSeats, onSeatClick }) {
  const rows = ["A", "B", "C", "D", "E", "F"];
  const cols = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center gap-3">
      {rows.map((row) => (
        <div key={row} className="grid grid-cols-10 gap-2 sm:gap-3">
          {cols.map((col) => {
            const seatId = `${row}${col}`;
            const price = seatPrices[row];
            const isSelected = selectedSeats.some((seat) => seat.id === seatId);

            return (
              <button
                key={seatId}
                className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-md text-xs sm:text-sm font-bold flex items-center justify-center
                  ${row === "A" || row === "B" ? "bg-gray-400" : ""}  
                  ${row === "C" || row === "D" ? "bg-yellow-500" : ""}
                  ${row === "E" || row === "F" ? "bg-red-500" : ""}
                  ${isSelected ? "ring-4 ring-green-400 scale-110" : ""}
                  transition transform hover:scale-105 active:scale-95 shadow-lg
                `}
                onClick={() => onSeatClick(seatId, price)}
              >
                {seatId}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
