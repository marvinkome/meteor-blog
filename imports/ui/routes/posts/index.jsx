import React from 'react'
import { Meteor } from 'meteor/meteor'
import PostApi from '/imports/api/posts'
import { withTracker } from 'meteor/react-meteor-data'
import { Link } from 'react-router-dom'

function renderEmptyPost() {
    return (
        <div className="empty-post">
            <p>No post available. Please come back later for awesome content</p>
        </div>
    )
}

function Posts({ posts }) {
    return (
        <div className="container posts-page">
            <h2>All Posts</h2>

            <div className="posts-list">
                {!posts.length ? renderEmptyPost() : null}

                <div className="row">
                    {posts.map((post) => {
                        return (
                            <div key={post._id} className="col s12 m6">
                                <div className="card">
                                    <div className="card-content">
                                        <span className="card-title">{post.title}</span>
                                        <p className="post-details">
                                            <span className="grey-text text-darken-3">
                                                <b>by</b> {post.author.profile.name}
                                            </span>
                                            <span className="grey-text text-darken-3">
                                                {' '}
                                                <b>on</b> 12/09/2018
                                            </span>
                                        </p>
                                        <p className="truncate">{post.content}</p>
                                    </div>
                                    <div className="card-action">
                                        <Link to={`/blog/${post._id}`}>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default withTracker(() => {
    Meteor.subscribe('posts')

    return {
        posts: PostApi.find({}).fetch()
    }
})(Posts)
