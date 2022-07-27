import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubesStacked } from "@fortawesome/free-solid-svg-icons";

import Header from "../Components/Header.component";
import OurBlog from "../Components/OurBlog.component";
import WhatWeDo from "../Components/WhatWeDo.component";
import OurNumbers from "../Components/OurNumbers.component";
import Testimonial from "../Components/Testimonial.component";
import OurTeam from "../Components/OurTeam.component";
import Footer from "../Components/Footer.component";

let teamMemberArray = [
  {
    name: "David Adefunmilayo",
    title: "Founder & Director",
    bio: "David Adefunmilayo is a graduate of Petroleum Training Institute and also a graduate of university of Lagos. He has accumulated a two-year experience with the Department of Petroleum Resources where he was saddled with the responsibility of advising oil and gas companies for the government. He is a lover of Rhythm And Poetry and he engages in it at his leisure.",
    linkedin: "http://linkedin.com/in/adefunmilayo-david",
    email: "David.Adefunmilayo@eficoresource.com",
  },
  {
    name: "Funmilayo Oyekanmi",
    title: "Operations Consultant",
    bio: "Funmilayo is a career consultant passionate about helping youths unleash their potential. She is also a management consultant with years of experience spanning across sales, operations and research. She enjoys giving back to her society by volunteering in the areas of her strength.",
    linkedin: "https://www.linkedin.com/in/layooye/",
    email: "angeloyekanmi@gmail.com",
  },
];

class LandingPage extends Component {
  render() {
    return (
      <div style={{ overflow: "hidden" }}>
        <Header
          title="Become a part of Africa's leading sustainability education/advisory hub"
          subtitle="First, watch this video and discover your strength and natural abilities by completing this self-assessment test."
          showBtn={true}
          image="home"
        />
        <WhatWeDo />

        <div>
          <div>
            <h2 className="section-title"> Featured Projects </h2>
          </div>
          <div className="featured-landing-blog" style={{ marginTop: "2%" }}>
            <div className="feut-flex" style={{ color: "black" }}>
              <div style={{ fontSize: "larger" }}>
                <FontAwesomeIcon icon={faCubesStacked} />
              </div>
              <h2>Save The Climate PROJECT</h2>
            </div>
            <p
              style={{ textAlign: "start", marginLeft: "6%", marginTop: "1%" }}
            >
              Africa is heating up causing significant changes in the climate
              system. Observations made on and above Earth's surface shows the
              planet's climate is changing majorly because of human activities.
            </p>
            <div className="featured-first-section">
              <div className="feautured-outer">
                <div className="first-details">
                  <h1>AFRICA IS HEATING UP, WHAT ARE YOU DOING ABOUT IT?</h1>
                  <p>
                    This project utilizes African undergraduates and recent
                    graduates to combat the growing effect of climate change
                    through research, business model and individual creative
                    abilities.
                  </p>
                  <Link to="/viewproject"> View project </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <OurBlog />
        <OurNumbers />
        <Testimonial />
        <OurTeam team={teamMemberArray} />
        <div className="btnn mb-4">
          <Link
            to={{
              pathname: "/about",
            }}
            className="pBtn"
          >
            See All
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
