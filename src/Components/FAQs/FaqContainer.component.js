import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FaqPagination from './FaqPagination.component'

let facts = [
    {questions: "What is Efico all about?", answers: "We have discovered that undergraduates are not exposed to the realities of the 'life after school', some of them are confused and frustrated about the educational system and how well to navigate it and acquire skills amidst the myriads of skills available. Hence, we help them find their unique place in value creation and instill relevant skills that make their education make sense and avail them to be truly successful upon graduation.", index: 1},
    {questions: "How do I join this community?", answers: "We are building an ecosystem of competent Eficos around all campuses in Nigeria. There is an Efico hub in your school. You can join the online WhatsApp community group where you would be directed to your rightful university community after the orientation.", index: 2},
    {questions: "When and where does training take place?", answers: "Apart from the online and physical orientation, we avail paid (but immensely subsidized) training and avail you the latitude to choose from a broad spectrum of skill sets according to what you have analysed about yourself. These training sessions are both online and offline or one on one. You also have opportunities for hands-on project implementations from your school hub.", index: 3},
    {questions: "As a graduate, how do I benefit from the Efico?", answers: "Since our mission is focused majorly on undergraduates and secondary school students and helping them like a guardian angel till graduation, you might not be getting the training highly subsidized just as they do. But you can always have access to all our resources.", index: 4},
    {questions: "What if I discover that the course I am studying is different from what I discovered about myself in Efico and how can I change career?", answers: "Efico strongly believes that the first step to success is the realization of one's true self and we also rest on the tenet that every career path has some connected relationship. Hence, from the answers you will get from us, you would be able to apply yourself, mix and transfer skills to your advantage. Also, with our YouTube channel and Facebook community, you would be able to get answers to many of the questions that bugs your mind.", index: 5},
    {questions: "Does Efico help in admission processes in any way?", answers: "It is worthy of note that Efico does not have any affiliation with any tertiary institution. Efico is an independent body and does not help in any school admission process.", index: 6},
    {questions: "What happens after I graduate from school?", answers: "We believe that after graduation, you must have found your fit due to the exposure and development we would avail you. Hence after graduation, you would be translated into our alumni community and be required to mentor others as necessary to give back to your community.", index: 7}
]

let minNum = 1
let maxNum = 4


class FaqContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            btnClicked: true
        }

        this.handlePagination = this.handlePagination.bind(this)
    }

    handlePagination = () => {
        this.setState({btnClicked: !this.state.btnClicked})

        if(this.state.btnClicked){
            minNum = 5
            maxNum = 7
        }else{
            minNum = 1
            maxNum = 4
        }
    }

    render() {
        const {userInput} = this.props;
        let currentFacts = []
        let searchLength = ""
        let searchResult = 0
        if (userInput === "" || userInput === " "){
            currentFacts = facts.filter((fact) => {
                return fact.index >= minNum && fact.index <= maxNum
            })
        }else{
            currentFacts = facts.filter((fact) => {
                return (fact.questions.toLowerCase().includes(userInput.toLowerCase()) 
                || fact.answers.toLowerCase().includes(userInput.toLowerCase()))
            })
            searchLength = currentFacts.length
            searchResult = true
        }
        
        console.log(currentFacts, userInput);
        return (
            <div>
                <div class="container-fluid" style={{backgroundColor: "#f3f3f3"}}>
    	<h1 class="queshead">These are some of the most frequently asked questions about Efico</h1>

            {   searchResult ? 
                <div class="container-fluid child">
    		<h5 id="searchLength"> {`Found ${searchLength} results`}</h5>
    		{/* <h3 id="searchResult"></h3> */}
    	    </div> : null}
            {
                currentFacts.map((cFact) => {
                    return <FaqPagination answers={cFact.answers} questions={cFact.questions} key={cFact.index} />
                })
            }
    	<div class="btn-div" style={{paddingBottom: 4 + "em"}}>
        <div className="btn-container">
            <button className="faqBtn" onClick={this.handlePagination}>Next page</button>
        </div>
        <div id="NP">
        <ul class="page">
            <li class="active">1</li>
            <li>2</li>
        </ul>
        </div>
        <h3 class="endhead" >Have more questions?</h3>
        <div className="lastbtn-container">
        <button class="lastbtn faqBtn"><Link to="/contact-us">Chat us up</Link></button>

        </div>
            </div>
        </div>
        </div>
        )
    }
}

export default FaqContainer