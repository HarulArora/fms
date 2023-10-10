import React from "react";

function Card({ heading, number, percentage }) {
  return (
    <div className="stats shadow dark:bg-red-300 bg-black h-[150px] flex justify-center items-center">
      <div className="stat w-[220.55px] h-[80px] flex flex-col items-center mb-12">
        <div className="stat-title">{heading}</div>
        <div className="stat-value ">{number}</div>
        <div className="stat-desc">{percentage}</div>
      </div>
    </div>
  );
}

export default Card;
