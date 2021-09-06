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
        <section class="blog-posts">
            <div class="outer-container">
                <PostContainer />
            </div>
            <div class="section-btn">
                <button class="pBtn">
                    Next Page
                </button>
                <div class="pagination-btns">
                    <button class="pagBtns">
                        1
                    </button>
                    <button class="pagBtns">
                        2
                    </button>
                    <button class="pagBtns">
                        3
                    </button>
                    <button class="pagBtns">
                        4
                    </button>
                    <button class="pagBtns">
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