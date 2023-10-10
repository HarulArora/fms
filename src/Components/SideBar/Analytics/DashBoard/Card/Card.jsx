import React from "react";

function Card({ heading, number, percentage }) {
  return (
    <div className="stats shadow dark:bg-red-300 bg-black">
      <div className="stat w-[220.55px] h-[40%]">
        <div className="stat-title flex justify-center align-middle">
          {heading}
        </div>
        <div className="stat-value flex justify-center align-middle">
          {number}
        </div>
        <div className="stat-desc flex justify-center align-middle">
          {percentage}
        </div>
      </div>
    </div>
  );
}

export default Card;
