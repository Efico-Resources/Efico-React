import React from 'react'
import { Link } from 'react-router-dom'

function BlogCards() {
    return (
        <div className="blog-img-container">
            <img src="Assets/img/bimg-1.png" alt="Blog 1" />
            <div className="blog-contents">
                <div className="blog-descriptions">
                    <div className="blog-details">
                        <p className="date">July 2, 2021</p>
                        <p className="duration">17 mins</p>
                    </div>
                    <div className="blog-title">
                        <h2>What kind of learner are you? Take our online quiz to find out.</h2>
                    </div>
                    <div className="read-more-link">
                        <Link to="/blog">Read more...</Link> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCards
