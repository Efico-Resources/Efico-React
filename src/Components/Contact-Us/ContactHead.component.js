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
                    <span><a href="#"><i className="fab fa-facebook-square"></i></a></span>
                    <span><a href="#"><i className="fab fa-instagram"></i></a></span>
                    <span><a href="#"><i className="fab fa-tiktok"></i></a></span>
                    <span><a href="#"><i className="fas fa-podcast"></i></a></span>
                    <span><a href="#"><i className="fab fa-twitter"></i></a></span>
                    <span><a href="#"><i className="fab fa-youtube"></i></a></span>
                    <span><a href="#"><i className="fab fa-linkedin"></i></a></span>
                </div>
                <Link to="/faqs"><h3 className="faq">Check out most frequently asked questions on Efico!</h3></Link>
            </div>

            <div id="sponsor">
                <h3>Become a sponsor</h3>
                <h5>You can be one of our sponsors and be featured on some of our exclusive events and program.</h5>
                <p>Some of our sponsors in the past have been individuals, grant providers and organizations.
            You too can be one of our sponsors to fulfil our vision of liberating economic prosperity by
            addressing the grassroots.</p>
            <button>contact us</button>
            </div>
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactHead
