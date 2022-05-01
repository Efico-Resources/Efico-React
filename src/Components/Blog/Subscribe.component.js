import React, { Component } from 'react'

class Subscribe extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
        <div>
        <section className="subscribe">
            <div className="section-header">
                <h2>Subscribe to our channels</h2>
            </div>
            <div className="subscribe-container">
                <div className="podcast">
                    <div className="img">
                        <img src="../Assets/img/podcast image.jpg" alt="podcast" />
                    </div>
                    <div className="subscribe-btn">
                        <button className="pBtn">
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className="youTube">
                    <div className="img">
                        <img src="../Assets/img/youtube image.jpg" alt="YouTube" />
                    </div>
                    <div className="subscribe-btn">
                        <button className="pBtn">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section> 
            </div>
        )
    }
}

export default Subscribe