import React, { PureComponent } from 'react'

import LatestBlog from './LatestBlog.component'
import BlogCards from './BlogCards.component'
import { Link } from 'react-router-dom'

class OurBlog extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <section class="our-blog">
        <h2 class="section-title">Our Blog</h2>
        <div class="blog">
        <div class="blog-cards">
            <LatestBlog />
            <div class="blog-cards-lg" id="blog-block">
                <BlogCards />
                <BlogCards />
                <div class="blog-btn">
                    <button class="pBtn">
                        Visit Blog
                    </button>
                </div>
            </div>
        </div>
        <div class="sm-blog-btn">
            <Link to="/blog" class="pBtn" id="block-btn">
                Visit Blog
            </Link>
        </div>  
    </div>
    </section>
        )
    }
}

export default OurBlog
