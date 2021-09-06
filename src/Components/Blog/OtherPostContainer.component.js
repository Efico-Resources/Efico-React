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
                <div class="ol-post-container">
                        <div class="img">
                            <img src="../Assets/img/ol image 1.jpg" alt="" />
                        </div>
                        <div class="ol-post-description">
                            <div class="post-title">
                                <h3>
                                    The Complete guide to acing interviews!
                                </h3> 
                            </div>
                            <div class="post-details">
                                <p class="date">
                                    May 22, 2021
                                </p>
                                <p class="read-time">
                                    20 Mins
                                </p>
                            </div>
                            <div class="read-more">
                                <Link to="/blog">Read more...</Link>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default OtherPostContainer