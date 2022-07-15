import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm.component'

function ContactHead() {
    return (
        <div>
            <div id="body">
            <div id="contact-info">
                <h1>
                    contact information
                </h1>
                <div className="row1">
                    <div className="child1">
                        <h3>
                            location
                        </h3>
                        <p>
                        Ladipo, Lagos.	
                        </p>
                    </div>
                    <div className="child1">
                        <h3>
                            phone number
                        </h3>
                        <p>
                            +234 905 407 8392
                        </p>
                    </div>
                    <div className="child1">
                        <h3>
                        email
                        </h3>
                        <p>
                        Admin@eficoresource.com
                        </p>
                    </div>
                </div>
                <h3>Social Media Platforms</h3>
                <div className="sm">
                <span><Link to="https://www.facebook.com/resources.efico"><i className="fab fa-facebook-square"></i></Link></span>
                <span><Link to="https://www.instagram.com/p/CSxVJtojf5c/?utm_medium=copy_link"><i className="fab fa-instagram"></i></Link></span>
                <span><Link to="https://vm.tiktok.com/ZMRHv2mFq/"><i className="fab fa-tiktok"></i></Link></span>
                <span><Link to="https://anchor.fm/eficoradio/episodes"><i className="fas fa-podcast"></i></Link></span>
                <span><Link to="https://twitter.com/EficoResources"><i className="fab fa-twitter"></i></Link></span>
                <span><Link to="https://youtube.com/channel/UC4BCMxcqIsr_ZBBafiAWV4g"><i className="fab fa-youtube"></i></Link></span>
                <span><Link to="https://www.linkedin.com/company/efico-resources"><i className="fab fa-linkedin"></i></Link></span>
                </div>
                <Link to="/faqs"><h3 className="faq">Check out most frequently asked questions on Efico!</h3></Link>
            </div>

            <div id="sponsor">
                <h3>Become a sponsor</h3>
                <h5>You can be one of our sponsors and be featured on some of our exclusive events and program.</h5>
                <p>Some of our sponsors in the past have been individuals, grant providers and organizations.
            You too can be one of our sponsors to fulfil our vision of liberating economic prosperity by
            addressing the grassroots.</p>
            <button>
            <a
                        href="https://wa.me/message/J7OLLH63J2CQP1"
                        target="blank"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Contact Us
                      </a>
            </button>
            </div>
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactHead
