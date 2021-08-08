import React, { Component } from 'react'
import ContactHead from '../Components/Contact-Us/ContactHead.component'
import Footer from '../Components/Footer.component'
import Header from '../Components/Header.component'

class ContactUsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Header 
                    title = "Contact Us"
                    subtitle= "With our quick response mechanism that caters for all your enquiries, we always want to hear from you!"
                    image = "contact"
                />
                <ContactHead />
                <Footer />
            </div>
        )
    }
}

export default ContactUsPage