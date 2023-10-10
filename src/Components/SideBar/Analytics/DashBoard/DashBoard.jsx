import React from "react";
import Breadcrumb from "../../Breadcrumb/Breadcrumb";
import Card from "./Card/Card";
// import { Link, NavLink } from 'react-router-dom'
import Graph from "./Graphs/Graph";
import BarGraph from "./Graphs/BarGraph";
import PieGraph from "./Graphs/PieGraph";
function DashBoard() {
  return (
    <>
      <div className="p-5">
        <div>
          <Breadcrumb category="ANALYTICS" page="Dashboard" />
        </div>
        <div className="flex gap-8 mt-5 flex-wrap mb-10">
          <Card
            heading="Students"
            number="4000"
            percentage="12% more than last Year"
          />
          <Card
            heading="Teacher"
            number="339"
            percentage="27% less than last Year"
          />
          <Card
            heading="Teacher"
            number="10"
            percentage="20% more than last month"
          />
          <Card
            heading="Revenue"
            number="₹6900000"
            percentage="34% more than last Year"
          />
        </div>
        <Graph />
        <div className="grid grid-cols-2">
          <div>
            <BarGraph />
          </div>
          <div>
            <PieGraph />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
