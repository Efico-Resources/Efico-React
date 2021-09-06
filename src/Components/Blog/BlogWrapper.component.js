import React, { Component } from 'react'
import BlogPosts from './BlogPosts.component'
import FeaturedBlog from './FeaturedBlog.component'
import LatestBlog from './LatestBlog.component'
import OtherLatestPost from './OtherLatestPost.component'
import Subscribe from './Subscribe.component'

class BlogWrapper extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <LatestBlog />
                <FeaturedBlog />
                <BlogPosts />
                <OtherLatestPost />
                <Subscribe />
            </div>
        )
    }
}

export default BlogWrapper