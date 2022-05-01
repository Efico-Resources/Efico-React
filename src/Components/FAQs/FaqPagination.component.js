import React, { Component } from 'react'

class FaqPagination extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const {questions, answers} = this.props
        console.log(questions, answers);
        return (
            <div>
            <div className="container-fluid child">
                <h3 className="questions">
                    {questions}
                </h3>
                <p id="ans" className="answers">{answers}</p>
    	    </div>
            </div>
        )
    }
}

export default FaqPagination