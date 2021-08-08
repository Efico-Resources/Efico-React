import React from 'react'

function BlogCards() {
    return (
        <div class="blog-img-container">
            <img src="Assets/img/bimg-1.png" alt="Blog 1" />
            <div class="blog-contents">
                <div class="blog-descriptions">
                    <div class="blog-details">
                        <p class="date">July 2, 2021</p>
                        <p class="duration">17 mins</p>
                    </div>
                    <div class="blog-title">
                        <h2>What kind of learner are you? Take our online quiz to find out.</h2>
                    </div>
                    <div class="read-more-link">
                        <a href="google.com">Read more...</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCards
