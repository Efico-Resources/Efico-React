import React, { Component } from 'react'

class FaqPagination extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const {questions, answers, index} = this.props
        console.log(questions, answers);
        return (
            <div>
            <div class="container-fluid child">
                <h3 class="questions">
                    {questions}
                </h3>
                <p id="ans" class="answers">{answers}</p>
    	    </div>
            </div>
        )
    }
}

export default FaqPagination