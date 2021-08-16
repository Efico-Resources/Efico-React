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
            <div class="section-title">
                Latest Posts
            </div>
            <section class="other-latest-posts">
                <div class="other-latest-posts-container">
                    <OtherPostContainer />
                </div>
            </section>
        </div>
        )
    }
}

export default OtherLatestPost