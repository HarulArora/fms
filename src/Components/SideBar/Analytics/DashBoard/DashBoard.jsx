import Breadcrumb from "../../Breadcrumb/Breadcrumb";
import Card from "./Card/Card";
// import { Link, NavLink } from 'react-router-dom'
import Graph from "./Graphs/Graph";
import BarGraph from "./Graphs/BarGraph";
import PieGraph from "./Graphs/PieGraph";
import Calenderr from "./Calender/Calenderr";

function DashBoard() {
    return (
        <>
            <div className="p-5 dark:bg-red-300 bg-white w-full">
                <div>
                    <Breadcrumb category="ANALYTICS" page="Dashboard" />
                </div>
                <div className="grid xl:grid-cols-4 gap-x-3 md:grid-cols-2 gap-y-3 mb-10 mt-8">
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
                <div className="w-auto mb-10  grid grid-cols-2 gap-x-2 gap-y-3">
                    <div className="p-2 border shadow-md shadow-slate-200 rounded-lg">
                        <Calenderr />
                    </div>
                    <div className="p-2 border shadow-md shadow-slate-200 rounded-lg flex  items-center justify-center flex-col gap-y-2">
                        <h1>Your X</h1>
                        <Graph />
                    </div>
                    <div className="p-2 border shadow-md shadow-slate-200 rounded-lg flex flex-col gap-y-2 items-center justify-center">
                        <h1>Hey</h1>
                        <PieGraph />
                    </div>
                    <div className="p-2 border shadow-md shadow-slate-200 rounded-lg flex flex-col gap-y-2 items-center justify-center">
                        <h1>Hey</h1>
                        <BarGraph />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashBoard;
