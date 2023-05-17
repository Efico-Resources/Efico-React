import React from 'react'

function BlogCards() {
    return (
        <div className="blog-img-container">
            <img src="Assets/img/bimg-1.png" alt="Blog 1" />
            <div className="blog-contents">
                <div className="blog-descriptions">
                    <div className="blog-details">
                        {/* <p className="date">July 2, 2021</p> */}
                        <p className="duration">17 mins read</p>
                    </div>
                    <div className="blog-title">
                        <h2>What kind of learner are you? Take our online quiz to find out.</h2>
                    </div>
                    <div className="read-more-link">
                        <a href="https://medium.com/@eficoworld/why-finding-your-personality-type-is-important-to-your-career-success-81baeedc8635" target='_blank' rel='noreferrer'>Read more...</a> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCards
