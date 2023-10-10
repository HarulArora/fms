import React from "react";

const Notice = () => {
  return (
    <div className="bg-white h-auto w-full p-4 border rounded-md">
      <div className="flex flex-col">
        <div className=" w-full flex justify-between items-center mb-4">
          <h1 className="text-xl">Notice Board</h1>
          <p className="text-3xl">...</p>
        </div>
        <div className="flex flex-col gap-y-2 justify-start mb-8">
          <button className="bg-[#FBD540] w-[15%] p-1 rounded-xl text-white">
            16 June 2024
          </button>
          <h1 className="text-[20px]">Student Attendance Issue</h1>
          <p>
            Reshab Sir / <span className="opacity-60">6 min ago</span>
          </p>
          <hr />
        </div>
        <div>x</div>
        <div>x</div>
        <div>x</div>
        <div>x</div>
      </div>
    </div>
  );
};

export default Notice;
