import React, { Component } from 'react'
import WsfButtons from './WsfButtons.component'

let BtnDetails = [
    {btnText: "E-Efficient", description: "We are efficient, we always maximize your potential for that personalized skill.", index: 1},
    {btnText: "F-Faithful", description: "We are faithful, we adhere firmly to the cause of making you exception after graduation.", index: 2},
    {btnText: "I-Integrity", description: "We stand as an entity of integrity, we are true to our words.", index: 3},
    {btnText: "C-Communication", description: "We love you to communicate, because that way, we can serve you better.", index: 4},
    {btnText: "O-Organisation", description: "We hold organisation in high esteem, since it is one of the ways to follow through  and track your progress.", index: 5}
]

class WeStandFor extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
            
    //     }
    // }

    render() {
        return (
            <div>
            <section className="about-text">
                <div className="about-text-container">
                    <div className="about-header">
                        <h2>About Us</h2>
                    </div>
                    <div className="about-content">
                        Efico was founded in 2019, in response to the suicide saga that happened in 2018 in the university of Lagos,Nigeria. From hindsight, it was largely attributed to the confusion that permeated the Nigerian Educational system and the wide discrepancy between the industry and the academia. In Efico, we believe that the first step to career sucess is the realization of self, hence, we use a personalized self-assessment test to help students know themselves and then channel skills in the direction of their innate abilities. This helps them find their unique place in value creation, liberating economic prosperity in the long haul.
                    </div>
                </div>  
            </section>
            <section className="we-stand-for">
        <div className="section-header">
            <h2>We Stand For</h2>
        </div>
        <div className="wsf-button-container">

        {   BtnDetails.map((deets) => {
            return(
                <WsfButtons {...deets} key={deets.index} />
            )
        })  
                }
        </div>
    </section>
        </div> 
        )
    }
}

export default WeStandFor


