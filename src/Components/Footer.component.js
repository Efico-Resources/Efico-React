import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer" style={{ background: "#3C185B" }}>
      <form id="form">
        <h2 className="head">Subscribe to our newsletter</h2>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email Address"
          />
        </label>
        <input type="submit" id="submit" name="submit" value="submit" />
      </form>
      <div className="col-con">
        <div className="col1" style={{ paddingBottom: 2 + "em" }}>
          <h5 className="co1" style={{ paddingBottom: 0.5 + "em", color: '#E1DB46' }}>
            Contact
          </h5>
          <span>
            <i
              className="fas fa-map-marker-alt"
              style={{ marginRight: ".5rem" }}
            ></i>
            <span>Ladipo, Lagos</span>
          </span>
          <br />
          <br />
          <span>
            <i className="fas fa-phone" style={{ marginRight: ".5rem" }}></i>
            <span>+234 905 407 8392</span>
          </span>
          <br />
          <br />
          <span>
            <i className="far fa-envelope" style={{ marginRight: ".5rem" }}></i>
            <span>
              <a
                href="mailto: david.adefunmilayo@eficoresource.com"
                style={{ textDecoration: "none", color: "white", padding: "0" }}
              >
                David.Adefunmilyo@eficoresource.com
              </a>
            </span>
          </span>
          <br />
          <span>
          <button className="view-fs-btn" 
          style={{marginTop: '1rem', padding: '10px', height: '3rem', color: 'black'}}>
              <a
                href="https://flutterwave.com/pay/savetheclimateprojectfcat"
                target="_blank"
                rel="noreferrer"
              >
                Donate
              </a>
            </button>
          </span>
        </div>
        <div className="col2" style={{ paddingBottom: 2 + "em" }}>
          <h5 className="co2">Efico</h5>
          <ul style={{ paddingLeft: "0" }}>
            <li className="cont">
              <Link to="/about">About Us</Link>
            </li>
            <li className="cont">
              <Link to="/services">Services</Link>
            </li>
            <li className="cont">
              <Link to="/about">Team</Link>
            </li>
            <li className="cont">
              <Link to="/services">Sponsorship</Link>
            </li>
            {/* <li className="cont">
              <Link to="/services">Affiliate Programme</Link>
            </li> */}
            <li className="cont">
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="col3" style={{ paddingBottom: 2 + "em" }}>
          <h5 className="co3">Resources</h5>
          <ul style={{ paddingLeft: "0" }}>
            <li className="cont">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="cont">
              <Link to="/services">Training</Link>
            </li>
            <li className="cont">
              <Link to="/faqs">FAQs</Link>
            </li>
            <li className="cont">
              <Link to="/project">Projects</Link>
            </li>
            <li className="cont">
              <Link to="/viewproject">Save The Climate PROJECT</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="con">
        <div className="child2">
          <span>
            <a
              href="https://www.facebook.com/resources.efico"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
          </span>
          <span>
            <a
              href="https://www.instagram.com/p/CSxVJtojf5c/?utm_medium=copy_link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </span>
          <span>
            <a
              href="https://vm.tiktok.com/ZMRHv2mFq/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </span>
          <span>
            <a
              href="https://anchor.fm/eficoradio/episodes"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-podcast"></i>
            </a>
          </span>
          <span>
            <a
              href="https://twitter.com/EficoResources"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </span>
          <span>
            <a
              href="https://youtube.com/channel/UC4BCMxcqIsr_ZBBafiAWV4g"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/company/efico-resources"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </span>
        </div>
        
        <div className="child1">
          <p> &copy; 2022 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
