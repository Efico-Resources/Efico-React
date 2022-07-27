import React, { Component } from "react";
import Footer from "../Footer.component";
import ProjectHeader from "../ProjectHeader";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubesStacked } from "@fortawesome/free-solid-svg-icons";

class FeauturedProject extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="projectss">
        <ProjectHeader
          title="Featured Projects"
          subtitle="
                    Contributing tiredlessly to the awareness, development and sanity of the community
                    and immediate society is priority.
                    "
          subsubtitle=" We are Efico, we are the change we want to see in Africa. "
          showSearch={false}
          image="fproject"
        />

        {/* CARDS SECTION */}
        {/* CARDS SECTION */}

        <div className="featured-landing-blog">
          <div className="feut-flex">
            <div style={{ fontSize: "larger" }}>
              <FontAwesomeIcon icon={faCubesStacked} />
            </div>
            <h2>Save The Climate PROJECT</h2>
          </div>
          <p style={{ textAlign: "start", marginLeft: "6%", marginTop: "1%" }}>
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

        <Footer />
      </div>
    );
  }
}

export default FeauturedProject;
