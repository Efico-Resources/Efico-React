import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LatestBlog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
        <div>
            <section className="latest-post">
                <div className="latest-post-container">
                    <div className="img">
                        <img src="Assets/img/Latest-blog image 1.jpg" alt="latest blog" />
                    </div>
                    <div className="latest-post-description">
                        <div className="post-details">
                            {/* <p className="date">July 1, 2021</p> */}
                            <p className="read-time">3 Mins read</p>
                        </div>
                        <div className="blog-title">
                            <h3>Is your career a sinking ship?</h3> 
                        </div>
                        <div className="blog-description">
                        <p>In a world where more tasks are being automated, and more jobs are getting extinct, changing career paths is, more often than not, a necessity.</p> 
                        </div>
                        <div className="read-more">
                            <Link to="/blog">Read more...</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        )
    }
}

export default LatestBlog