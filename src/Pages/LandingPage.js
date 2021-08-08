import React, { Component } from 'react';
import { Link } from "react-router-dom"


import Header from '../Components/Header.component';
import OurBlog from '../Components/OurBlog.component';
import WhatWeDo from '../Components/WhatWeDo.component';
import OurNumbers from '../Components/OurNumbers.component';
import Testimonial from '../Components/Testimonial.component';
import OurTeam from '../Components/OurTeam.component';
import Footer from '../Components/Footer.component';

let teamMemberArray = [
    {name: "David Adefunmilayo", title: "Founder & Director", bio: "David Adefunmilayo is a graduate of Petroleum Training Institute and also a graduate of university of Lagos. He has accumulated a two-year experience with the department of petroleum resources where he was saddled with the responsibility of advising oil and gascompanies for the government. He is a lover of Rhythm And Poetry and he engages in it at his leisure."},
    {name: "Funmilayo Oyekanmi", title: "Operations Consultant", bio: "Funmilayo is a career consultant passionate about helping youths unleash their potential. She is also a management consultant with years of experience spanning across sales, operations and research. She enjoys giving back to her society by volunteering in the areas of her strength."}
]

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Header 
                    title = "Join the foremost educational hub in Africa"
                    subtitle = "We help undergraduates discover their natural zone of competence using a personalized self-assessment test"
                    showBtn = {true}
                    image = "home"
                />
                <WhatWeDo />
                <OurBlog />
                <OurNumbers />
                <Testimonial />
                <OurTeam team={teamMemberArray}/>
                <div className="btnn mb-4">
                    <Link to={{
                        pathname: "/about"
                    }} className="pBtn">See All</Link>
                </div>
                <Footer />
            </div>
        );
    }
}

export default LandingPage;