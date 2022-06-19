import React, { Component } from "react";
import Footer from "../Footer.component";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubesStacked } from "@fortawesome/free-solid-svg-icons";
import { Accordion } from "react-bootstrap";

import photo1 from "../../headerImages/photoAlbum/1.jpg";
import photo2 from "../../headerImages/photoAlbum/2.jpg";
import photo3 from "../../headerImages/photoAlbum/3.jpg";
import photo4 from "../../headerImages/photoAlbum/4.jpg";
import photo5 from "../../headerImages/photoAlbum/5.jpg";
import photo6 from "../../headerImages/photoAlbum/6.jpg";
import photo7 from "../../headerImages/photoAlbum/7.jpg";
import photo8 from "../../headerImages/photoAlbum/8.jpg";
import photo9 from "../../headerImages/photoAlbum/9.jpg";
import photo10 from "../../headerImages/photoAlbum/10.jpg";
import photo11 from "../../headerImages/photoAlbum/11.jpg";
import photo12 from "../../headerImages/photoAlbum/12.jpg";
import photo13 from "../../headerImages/photoAlbum/13.jpg";
import photo14 from "../../headerImages/photoAlbum/14.jpg";

class ProjectAlbum extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="projectss">
        {" "}
        <div className="view-fs">
          <h2>Theme:</h2>
          <h1>"Africa is heating up, what are you doing about it?"</h1>
          <p>Save The Climate PROJECT</p>
        </div>
        <div className="view-sc">
          <div className="view-container">
            <div className="links-sc">
              <Link to="/viewproject">Summary </Link> |{" "}
              <Link to="/album" style={{ fontWeight: "bolder" }}>
                {" "}
                Project Album{" "}
              </Link>
            </div>
            <div className="photo-album">
              <img src={photo1} alt="Save The Climate" />
              <img src={photo2} alt="Save The Climate" />
              <img src={photo3} alt="Save The Climate" />
              <img src={photo4} alt="Save The Climate" />
              <img src={photo5} alt="Save The Climate" />
              <img src={photo6} alt="Save The Climate" />
              <img src={photo7} alt="Save The Climate" />
              <img src={photo8} alt="Save The Climate" />
              <img src={photo9} alt="Save The Climate" />
              <img src={photo10} alt="Save The Climate" />
              <img src={photo11} alt="Save The Climate" />
              <img src={photo12} alt="Save The Climate" />
              <img src={photo13} alt="Save The Climate" />
              <img src={photo14} alt="Save The Climate" />{" "}
            </div>{" "}
            <div className="volunteer-faq">
              {" "}
              <div className="volunteer-sct">
                <div className="volunteer-sct-flex" style={{ color: "purple" }}>
                  <span>
                    <FontAwesomeIcon
                      icon={faCubesStacked}
                      style={{ color: "purple" }}
                    />
                  </span>
                  <h4>Become a volunteer</h4>
                </div>
                <div className="volunteer-sct-flex">
                  <span>&#10004;</span>
                  <p>
                    Get <b>certified</b> as a Global Volunteer Partcipant
                  </p>
                </div>
                <div className="volunteer-sct-flex">
                  <span>&#10004;</span>
                  <p>
                    Develop a set of <b>leadership qualities</b> through our
                    Leadership Development Model
                  </p>
                </div>
                <div className="vol-btn">
                  <a
                    href="https://ix3utmky3iq.typeform.com/to/a8OnrbCm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Become a volunteer
                  </a>
                </div>
              </div>
              <div className="faq-sct">
                <h2 className="acc-title">FAQs</h2>

                <Accordion defaultActiveKey="0" flush classname="acc-header">
                  <Accordion.Item eventKey="0" classname="acc-header">
                    <Accordion.Header style={{ background: "#f0e2f0" }}>
                      What is Efico all about?
                    </Accordion.Header>
                    <Accordion.Body className="acc-body">
                      We have discovered that undergraduates are not exposed to
                      the realities of the 'life after school', some of them are
                      confused and frustrated about the educational system and
                      how well to navigate it and acquire skills amidst the
                      myriads of skills available. Hence, we help them find
                      their unique place in value creation and instill relevant
                      skills that make their education make sense and avail them
                      to be truly successful upon graduation.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header classname="acc-header">
                      How do I join this community?
                    </Accordion.Header>
                    <Accordion.Body className="acc-body">
                      We are building an ecosystem of competent Eficos around
                      all campuses in Nigeria. There is an Efico hub in your
                      school. You can join the online WhatsApp community group
                      where you would be directed to your rightful university
                      community after the orientation.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header classname="acc-header">
                      When and where does training take place?
                    </Accordion.Header>
                    <Accordion.Body className="acc-body">
                      Apart from the online and physical orientation, we avail
                      paid (but immensely subsidized) training and avail you the
                      latitude to choose from a broad spectrum of skill sets
                      according to what you have analysed about yourself. These
                      training sessions are both online and offline or one on
                      one. You also have opportunities for hands-on project
                      implementations from your school hub.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProjectAlbum;
