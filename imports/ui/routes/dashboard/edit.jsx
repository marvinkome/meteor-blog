import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import PostApi from '/imports/api/posts'

class EditPost extends React.Component {
    submitPost = (e) => {
        e.preventDefault()

        const title = e.target['title'].value
        const content = e.target['content'].value

        Meteor.call(
            'posts.updatePost',
            {
                id: this.props.match.params.id,
                title,
                content
            },
            (err, res) => {
                if (err) {
                    return M.toast({ html: 'Error updating posts' })
                } else {
                    this.props.history.push('/blog/' + this.props.match.params.id)
                }
            }
        )
    }

    renderLoading() {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }

    renderEmpty() {
        return <p>Post not found</p>
    }

    render() {
        if (!this.props.isReady) {
            return this.renderLoading()
        }

        if (!this.props.posts[0]) {
            return this.renderEmpty()
        }

        const post = this.props.posts[0]

        return (
            <div className="create-post">
                <h3>Edit Post</h3>

                <div className="create-form">
                    <form className="row" onSubmit={this.submitPost}>
                        <div className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input defaultValue={post.title} id="title" type="text" />
                                    <label htmlFor="title">Post Title</label>
                                </div>
                            </div>
                        </div>

                        <div className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <textarea
                                        defaultValue={post.content}
                                        id="content"
                                        className="materialize-textarea"
                                    />
                                    <label htmlFor="content">Content</label>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: 10 }} className="col s12">
                            <button type="submit" className="btn waves-effect waves-light">
                                Publish
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withTracker((props) => {
    const post = Meteor.subscribe('posts')
    const isReady = post.ready()

    return {
        isReady,
        currentUser: Meteor.user(),
        posts: PostApi.find({ _id: props.match.params.id }).fetch()
    }
})(EditPost)
