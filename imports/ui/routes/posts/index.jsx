import React from 'react'

function Posts() {
    return (
        <div className="posts-page">
            <h2>All Posts</h2>

            <div className="posts-list">
                <div className="post">
                    <h3>Post One</h3>
                    <p className="post-details">
                        <span>by Author</span>
                        <span>on 12/09/2018</span>
                    </p>

                    <p className="post-content">
                        This is the post excerpt. Just first 20 text out of main content
                    </p>

                    <button>Read More</button>
                </div>

                <div className="post">
                    <h3>Post Two</h3>
                    <p className="post-details">
                        <span>by Author</span>
                        <span>on 12/09/2018</span>
                    </p>

                    <p className="post-content">
                        This is the post excerpt. Just first 20 text out of main content
                    </p>

                    <button>Read More</button>
                </div>

                <div className="post">
                    <h3>Post Three</h3>
                    <p className="post-details">
                        <span>by Author</span>
                        <span>on 12/09/2018</span>
                    </p>

                    <p className="post-content">
                        This is the post excerpt. Just first 20 text out of main content
                    </p>

                    <button>Read More</button>
                </div>

                <div className="post">
                    <h3>Post Four</h3>
                    <p className="post-details">
                        <span>by Author</span>
                        <span>on 12/09/2018</span>
                    </p>

                    <p className="post-content">
                        This is the post excerpt. Just first 20 text out of main content
                    </p>

                    <button>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Posts
