import React, { Component } from "react";
import Footer from "../Components/Footer.component";
import ProjectHeader from "../Components/ProjectHeader";
import "../Components/Projects/projects.scss";
import volunteer from "../headerImages/volunteer.jpg";

class ProjectPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="projectss">
        <ProjectHeader
          title="Projects"
          subtitle="
                    Contributing tiredlessly to the awareness, development and sanity of the community
                    and immediate society is priority.
                    "
          subsubtitle="We are Efico, we are the change we want to see in Africa."
          showSearch={false}
          showBtn = {true}
          image="project"
        />
        <section className="about-txt">
          <div className="about-txt-container">
            <div className="about-header">
              <h2>Global Projects</h2>
            </div>
            <div className="about-content" style={{ marginBottom: "1rem" }}>
              We utilise resources and team members to contribute to the growth
              and a better society. We carefully observe trends and changes in
              the society and thoroughly search out a way to address these
              changes in the best way possible. These projects are aimed at a
              better Africa, hence, we are the change Africa wants to see.
            </div>
            <div className="about-content" style={{ marginBottom: "2rem" }}>
              We have the best teams with undying zeal and passion for Africa.
              They contribute time, knowledge, skill an influence to see that
              all ends of Africa gets aware of the environmental and physical
              changes.
            </div>
            <div className="about-header">
              <h2>Project Design Pattern</h2>
            </div>
            <div className="about-content">
              As much as we have a project Pattern, we are dynamic and we adopt
              a pattern that can reach a larger public. We follow three major
              procedures:
            </div>
          </div>
        </section>

        {/* CARDS SECTION */}
        {/* CARDS SECTION */}

        <div className="projects-landing-blog">
          <div className="firstblog-flex">
            <div className="first-section">
              <div className="outer">
                <div className="first-details">
                  <h1>Research </h1>

                  <p>
                    Change the inevitable, hence our team keeps track on changes
                    and updates in the society through thorough and adequate
                    research.
                  </p>
                </div>
              </div>
            </div>
            <div className="first-section">
              <div className="outer">
                <div className="first-details">
                  <h1>Ideate</h1>

                  <p>
                    We identify the challenges around us and brainstorm how to
                    solve them.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="first-section">
            <div className="outer">
              <div className="first-details">
                <h1>Execute</h1>
                <p>
                  We don't just document research, challenges and solutions, We
                  jump to work. We implement proposed solutions to reach as many
                  audience as possible.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* VOLUNTEER SECTION */}
        {/* VOLUNTEER SECTION */}

        <div className="projects-volunteer">
          <div className="about-header">
            <h2>Become a volunteer</h2>
          </div>
          <div className="volunteer-flex">
            <div className="volunteer-flex1">
              <h4>Join Efico to volunteer and impact your society</h4>
              <p>
                Become a volunteer and be part of history today, join the
                thousands of volunteer making impact. Efico is looking for
                diverse volunteers - just like you. Be part of our inspiration
                onto action.
              </p>

              <div className="vol-btn" style={{margin: '0'}}>
                <a
                  href="https://ix3utmky3iq.typeform.com/to/a8OnrbCm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Become a volunteer
                </a>
              </div>
            </div>
            
            <div className="volunteer-flex1">
              <img src={volunteer} alt="" />
            </div>
        </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default ProjectPage;
