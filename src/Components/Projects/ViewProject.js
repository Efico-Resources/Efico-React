import React, { Component } from "react";
import Footer from "../Footer.component";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubesStacked } from "@fortawesome/free-solid-svg-icons";

import photo1 from "../../headerImages/image1.png";
import photo2 from "../../headerImages/image2.png";
import photo3 from "../../headerImages/image3.png";
import photo6 from "../../headerImages/image6.JPG";
import photo7 from "../../headerImages/image7.JPG";
import photo8 from "../../headerImages/image8.JPG";
import h20 from "../../headerImages/frame10.png";
import n2o from "../../headerImages/frame11.png";
import c03 from "../../headerImages/frame12.png";
import ch4 from "../../headerImages/frame13.png";
import woman from "../../headerImages/woman-earth.jpg";
import planting from "../../headerImages/planting.jpg";
import Slider from "./Slider";

class ViewProject extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="projectss">
        <div className="view-fs">
          <div className="view-fs-container">
            <div className="view-fs-header">
            <Link
                to="/project"
                style={{
                  fontWeight: "bolder",
                  color: "white",
                  position: "absolute",
                  right: "1rem",
                  top: "1rem",
                }}
              >
                <h4 style={{ marginTop: "1rem" }}>Back to Projects</h4>
              </Link>{" "}
              <h1>Save The Climate PROJECT</h1>
            </div>
            <h2>Theme:</h2>
            <h3>"Africa is heating up, what are you doing about it?"</h3>

            <div className="view-fs-btn-section">
              <button className="view-fs-btn" style={{ marginRight: "2rem" }}>
                <a
                  href="https://flutterwave.com/pay/savetheclimateprojectfcat"
                  target="_blank"
                  rel="noreferrer"
                >
                  Donate
                </a>
              </button>
              <button
                className="view-fs-btn"
                style={{ background: "transparent" }}
              >
                <a href="https://wa.me/message/J7OLLH63J2CQP1" target="blank">
                  Contact Us
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="view-sc">
          <div className="view-container">
            <div className="links-sc">
              <Link to="/view-projects" style={{ fontWeight: "bolder" }}>
                Summary{" "}
              </Link>{" "}
              | <Link to="/project-album"> Project Album </Link>
            </div>

            <div className="brief-box">
              <h3>Overview of the project:</h3>
              <p>
                This project utilizes African undergraduates and recent
                graduates to combat the growing effect of climate change through
                research, business model and individual creative abilities.
              </p>
            </div>

            <div className="cross-flex">
              <div className="cross-icon">
                <FontAwesomeIcon icon={faCubesStacked} />
              </div>
              <h2>Executive Summary</h2>
            </div>

            <div className="cross-container">
              <p>
                The essence of the Save The Climate Project themed "Africa is
                heating up, what are you doing about it?" is a response to the
                global climate change concern. The Climate Change Conference
                held in Glasgow, November 2021 (COP 26) have vitalized this our
                action for African’s Climate. David Adefunmilayo (the poineer)
                being an oil and gas graduate who made a U-turn to climate
                activism, has gathered his resources and network to fight this
                climate crisis.
              </p>
              <p>
                This pitch deck elucidates the problems, causes and effects of
                these crisis from the African context, shows our vision for the
                future, and adjoins you to partners with us.
              </p>
            </div>

            <div className="ipcc">
              <p>The last decade was the hotest in 125,000 years</p>
              <span>- report from IPCC</span>
            </div>

            <div className="cross-flex">
              <div className="cross-icon">
                <FontAwesomeIcon icon={faCubesStacked} />
              </div>
              <h2>The Why</h2>
            </div>
            <div className="cross-container">
              <h5>Founder's story</h5>
              <p>
                David Adefunmilayo is an oil/gas graduate from Petroleum
                Training Institute and the University of Lagos. During his 400
                level internship in the Department of Petroleum Resources (DPR)
                - the regulator of the oil and gas industry in Nigeria. He came
                to understand the concept of climate change, how fossil fuel
                constitutes a major effect to the crisis, and he experienced
                first-hand how flooding and many of its effects threatens the
                rights to happiness in his local communities. He then made a
                U-turn and started Efico edtech resources to help students with
                work place skills while finding his footing in driving climate
                change activism in Africa. He also joined many change-making
                communities to learn about this challenge and started designing
                an impact-driven roadmap.
              </p>
            </div>

            <div className="cross-flex">
              <div className="cross-icon">
                <FontAwesomeIcon icon={faCubesStacked} />
              </div>
              <h2>Our Findings</h2>
            </div>
            <div className="cross-container">
              <h5>Research</h5>
              <p>
                Scientists attribute the global warming trend observed since the
                mid-20th century to the human expansion of the "the greenhouse
                effect" 1 - warming that results when the atmosphere traps heat
                radiating from Earth towards space
              </p>
              <p>
                Certain gases in the atmosphere block heat from escaping.
                Long-lived gases that remain semi-permanently in the atmosphere
                and do not respond physically or chemically to changes in
                temperature are described as "forcing" climate change. Gases
                such as water vapour, which respond physically or chemically to
                changes in temperature are seen as "feedbacks"
              </p>
              <p>Gases that contribute to the greenhouse effect include:</p>
            </div>
          </div>
        </div>

        <div className="project-trans">
          <div className="h2-n2">
            <div className="h20">
              <img src={h20} alt="Efico Resources " />
            </div>
            <div className="h20">
              <img src={n2o} alt="Efico Resources" />
            </div>
          </div>

          <div className="h2-n2">
            <div className="h20">
              <img src={c03} alt="Efico Resources" />
            </div>
            <div className="h20">
              <img src={ch4} alt="Efico Resources" />
            </div>
          </div>
        </div>

        <div className="view-sc">
          <div className="view-container">
            <div className="cross-flex">
              <div className="cross-container">
                <h5>Effects:</h5>
                <p>
                  Cyclone in Mozambique, drought in the northern part of
                  Nigeria, wildfires in Tanzania and one-year abscence of rain
                  in Kenya.
                </p>
                <p>
                  Global climate change has already had observable effects on
                  the environment. Glaciers have shrunk, ice on rivers and lakes
                  is breaking up earlier, plant and animal ranges have shifted
                  and trees are flowering sooner.
                </p>
              </div>
            </div>

            <div className="ipcc">
              <p>
                Taken as a whole, the range of published evidence indicates that
                the net damage costs of climate change are likely to be
                significant and to increase over time.
              </p>
              <span>- Intergovernmental Panel on Climate Change</span>
            </div>

            <div className="cross-flex">
              <div className="cross-icon">
                <FontAwesomeIcon icon={faCubesStacked} />
              </div>
              <h2>Our Vision</h2>
            </div>
            <div className="cross-container">
              <h5>What if:</h5>
              <p>
                <span> &#9679;</span> All African businesses are eco-friendly.
                <br />
                <span> &#9679;</span> 90% of Africans are aware about this
                climate crisis.
                <br />
                <span> &#9679;</span> 1 in 5 of the African populace planted a
                tree. <br />
                <span> &#9679;</span> Gain buyings from non-Africans to advocate
                for Africa. <br />
                <span> &#9679;</span> 2 in 3 of the Africans adopt green
                transports and homes.
              </p>
            </div>

            <div className="cross-flex">
              <div className="cross-icon">
                <FontAwesomeIcon icon={faCubesStacked} />
              </div>
              <h2>The Challenge</h2>
            </div>
            <div className="cross-container">
              <p style={{marginTop: '0rem'}}>
                How can we use education, technology, community engagement and
                nature-based solutions to <br />
                <span> &#9679;</span> Combat the effects of climate change in
                Africa?
                <br />
                <span> &#9679;</span> Adapt these effects when the world is slow
                to respond?
              </p>

              <h5 style={{ fontSize: "x-large" }}>What are we doing?</h5>
              <h4> We are leveraging business models to fight
                climate change.</h4>
              <p>
                <span> &#9632;</span> We have created an ecosystem that helps
                young people with the resources for businesses that are targeted
                towards adaptation and mitigation.
              </p>
              <h4>
                We are raising awareness to local communities - especially
                across Africa
              </h4>
              <p>
                <span> &#9632;</span> We have designed t-shirts that immediately
                make poeple aware about climate change and have trained
                ambassadors/activists to speak about it everywhere they go.
                <br />
                <span> &#9632;</span> We have leveraged social media to recruit
                and inspire passonate student volunteers and activists, and
                gained communty-buyings and engagements.
                <br />
                <span> &#9632;</span> We have utilized volunteers for awareness
                campaigns and gotten over 500 activists across the African
                landscape to join the movement.
              </p>
              <h4>We are recruiting passionate activists</h4>
              <p>
                <span> &#9632;</span> We have also communicated this movement
                across the African borders and have inspired non-African
                activists to join the movement.
              </p>

              <h4>
                We are pushing for ratification of climate education into
                academic curriculum
              </h4>
              <h4>
                We are utilizing students to get interdisciplinary skills for
                climate tech research
              </h4>
              <h4>
                We are leveraging notable UN Environmental Days in the year for
                community actions and engagements.
              </h4>
              <h4>
                We getting buy-ins from non-Africans to advocate for Africa.
              </h4>
            </div>


            <div className="vp-img-sect">
              <div className="vp-img-flex">
                <div className="vp-img-hgt">
                  <img src={photo1} alt="Efico Resources" />
                </div>
                <div className="vp-img-hgt">
                  <img src={photo2} alt="Efico Resources" />
                </div>
                <div className="vp-img-hgt">
                  <img src={photo3} alt="Efico Resources" />
                </div>
                <div className="vp-img-hgt">
                  <img src={photo7} alt="Efico Resources" />
                </div>
                <div className="vp-img-hgt">
                  <img src={photo8} alt="Efico Resources" />
                </div>
                <div className="vp-img-hgt">
                  <img src={photo6} alt="Efico Resources" />
              </div>
              </div>

              <Link to="/project-album" style={{textAlign: 'right', marginTop: '0.5rem', marginBottom: '2rem'}}> 
              <button className="view-fs-btn" style={{background: 'green', border: 'none'}}>
                See More...
              </button>
               </Link>
            </div>

            <div className="cross-flex">
              <div className="cross-icon">
                <FontAwesomeIcon icon={faCubesStacked} />
              </div>
              <h2>Statistics so far</h2>
            </div>
          </div>
        </div>

        <div className="stats-vs">
          <div className="stats-vs-cont">
            {/* GRID SECTION */}
            {/* GRID SECTION */}

            <div className="stats-grid-cont">
              <div className="stat-grid">
                <p>503</p>
                <h3>Active activists</h3>
              </div>

              <div className="stat-grid">
                <p>50</p>
                <h3>Volunteers</h3>
              </div>

              <div className="stat-grid">
                <p>7000</p>
                <h3>Students Impacted</h3>
              </div>

              <div className="stat-grid">
                <p>5</p>
                <h3>Partners</h3>
              </div>

              <div className="stat-grid">
                <p>80%</p>
                <h3>Activists conversion rate</h3>
              </div>

              <div className="stat-grid">
                <p>30</p>
                <h3>Research published</h3>
              </div>

              <div className="stat-grid">
                <p>6</p>
                <h3>Continental actions</h3>
              </div>

              <div className="stat-grid">
                <p>80</p>
                <h3>T-shirt sold</h3>
              </div>

              <div className="stat-grid">
                <p>32</p>
                <h3>Non-African activists</h3>
              </div>
            </div>

            {/* WHAT'S NEXT */}
            {/* WHAT'S NEXT */}

            <div className="cross-flex">
              <div className="cross-icon">
                <FontAwesomeIcon icon={faCubesStacked} />
              </div>
              <h2>What's Next?</h2>
            </div>

            <div className="volunteer-faq">
              <div className="sct-1">
                <img src={woman} alt="Save The Climate" />
              </div>

              <div
                className="sct-1"
                style={{ marginLeft: "2%", alighItems: "center" }}
              >
                <h5>Come 2030, we seek to have these impacts in Africa:</h5>
                <p>
                  <span> &#9679;</span> impact 10 million students
                  <br />
                  <span> &#9679;</span> raise 500,000 climate activists
                  <br />
                  <span> &#9679;</span> plant 1 million trees <br />
                  <span> &#9679;</span> implement 10,000 community engagements
                  <br />
                  <span> &#9679;</span> produce 200 climate business solutions
                  <br />
                  <span> &#9679;</span> published 5000 research papers
                  <br />
                  <span> &#9679;</span> develop 500 estates powered by renewable
                  energy
                  <br />
                  <span> &#9679;</span> plant 1 million trees
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="view-sc">
          <div className="view-container">
            {/* DONATE SECTION */}
            {/* DONATE SECTION */}

            <div className="volunteer-far">
              <div className="sct-1">
                <img src={planting} alt="Save The Climate" />
              </div>
              <div className="sct-2">
                <div className="sct-2-cont">
                  <h5>Donate</h5>
                  <p>
                    Support our impact! Donations & funds will go a long way as
                    to carry out numerous national and international projects,
                    creating awareness, contributing to training and sustainable
                    positive change around the world.
                  </p>
                  <div style={{ display: "flex", textAlign: "start" }}>
                    <div style={{ marginTop: 10 + "px", marginRight: "4%" }}>
                      <a
                        href="https://flutterwave.com/pay/savetheclimateprojectfcat"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          background: "#E1DB46",
                          fontWeight: "bolder",
                          borderRadius: "10px",
                          padding: "10px 30px",
                        }}
                      >
                        Donate
                      </a>
                    </div>
                    <div style={{ marginTop: 10 + "px" }}>
                      <a
                        href="https://wa.me/message/J7OLLH63J2CQP1"
                        target="blank"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <h5>Contact Us</h5>
                      </a>
                      {/* <Link
                        to="/contact-us"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DONATE MOBILE VIEW */}
            {/* DONATE MOBILE VIEW */}

            <div className="sct-2-mobile">
              <div className="first-section-mobile">
                <div className="outer-mobile">
                  <div className="first-details-mobile">
                    <div className="sct-2-cont">
                      <h5>Donate</h5>
                      <p>
                        Support our impact! Donations & funds will go a long way
                        as to carry out numerous national and international
                        projects, creating awareness, contributing to training
                        and sustainable positive change aroung the world.
                      </p>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div
                          style={{ marginTop: 10 + "px", marginRight: "4%" }}
                        >
                          <a
                            href="https://flutterwave.com/pay/savetheclimateprojectfcat"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              textDecoration: "none",
                              color: "black",
                              background: "#E1DB46",
                              fontWeight: "bolder",
                              borderRadius: "10px",
                              padding: "10px 30px",
                            }}
                          >
                            Donate
                          </a>
                        </div>
                        <div style={{ marginTop: 10 + "px" }}>
                          <a
                            href="https://wa.me/message/J7OLLH63J2CQP1"
                            target="blank"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            <h5>Contact Us</h5>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TEAM SECTION */}
            {/* TEAM SECTION */}

            <div className="project-team">
              <div className="cross-flex">
                <div className="cross-icon">
                  <FontAwesomeIcon icon={faCubesStacked} />
                </div>
                <h2>Team</h2>
              </div>
              <div className="cross-container">
                <h5>
                  Our core values are established in unity, these amazing team
                  made this project a reality.
                </h5>
              </div>

              <div className="project-slider">
                <Slider />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ViewProject;
