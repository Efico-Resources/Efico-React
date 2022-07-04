import React, { Component } from "react";

import ProjectNavBar from "./ProjectNavBar";

class ProjectHeader extends Component {
  render() {
    const {
      image,
      title,
      subtitle,
      subsubtitle,
      showBtn,
      showSearch,
      onKeywordChanged,
    } = this.props;
    return (
      <header className={image}>
        <ProjectNavBar />
        <div className="header-contents">
          <div className="header-title">
            <h1>{title}</h1>
          </div>
          <div className="header-caption">{subtitle}</div>
          <div className="header-caption" style={{ margin: "2rem" }}>
            {subsubtitle}
          </div>
          {showBtn && (
            <div style={{ display: "flex", justifyContent: "space-between"}}>
              <div
                className="vol-btn"
                style={{ width: "9rem", marginLeft: '0px', background: "transparent", border: '1px solid white', borderRadius: '4px' }}
              >
                <a
                  href="https://ix3utmky3iq.typeform.com/to/a8OnrbCm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Us
                </a>
              </div>
              <div
                className="vol-btn"
                style={{ width: "9rem", border: '1px solid white', borderRadius: '4px' }}
              >
                <a
                  href="https://flutterwave.com/pay/savetheclimateprojectfcat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate
                </a>
              </div>
            </div>
          )}
          {showSearch && (
            <div className="search-btn">
              <span className="fas fa-search "></span>
              <input
                id="search"
                onChange={onKeywordChanged}
                type="text"
                name="search"
                placeholder="Search keywords to find answers"
              />
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default ProjectHeader;
