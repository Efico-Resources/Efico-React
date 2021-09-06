import React, { Component } from 'react'
import BlogWrapper from '../Components/Blog/BlogWrapper.component'
import Footer from '../Components/Footer.component'
import Header from '../Components/Header.component'

class BlogPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Header 
                    title="Blog"
                    subtitle="We share different opinions and school of thought on controversial topics that borders our mission"
                    showSearch={true}
                    image="blogPage"
                />
                <BlogWrapper />
                <Footer />
            </div>
        )
    }
}

export default BlogPage