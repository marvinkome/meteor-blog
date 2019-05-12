import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import { Link } from 'react-router-dom'
import PostApi from '/imports/api/posts'

function deletePost(id, history) {
    Meteor.call('posts.deletePost', id, (err, res) => {
        if (err) {
            console.error(err)
            return M.toast({ html: 'Error deleting post' })
        }

        history.push('/')
    })
}

function SinglePost({ posts, currentUser, isReady, history }) {
    const post = posts[0]
    let content = <p>Loading...</p>

    if (!post) {
        content = <p>Post not found</p>
    }

    if (isReady && post) {
        content = (
            <div>
                <div className="header">
                    <h3>{post.title}</h3>
                </div>

                <div className="content">
                    <p>{post.content}</p>
                </div>

                {Roles.userIsInRole(currentUser, ['admin']) && (
                    <div>
                        <Link className="blue-text" to={'/dashboard/edit/' + post._id}>
                            Edit
                        </Link>{' '}
                        <a
                            href="#"
                            className="red-text"
                            onClick={() => deletePost(post._id, history)}
                        >
                            Delete
                        </a>
                    </div>
                )}
            </div>
        )
    }

    return <div className="container">{content}</div>
}

export default withTracker((props) => {
    const post = Meteor.subscribe('posts')
    const isReady = post.ready()

    return {
        isReady,
        currentUser: Meteor.user(),
        posts: PostApi.find({ _id: props.match.params.id }).fetch()
    }
})(SinglePost)
