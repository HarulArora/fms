import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import DashBoard from './Components/SideBar/Analytics/DashBoard/DashBoard.jsx'
import Fee from './Components/SideBar/Analytics/Fee/Fee.jsx'
import FacultyProfiles from './Components/SideBar/Faculty/Faculty Profiles/FacultyProfiles.jsx'
import Courses from './Components/SideBar/Faculty/Courses/Courses.jsx'
import Salary from './Components/SideBar/Faculty/Salary/Salary.jsx'
import StudentProfiles from './Components/SideBar/Students/Student Profiles/StudentProfiles'
import Admission from './Components/SideBar/Students/Admission/Admission'
import Enrollment from './Components/SideBar/Students/Enrollment/Enrollment'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: "",
                element: <DashBoard />
            },
            {
                path: "Fee",
                element: <Fee />
            },
            {
                path: "FacultyProfiles",
                element: <FacultyProfiles />
            },
            {
                path: "Courses",
                element: <Courses />
            },
            {
                path: "Salary",
                element: <Salary />
            },
            {
                path: "StudentProfiles",
                element: <StudentProfiles />
            },
            {
                path: "Admission",
                element: <Admission />
            },
            {
                path: "Enrollment",
                element: <Enrollment />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
