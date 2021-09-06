import React, { Component } from 'react'
// import BlogWrapper from '../Components/Blog/BlogWrapper.component'
// import Footer from '../Components/Footer.component'
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
                    title="Coming Soon"
                    subtitle="Our Blog page is almost ready, bear with us for the delay"
                    showSearch={false}
                    image="coming-soon"
                />
                {/* <BlogWrapper />
                <Footer /> */}
            </div>
        )
    }
}

export default BlogPage