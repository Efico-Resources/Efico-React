import React from 'react'

function OurNumbersCards({index, number, title, description}) {
    return (
        <div class="our-numbers-card">
            <div class="card-contents">
                <div class="card-icon">
                    <img src={`Assets/img/ON-${index}.svg`} alt="Students Icon" />
                </div>
                <div class="card-number">
                    <h3>{number}</h3>
                </div>
                <div class="card-title">
                    <h2>{title}</h2>
                </div>
                <div class="card-description">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default OurNumbersCards
