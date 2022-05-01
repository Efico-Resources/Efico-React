import React from 'react'

function OurNumbersCards({index, number, title, description}) {
    return (
        <div className="our-numbers-card">
            <div className="card-contents">
                <div className="card-icon">
                    <img src={`Assets/img/ON-${index}.svg`} alt="Students Icon" />
                </div>
                <div className="card-number">
                    <h3>{number}</h3>
                </div>
                <div className="card-title">
                    <h2>{title}</h2>
                </div>
                <div className="card-description">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default OurNumbersCards
