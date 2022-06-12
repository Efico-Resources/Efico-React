import React from 'react'
import { Link } from 'react-router-dom'

function LatestBlog() {
    return (
        <div className="latest-blog">
                <div className="lbImg">
                    <img src="Assets/img/lbImg-1.png" alt="Latest Blog" />
                </div>
                <div className="lbContents">
                    <div className="blog-details">
                        <p className="date">July 1, 2021</p>
                        <p className="duration">3 mins</p>
                    </div>
                    <div className="blog-title">
                        <h2>Is your career a sinking ship?</h2>
                    </div>
                    <div className="blog-description">
                        In a world where more tasks are being automated, and more jobs are getting extinct, changing career paths is, more often than not, a necessity.
                    </div>
                    <div className="read-more-link">
                        <Link to="/blog">Read more...</Link>
                    </div>
                </div>
        </div>
    )
}

export default LatestBlog