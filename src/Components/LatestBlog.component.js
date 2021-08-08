import React from 'react'

function LatestBlog() {
    return (
        <div class="latest-blog">
                <div class="lbImg">
                    <img src="Assets/img/lbImg-1.png" alt="Latest Blog Image" />
                </div>
                <div class="lbContents">
                    <div class="blog-details">
                        <p class="date">July 1, 2021</p>
                        <p class="duration">3 mins</p>
                    </div>
                    <div class="blog-title">
                        <h2>Is your career a sinking ship?</h2>
                    </div>
                    <div class="blog-description">
                        In a world where more tasks are being automated, and more jobs are getting extinct, changing career paths is, more often than not, a necessity.
                    </div>
                    <div class="read-more-link">
                        <a href="#">Read more...</a>
                    </div>
                </div>
        </div>
    )
}

export default LatestBlog