import React from 'react'
import { Link } from 'react-router-dom'

import OurNumbersCards from './OurNumbersCards.component'

let ourNumbersCardsArray = [
    {index: 1, number: "7000+", title: "Students Trained", description: "We have directly impacted 5000+ university students and 2000+ secondary school students."},
    {index: 2, number: "60+", title: "School Ambassadors", description: "Each university have about 2 representatives and they work hand in hand in fulfilling our vision."},
    {index: 3, number: "35+", title: "Universities", description: "Our campus ambassadors represent us in their respective universities after undergoing intensive training."},
    {index: 4, number: "10+", title: "Secondary Schools", description: "Our representatives form clubs in which they are president."},
]


function OurNumbers() {
    return (
        <section className="our-numbers">
        <h2 className="section-title">Our Numbers</h2>
        <div className="our-numbers-content">
            This is our impact from 2019 till date:
        </div>
        <div className="our-numbers-container">
            {ourNumbersCardsArray.map((numberItem) => {
                return(
                    <OurNumbersCards {...numberItem} key={numberItem.index}/>
                )
            })}
        </div>
        <div className="join">
            <h2><Link to="/services">Join our online community!</Link></h2>
        </div>
    </section>
    )
}

export default OurNumbers  
