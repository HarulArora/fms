import React from 'react'
import Breadcrumb from '../../Breadcrumb/Breadcrumb'
import StudentList from './Student List/StudentList'
import BottomNavigation from './Bottom Navigation/BottomNavigation'
// import { Link, NavLink } from 'react-router-dom'

function Fee() {
    return (
        <div>

            <div className='flex-grow p-5'>
                <Breadcrumb category="ANALYTICS" page="Fees" />
            </div>
            <div>
                <StudentList></StudentList>
            </div>
            <div>
                <BottomNavigation></BottomNavigation>
            </div>
        </div>
    )
}

export default Fee