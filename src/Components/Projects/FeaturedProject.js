import React, { Component } from "react";
import Footer from "../Footer.component";
import ProjectHeader from "../ProjectHeader";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubesStacked } from '@fortawesome/free-solid-svg-icons'

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
          image="project"
        />

        {/* CARDS SECTION */}
        {/* CARDS SECTION */}

        <div className='featured-landing-blog' >
        <div className="feut-flex" >
          <div style={{fontSize: 'larger'}}><FontAwesomeIcon icon={faCubesStacked} /></div>
          <h2>Save The Climate PROJECT</h2>
          </div>
            <div className="featured-first-section">
        <div className="feautured-outer">
          <div className="first-details">
            <h1>AFRICA IS HEATING UP, WHAT ARE YOU DOING ABOUT IT?</h1>
            <Link to='/viewproject'>  View project  </Link>
            
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
