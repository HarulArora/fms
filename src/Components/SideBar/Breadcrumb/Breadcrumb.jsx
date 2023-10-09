import React from 'react'
import { NavLink } from 'react-router-dom'

function Breadcrumb({ page, category }) {
    return (
        <div>
            <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <div
                            className="ml-1 inline-flex text-sm font-medium text-gray-800 md:ml-2"
                        >
                            {category}
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <span className="mx-1 text-gray-800">/</span>
                            <NavLink
                                className="ml-2 text-sm font-medium text-gray-800 hover:underline"
                            >
                                {page}
                            </NavLink>
                        </div>
                    </li>

                </ol>
            </nav>

        </div>
    )
}

export default Breadcrumb