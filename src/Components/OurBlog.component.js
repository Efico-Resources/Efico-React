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
            <section className="our-blog">
        <h2 className="section-title">Our Blog</h2>
        <div className="blog">
        <div className="blog-cards">
            <LatestBlog />
            <div className="blog-cards-lg" id="blog-block">
                <BlogCards />
                <BlogCards />
                <div className="blog-btn">
                    <Link to="/blog" className="pBtn" id="block-btn">
                        Visit Blog
                    </Link>
                </div>
            </div>
        </div>
        <div className="sm-blog-btn">
            <Link to="/blog" className="pBtn" id="block-btn">
                Visit Blog
            </Link>
        </div>  
    </div>
    </section>
        )
    }
}

export default OurBlog
