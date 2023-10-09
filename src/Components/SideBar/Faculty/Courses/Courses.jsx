import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
import Breadcrumb from '../../Breadcrumb/Breadcrumb'
function Courses() {
    return (
        <div className='flex-grow p-5'>
            <Breadcrumb category="FACULTY" page="Courses" />
        </div>
    )
}

export default Courses