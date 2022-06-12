import React, { Component } from 'react'
import OtherPostContainer from './OtherPostContainer.component'

class OtherLatestPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
        <div>
            <div className="section-title">
                Latest Posts
            </div>
            <section className="other-latest-posts">
                <div className="other-latest-posts-container">
                    <OtherPostContainer />
                </div>
            </section>
        </div>
        )
    }
}

export default OtherLatestPost