import React, { useState } from "react";
import { format, addMonths, subMonths } from "date-fns";
// import "tailwindcss/tailwind.css";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const monthName = format(currentMonth, "MMMM yyyy");

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <div className="flex justify-between items-center">
        <button
          className="text-gray-600 hover:text-gray-800"
          onClick={prevMonth}
        >
          &lt; Prev
        </button>
        <h1 className="text-xl font-semibold">{monthName}</h1>
        <button
          className="text-gray-600 hover:text-gray-800"
          onClick={nextMonth}
        >
          Next &gt;
        </button>
      </div>
      <div className="mt-4 grid grid-cols-7 gap-2">
        {Array.from({ length: daysInMonth }, (_, index) => (
          <div
            key={index}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
