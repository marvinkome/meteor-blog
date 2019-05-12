import React from 'react'
import { Meteor } from 'meteor/meteor'

class NewPost extends React.Component {
    submitPost = (e) => {
        e.preventDefault()

        const title = e.target['title'].value
        const content = e.target['content'].value

        Meteor.call('posts.createPost', { title, content }, (err, res) => {
            if (err) {
                return M.toast({ html: 'Error creating posts' })
            } else {
                this.props.history.push('/blog/' + res)
            }
        })
    }

    render() {
        return (
            <div className="create-post">
                <h3>Add New Post</h3>

                <div className="create-form">
                    <form className="row" onSubmit={this.submitPost}>
                        <div className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="title" type="text" />
                                    <label htmlFor="title">Post Title</label>
                                </div>
                            </div>
                        </div>

                        <div className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <textarea id="content" className="materialize-textarea" />
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

export default NewPost
