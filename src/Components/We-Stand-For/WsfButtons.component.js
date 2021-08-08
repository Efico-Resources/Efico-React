import React, { Component } from 'react'

let status = "none"

class WsfButtons extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hidden: true
        }
        // this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle = () => {
        this.setState({hidden: !this.state.hidden})
        this.state.hidden ? status = " " : status = "none"
        console.log(status);
        return status
    }

    render() {
        const {btnText, description, index} = this.props
        return (
            <div className="wsf-button">
                <button className="pBtn wsf-btn" onClick={this.handleToggle.bind(this)}>
                    {btnText}
                </button>
                <div className={`wsf-button-content ${status}`}>
                    <div className="image">
                        <img src={`Assets/img/wsf-img-${index}.jpg`} alt="Efficient image" />
                    </div>
                    <div className="description">
                        {description}
                    </div>
                </div>
            </div>
        )
    }
}

export default WsfButtons