import React from 'react'
import PostApi from '/imports/api/posts'
import { withTracker } from 'meteor/react-meteor-data'

function renderEmptyPost() {
    return (
        <div className="empty-post">
            <p>No post available. Please come back later for awesome content</p>
        </div>
    )
}

function Posts({ posts }) {
    return (
        <div className="posts-page">
            <h2>All Posts</h2>

            <div className="posts-list">
                {!posts.length ? renderEmptyPost() : null}

                {posts.map((post) => {
                    return (
                        <div className="post">
                            <h3>{post.title}</h3>
                            <p className="post-details">
                                <span>by {post.author.username}</span>
                                <span>on 12/09/2018</span>
                            </p>

                            <p className="post-content">{post.content}</p>

                            <a href={`/blog/${post._id}`}>Read More</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default withTracker(() => {
    return {
        posts: PostApi.find({}).fetch()
    }
})(Posts)
