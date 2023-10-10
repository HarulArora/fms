import React from 'react'
import Breadcrumb from '../../Breadcrumb/Breadcrumb'
import StudentList from './Student List/StudentList'
// import { Link, NavLink } from 'react-router-dom'

function Fee() {
    return (
        <>
            <div>

                <div className='flex-grow p-5'>
                    <Breadcrumb category="ANALYTICS" page="Fees" />
                </div>
                <div>
                    <StudentList></StudentList>
                </div>
            </div>
        </>
    )
}

export default Fee