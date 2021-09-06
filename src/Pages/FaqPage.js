import React, { Component } from 'react'
import FaqContainer from '../Components/FAQs/FaqContainer.component'
import Footer from '../Components/Footer.component'
import Header from '../Components/Header.component'

class FaqPage extends Component {
    constructor(){
        super()

        this.state = {
            userInput: ""
        }

        this.handleSearchInput = this.handleSearchInput.bind(this)
    }

    handleSearchInput = (e) => {
        this.setState({userInput: e.target.value})
    }

    render() {
        return (
            <div>
            <Header 
                title = "Frequently Asked Questions"
                subtitle= "Welcome, what would you like to know?"
                image = "faqs"
                showSearch = {true}
                onKeywordChanged = {this.handleSearchInput}
            />
                <FaqContainer  userInput={this.state.userInput} />
                <Footer />
            </div>
        )
    }
}

export default FaqPage