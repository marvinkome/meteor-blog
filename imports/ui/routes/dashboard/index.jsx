import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import { Route } from 'react-router-dom'

// routes
import Create from './new'
import Edit from './edit'
import Users from './users'

function Dashboard({ currentUser }) {
    const isAdmin = Roles.userIsInRole(currentUser, ['admin'])

    return (
        <div className="container">
            {currentUser === undefined && <p>Loading...</p>}

            {currentUser !== undefined && !isAdmin ? (
                <div>
                    <p>Permission Denied</p>
                </div>
            ) : (
                <div>
                    <Route exact path="/dashboard/edit/:id" component={Edit} />
                    <Route exact path="/dashboard/create" component={Create} />
                    <Route exact path="/dashboard/users" component={Users} />
                </div>
            )}
        </div>
    )
}

export default withTracker(() => ({
    currentUser: Meteor.user()
}))(Dashboard)
