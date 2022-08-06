import React, { useState } from "react";
import Footer from "../Footer.component";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubesStacked } from "@fortawesome/free-solid-svg-icons";
// import { Accordion } from "react-bootstrap";

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


const ProjectAlbum = () => {

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }setSelected(i)
  }

  return (
          <div className="projectss">
        {" "}
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
            <button className="view-fs-btn" style={{marginRight: '2rem'}}>
              <a
                href="https://flutterwave.com/pay/savetheclimateprojectfcat"
                target="_blank"
                rel="noreferrer"
              >
                Donate
              </a>
            </button>
            <button className="view-fs-btn" style={{background: 'transparent'}}>
              <a
                href="https://wa.me/message/J7OLLH63J2CQP1"
                target="blank"
              >
                Contact Us
              </a>
            </button>
          </div>
          </div>
        </div>
        
        <div className="view-sc">
          <div className="view-container">
            <div className="links-sc">
              <Link to="/view-projects">Summary </Link> |{" "}
              <Link to="/project-album" style={{ fontWeight: "bolder" }}>
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
                <div className="volunteer-sct-flex">
                  <span>
                    <FontAwesomeIcon
                      icon={faCubesStacked}
                      style={{ color: "green" }}
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
                <div className="vol-btnnn">
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
                <div className="accordn">
                  {
                    data.map((item, i) => (
                  <div className="acc-item">
                        <div className="acc-header" onClick={() => toggle(i)}>
                          <h4>{item.question}</h4>
                          <span>
                            {selected === i ? '-' : '+'}
                          </span>
                        </div>
                        <div className={selected === i ? 'acc-content-show' : 'acc-content'}>{item.answer}</div>
                      </div>
                    ) )
                  }
                </div>
          
            </div>
          </div>
        </div>
        </div>
        <Footer />
      </div>
    );
  }


const data = [
  {
    question: 'What is Efico all about?',
    answer: 'We have discovered that undergraduates are not exposed to the realities of the life after school, some of them are confused and frustrated about the educational system and how well to navigate it and acquire skills amidst the myriads of skills available. Hence, we help them find their unique place in value creation and instill relevant skills that make their education make sense and avail them to be truly successful upon graduation.'
  },
  {
    question: ' How do I join this community?',
    answer: 'We are building an ecosystem of competent Eficos around all campuses in Nigeria. There is an Efico hub in your school. You can join the online WhatsApp community group where you would be directed to your rightful university community after the orientation.'
  },
  {
    question: 'When and where does training take place?',
    answer: 'Apart from the online and physical orientation, we avail paid (but immensely subsidized) training and avail you the latitude to choose from a broad spectrum of skill sets according to what you have analysed about yourself. These training sessions are both online and offline or one on one. You also have opportunities for hands-on project implementations from your school hub.'
  },
]

export default ProjectAlbum