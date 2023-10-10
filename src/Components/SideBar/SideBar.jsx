import React from "react";
import { Link, NavLink } from "react-router-dom";

function SideBar() {
    return (
        <aside className="flex h-[93.4vh] min-w-[13em]  flex-col overflow-y-auto border-r-2 bg-white px-5 pt-3 pb-4">
            {/* <a href="#">
                <svg
                    width="40"
                    height="46"
                    viewBox="0 0 50 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                        fill="black"
                    ></path>
                </svg>
            </a> */}
            <div className="mt-0 flex flex-1 flex-col justify-between">
                <nav className="-mx-3 space-y-6 ">
                    <div className="space-y-3 ">
                        <label className="px-3 text-xs font-semibold uppercase text-gray-900 ">
                            analytics
                        </label>
                        <NavLink
                            className={({ isActive }) =>
                                `flex transform items-center ${isActive ? "text-red-500" : "text-gray-600"
                                } rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-red-500 `
                            }
                            to="/"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="h-5 w-5"
                                aria-hidden="true"
                            >
                                <line x1="12" y1="20" x2="12" y2="10"></line>
                                <line x1="18" y1="20" x2="18" y2="4"></line>
                                <line x1="6" y1="20" x2="6" y2="16"></line>
                            </svg>
                            <span className="mx-2 text-sm font-medium">Dashboard</span>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `${isActive ? "text-red-500" : "text-gray-600"
                                } flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-red-500 `
                            }
                            to="/Fee"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="h-5 w-5"
                                aria-hidden="true"
                            >
                                <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
                                <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
                                <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
                            </svg>
                            <span className="mx-2 text-sm font-medium">Fees</span>
                        </NavLink>
                    </div>
                    <div className="space-y-3 ">
                        <label className="px-3 text-xs font-semibold uppercase text-gray-900">
                            Faculty
                        </label>
                        <NavLink
                            className={({ isActive }) =>
                                `${isActive ? "text-red-500" : "text-gray-600"
                                } flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-red-500 `
                            }
                            to="/FacultyProfiles"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="h-5 w-5"
                                aria-hidden="true"
                            >
                                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                                <path d="M18 14h-8"></path>
                                <path d="M15 18h-5"></path>
                                <path d="M10 6h8v4h-8V6Z"></path>
                            </svg>
                            <span className="mx-2 text-sm font-medium">Faculty Profiles</span>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `${isActive ? "text-red-500" : "text-gray-600"
                                } flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-red-500 `
                            }
                            to="/Courses"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="h-5 w-5"
                                aria-hidden="true"
                            >
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                <path d="M2 8c0-2.2.7-4.3 2-6"></path>
                                <path d="M22 8a10 10 0 0 0-2-6"></path>
                            </svg>
                            <span className="mx-2 text-sm font-medium">Courses</span>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `${isActive ? "text-red-500" : "text-gray-600"
                                } flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-red-500 `
                            }
                            to="/Salary"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="h-5 w-5"
                                aria-hidden="true"
                            >
                                <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                            </svg>
                            <span className="mx-2 text-sm font-medium">Salary</span>
                        </NavLink>
                    </div>
                    <div className="space-y-3 ">
                        <label className="px-3 text-xs font-semibold uppercase text-gray-900">
                            Students
                        </label>
                        <NavLink
                            className={({ isActive }) =>
                                `${isActive ? "text-red-500" : "text-gray-600"
                                } flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-red-500 `
                            }
                            to="/StudentProfiles"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="h-5 w-5"
                                aria-hidden="true"
                            >
                                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                                <path d="M18 14h-8"></path>
                                <path d="M15 18h-5"></path>
                                <path d="M10 6h8v4h-8V6Z"></path>
                            </svg>
                            <span className="mx-2 text-sm font-medium">Student Profiles</span>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `${isActive ? "text-red-500" : "text-gray-600"
                                } flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-red-500 `
                            }
                            to="/Admission"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="h-5 w-5"
                                aria-hidden="true"
                            >
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                <path d="M2 8c0-2.2.7-4.3 2-6"></path>
                                <path d="M22 8a10 10 0 0 0-2-6"></path>
                            </svg>
                            <span className="mx-2 text-sm font-medium">Admission</span>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `${isActive ? "text-red-500" : "text-gray-600"
                                } flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-red-500 `
                            }
                            to="/Enrollment"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="h-5 w-5"
                                aria-hidden="true"
                            >
                                <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                            </svg>
                            <span className="mx-2 text-sm font-medium">Enrollment</span>
                        </NavLink>
                    </div>
                </nav>
                <div className="mt-6">
                    <div className="rounded-lg bg-gray-100 p-3 ">
                        <h2 className="text-sm font-medium text-gray-800">
                            Congratulation!
                        </h2>
                        <p className="mt-1 text-xs text-gray-500">You Have Been Promoted</p>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        <a href="#" className="flex items-center gap-x-2">
                            <img
                                className="h-7 w-7 rounded-full object-cover hover:scale-110"
                                src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                                alt="avatar"
                            />
                            <span className="text-sm font-medium text-gray-700 hover:text-red-500">
                                JoyBoy
                            </span>
                        </a>
                        <a
                            href="#"
                            className="rotate-180 text-gray-800 transition-colors duration-200 hover:text-red-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="h-5 w-5"
                            >
                                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                                <polyline points="10 17 15 12 10 7"></polyline>
                                <line x1="15" y1="12" x2="3" y2="12"></line>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default SideBar;
