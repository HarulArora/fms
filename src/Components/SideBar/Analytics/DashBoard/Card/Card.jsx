import React from 'react'

function Card({ heading, number, percentage }) {
    return (
        <div>
            <div className="stats shadow">
                <div className="stat w-96 h-48">
                    <div className="stat-title flex justify-center align-middle">{heading}</div>
                    <div className="stat-value flex justify-center align-middle">{number}</div>
                    <div className="stat-desc flex justify-center align-middle">{percentage}</div>
                </div>
            </div>
        </div>
    )
}

export default Card