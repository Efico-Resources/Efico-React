import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class OtherPostContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <div className="ol-post-container">
                        <div className="img">
                            <img src="../Assets/img/ol image 1.jpg" alt="" />
                        </div>
                        <div className="ol-post-description">
                            <div className="post-title">
                                <h3>
                                    The Complete guide to acing interviews!
                                </h3> 
                            </div>
                            <div className="post-details">
                                <p className="date">
                                    May 22, 2021
                                </p>
                                <p className="read-time">
                                    20 Mins
                                </p>
                            </div>
                            <div className="read-more">
                                <Link to="/blog">Read more...</Link>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default OtherPostContainer