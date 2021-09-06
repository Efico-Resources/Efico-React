import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <div class="blog-posts-container">
                    <div class="post-container">
                        <div class="img">
                            <img src="Assets/img/blog image 1.jpg" alt="The one-billion-dollar idea!" />
                        </div>
                        <div class="post-description">
                            <div class="post-details">
                                <p class="date">
                                    May 22, 2021
                                </p>
                                <p class="read-time">
                                    20 Mins
                                </p>
                            </div>
                            <div class="post-title">
                                <h3>The one-billion-dollar idea!</h3>
                            </div>
                            <div class="post-content">
                                You know what billionaires like Jeff Bezos, Elon Musk, Bill Gates, Mark Zuckerberg and the likes all have in common? It’s a little lightbulb of the mind called idea. All businesses or innovations all started from someone having an idea, but of course it doesn’t take just an idea to build a successful business, if not the world would be full of billionaires by now. Just like a sequoia seed would require other factors to grow into a big giant tree, so does ideas. Here are few practical ways on how to turn your idea into a billion dollars.
                            </div>
                            <div class="read-more">
                                <Link to="/blog">Read more...</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostContainer