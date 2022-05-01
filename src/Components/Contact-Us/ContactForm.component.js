import React, { Component } from 'react'

class ContactForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <form id="contact-form" target="">
                <h2>contact form</h2>
                <h5>Please fill this form and we’ll get back to you within 24 hours</h5>
                <div className="form-input">
                    <div>
                        <label for="name">Your name</label><br/>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div>
                        <label for="email">Email</label><br/>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div>
                        <label for="telephone">Phone number</label><br />
                        <input type="tel" name="email" id="telephone" />
                    </div>
                </div>
            <div className="services-con">
                <h4 className="ser">services</h4>
                <div className="services">
                    <button>Training</button>
                    <button>Writing</button>
                    <button>Affiliate</button>
                    <button>Business & Career</button>
                </div>
            </div>
            <div className="msg">
            <h4>Message</h4>
            <textarea id="message" rows="12" name="message"></textarea>
            <input type="submit" name="message" value="Send message" />
            </div>

        </form>
        )
    }
}

export default ContactForm