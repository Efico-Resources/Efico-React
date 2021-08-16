import React, { Component } from 'react'

class FeaturedBlog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
        <div>
            <section className="featured-blog">
                <div className="featured-blog-container">
                    <div className="img">
                        <img src="../Assets/img/featured-blog image 1.jpg" alt="featured blog" />
                    </div>
                    <div className="featured-blog-description">
                        <div className="post-details">
                            <p className="post-date">
                                May 24, 2021
                            </p>
                            <p className="read-time">
                                17 Mins
                            </p>
                        </div>
                        <div className="blog-title">
                            <h3>
                                Finding solace in a chaotic world.
                            </h3>
                        </div>
                        <div className="blog-description">
                            Have you ever just wanted to get away from everything? From the noise? School stress? Family drama or the society? Even if it was just for a few hours, you just want a place where you can totally be at peace. Well you’re not alone, most of us have felt this at certain points in our lives. 
                        </div>
                        <div className="read-more">
                            <a href="">Read more...</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        )
    }
}

export default FeaturedBlog