import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

function Users({ ready, users }) {
    return (
        <div>
            <h4>All Users</h4>

            {ready ? (
                <ul className="collection">
                    {users.map((user) => (
                        <li key={user._id} className="collection-item">
                            <span className="title">
                                <b>{user.profile.name}</b>
                            </span>
                            <p>{user.emails[0].address}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading users</p>
            )}
        </div>
    )
}

export default withTracker(() => {
    const users = Meteor.subscribe('users')
    const ready = users.ready()

    return {
        ready,
        users: Meteor.users.find({}).fetch()
    }
})(Users)
