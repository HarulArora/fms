import React from 'react'
import Breadcrumb from '../../Breadcrumb/Breadcrumb'
import Card from './Card/Card'
// import { Link, NavLink } from 'react-router-dom'
function DashBoard() {
    return (
        <>
            <div className='flex-grow p-5'>
                <div>
                    <Breadcrumb category="ANALYTICS" page="Dashboard" />
                </div>
                <div className='flex gap-11 mt-5'>
                    <Card heading="Students" number="4000" percentage="12% more than last Year" />
                    <Card heading="Teacher" number="339" percentage="27% less than last Year" />
                    <Card heading="Teacher" number="10" percentage="20% more than last month" />
                    <Card heading="Revenue" number="₹6900000" percentage="34% more than last Year" />
                </div>

            </div >
        </>
    )
}

export default DashBoard