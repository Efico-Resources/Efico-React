import React, { Component } from 'react'
import PostContainer from './PostContainer.component'

class BlogPosts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
        <div>
        <section className="blog-posts">
            <div className="outer-container">
                <PostContainer />
            </div>
            <div className="section-btn">
                <button className="pBtn">
                    Next Page
                </button>
                <div className="pagination-btns">
                    <button className="pagBtns">
                        1
                    </button>
                    <button className="pagBtns">
                        2
                    </button>
                    <button className="pagBtns">
                        3
                    </button>
                    <button className="pagBtns">
                        4
                    </button>
                    <button className="pagBtns">
                        5
                    </button>
                </div>
            </div>
        </section>
        </div>
        )
    }
}

export default BlogPosts