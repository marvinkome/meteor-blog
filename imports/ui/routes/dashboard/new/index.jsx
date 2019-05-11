import React, { useEffect } from 'react'
import tinymce from 'tinymce/tinymce'

function Create() {
    useEffect(() => {
        tinymce.init({
            selector: '#post',
            height: 500,
            skin_url: '/packages/teamon_tinymce/skins/lightgray'
        })

        return function cleanup() {
            tinymce.remove('#post')
        }
    })

    return (
        <div className="create-post">
            <h2>Add New Post</h2>

            <div className="create-form">
                <div className="field">
                    <input type="text" id="title" placeholder="Title" />
                </div>

                <div className="field">
                    <textarea id="post" />
                </div>

                <button>Publish</button>
            </div>
        </div>
    )
}

export default Create
