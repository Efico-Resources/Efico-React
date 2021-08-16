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
        <section class="subscribe">
            <div class="section-header">
                <h2>Subscribe to our channels</h2>
            </div>
            <div class="subscribe-container">
                <div class="podcast">
                    <div class="img">
                        <img src="../Assets/img/podcast image.jpg" alt="podcast" />
                    </div>
                    <div class="subscribe-btn">
                        <button class="pBtn">
                            Subscribe
                        </button>
                    </div>
                </div>
                <div class="youTube">
                    <div class="img">
                        <img src="../Assets/img/youtube image.jpg" alt="YouTube" />
                    </div>
                    <div class="subscribe-btn">
                        <button class="pBtn">
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